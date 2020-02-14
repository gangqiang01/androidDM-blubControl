<template>
    <div class="wrapper" >

        <home-header :isCollapse="isCollapse" @collapseAsideNavbar="collapse"></home-header>

        <div class="body">
            <div class="content" >
                <div class="cf">
                    <transition name="fade" mode="out-in">
                        <!-- <keep-alive> -->
                        <router-view></router-view>
                        <!-- </keep-alive> -->
                    </transition>
                </div>
            </div>
            
        </div> 
        <home-footer></home-footer>  
    </div>

</template>



<style lang='scss' scoped>
    @import "../assets/css/colors";
    $nav-icon-color : $primary-color; 
    $header-height : 70px;
    $aside-width : 200px;

    .wrapper{
        display: -webkit-flex;
        display: flex;
        height: 100vh;
        flex-flow: column nowrap;
        // overflow: hidden;    
        .body{
            display: -webkit-flex;
            flex: 1;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            .menu{
                height: 100%; 
                overflow-y: auto;
                overflow-x: hidden;
                .el-menu-vertical:not(.el-menu--collapse) {
                    height: 100%;
                    width: $aside-width;
                    box-sizing: border-box;
                    i {
                        display: inline-block;                    
                    }

                    .el-menu-item-group, .el-menu-item-group li{
                        background-color: #181f23 !important;
                    }
                    .is-active{
                        background-color: rgb(27,36,40) !important;
                    }
                }
                .securityicon{
                    margin-left: -2px;
                }
                .el-menu--collapse{
                    height: 100%;
                }
            }
            .content{
                flex:1;
                margin:10px;
                padding-top: 5px;
                margin-right: 0;
                height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                .fade-enter-actice, .fade-leave-active{
                    transition: opacity .5s
                } 
                .fade-enter, .fade-leave-active{
                    opacity: 0;
                }
            }
        }

        
    }

    
</style>

<script>
    import {mapState} from 'vuex'
    import homeHeader from './main/header'
    import homeFooter from './main/footer'

    export default {
        name: 'home',
        data() {
            return {
                defaultIconColor:"#909399",
                activeIconColor: "#ffbf00",
                isCollapse: false,
                activeItem: 'devicelist',
                isUnique: true,
            };
        },
        methods: {
            collapse(){
                this.isCollapse = this.isCollapse? false: true;
            },

        },

        created(){
            this.activeItem = this.$route.meta.menuname;
        },

        computed: {
            ...mapState({
                showLoading: "globalLoading",
            }), 
            appSecurityIconColor(){
                return this.activeItem == "appSecurity"? this.activeIconColor: this.defaultIconColor      
            },   
            systemupdateIconColor(){
                return this.activeItem == "control-systemupdate"? this.activeIconColor: this.defaultIconColor 
            },
            wdIconColor(){
                return this.activeItem == "workorderlist"? this.activeIconColor: this.defaultIconColor 
            },
            
            fileIconColor(){
                return this.activeItem == "deployFile"? this.activeIconColor: this.defaultIconColor 
            }
        },

        watch: {
            $route(to, from){
                this.activeItem = to.meta.menuname;
                
            },
        },
        
        
        
        components:{
            homeHeader,
            homeFooter
        },
    }
</script>