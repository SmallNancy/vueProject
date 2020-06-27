<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <Add :addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment"/>
      </div>
    </div>
  </div>
</template>

<script>

    //1、引入组件
  import Add from './components/Add';
  import List from "./components/List";


  export default {
      // 新增和删除功能
      components: {List, Add},
      data(){
        return {
            comments:[ //数据在哪个组件，更新数据的形为(方法)就应该定义在哪个组件
                {
                    name:'Bob',
                    content:'vue is good'
                },
                {
                    name:'Nancy',
                    content:'vue is useful'
                },
                {
                    name:'Cat',
                    content:'vue is well'
                }

            ]

        }
      },
      methods:{
          //添加评论
          addComment(comment) {
              //unshift:添加到最前面
              this.comments.unshift(comment)
          },
          //删除指定下标的评论
          deleteComment(index){
              this.comments.splice(index,1)
          }
      },

      comments:{
          Add,
          List
      }
  }
</script>

<style>
  .logo{
    width: 200px;
    height: 200px;
  }
</style>

