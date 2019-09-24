<template>
    <div>
        <form action="" v-if="!isReg">
        用户名:
        <input type="text" v-model="name">
        密码:
        <input type="password" v-model="password">
        <button type="button" @click="login()">登录</button> |
        <button type="button" @click="reg()">注册</button> |
        </form>
        <form action="" v-else>
            <div>用户名:
            <input type="text" v-model="name">
            </div> 
           <div>密码:
            <input type="password" v-model="password">
            </div>
            再次输入密码:
            <input type="password" v-model="repeat">
            <button type="button" @click="addUser()">确定</button>
            <button type="button" @click="cancel()">取消</button>
        </form>
       
        <!-- <button type="button" @click="edit()">编辑</button> -->
    </div>
</template>

<script>
import { SSL_OP_LEGACY_SERVER_CONNECT } from 'constants';
export default {
    name: "Login",
    data () {
        return{
            isReg: false,
            name: '',
            password: '',
            repeat: ''
        }
    },
    methods: {
        login() {
            if(this.name === localStorage.getItem("name") && this.password === localStorage.getItem("password")) {
               this.name = '' ;
               this.password = '' ;
               this.$router.push('/home/list');
            }else {
               alert('用户名或密码不正确！');
            }
            
        },
        // edit() {
        //     this.$router.push('/add');
        // },
        reg() {
            this.isReg = true;
        },
        addUser() {
            if (this.password === this.repeat) {
                localStorage.setItem("name",this.name);
                 localStorage.setItem("password",this.password);

                 this.name = '';
                 this.password = '' ;
                 this.isReg = false ;
            } else {
                alert('两次密码输入不一致!');
            }

            
        },
        cancel() {
            this.isReg = false;
        }

    }
}
</script>

<style scoped>

</style>