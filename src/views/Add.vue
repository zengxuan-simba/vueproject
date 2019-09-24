<template>
    <div>
       <p>标题</p>
       <input type="text" v-model="title">
       <p>内容</p>
       <input type="text" v-model="content">
      
       <br> <br> <br><div><button type="button" @click="add()">添加</button></div>
      
    </div>
   
</template>

<script>
import store from '@/store'
export default {
    name: "add",
    data () {
        return {
           title: '',
           content: ''
        } 
    },
    methods: {
        add(){
           // debugger;
            store.commit('addItem',{
               title: this.title,
               content:this.content
            }) 
            this.title = ''
            this.content = ''
            this.$router.push('/home/list')
        }
    }
}
</script>

<style scoped>

</style>