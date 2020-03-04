<template>
    <el-header class="nav-header">
        <ul class="nav-left" >
            <li>
                <img src="@/assets/imgs/bulb.png" alt="" style="margin-top:-10px;">
            </li>
            <li>
                Light Control
            </li>
        </ul>
        <ul class="nav-right">
            <li> 
                <el-dropdown trigger="click" >
                    <span class="el-dropdown-link">
                        <i class="fa fa-user-circle-o header-user pointer"></i> 
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="text-center" >
                            <img src="@/assets/imgs/face_black.png" alt="">
                            <p style="font-size: 23px"> {{username}}</p>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <b class="w-150 m-r-5">Last Accessed:</b>{{logintime}}
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <b class="w-150 m-r-5">Device Connected:</b>{{devicecount}}
                        </el-dropdown-item>
                        <el-dropdown-item class="m-t-10">
                            <el-button type="warning" size="small" class="fr" @click="loginout()" style="width: 100%">
                                <i class="fa fa-sign-out c-white m-r-5" aria-hidden="true"></i>
                                Login Out
                            </el-button>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>  
            </li>
        </ul>
    </el-header>
</template>
<style lang="scss" scoped>
    @import "../../assets/css/colors"; 

    .nav-header{
        background: $lightgray-color;
        border-bottom: 3px solid $androidDM-color;
        display: -webkit-flex;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        .nav-left{
            padding: 0;
            margin: 0;
            display: flex;
            li{ 
                img{
                    height: 42px;
                }
                &:nth-child(1){
                    margin-right: 1rem;
                    margin-top: 1.4rem;
                    font-size: 1.1rem;
                }
                &:nth-child(2){
                    margin-top: 0.8rem;
                    font-weight:900; 
                    font-family: 'Microsoft YaHei';
                    font-size: 2.1rem; 
                }
                color:$primary-color; 
            }
        }
        .nav-right{
            padding:0;
            margin:0;
            margin-top: 5px;
            display: flex;
            li{  
                i{
                    color: $primary-color;
                    font-size:1.5rem;
                }
                margin-left: 2rem;
                width: 1rem;
                color: $primary-color;  
            }
                              
        }
        
    }
   
</style>
<script>
import {getSession, setLocal, getLocal, removeLocal, checkLocal} from "../../assets/js/storage"
import {getOnlineDeviceCountApi} from '../restfulapi/deviceApi'
import handleResponse from '../restfulapi/handleResponse'
export default {
    name: "header",
    data() {
        return {
            username:'',
            logintime:'',
            devicecount:'',
        }
    },
    methods: {
        loginout(){
            this.$router.replace('/');
        },

        getuserinfo(){
            this.username = getSession("username");
            this.logintime = getSession("logintime");
            getOnlineDeviceCountApi().then((data) => {
                handleResponse(data, (res) => { 
                    this.devicecount = res.count;
                })
            })
        },
    },
    created(){
        this.getuserinfo();   
    },
}
</script>

