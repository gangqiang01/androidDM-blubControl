<template>
    <div v-show="!isSingleMode" class="m-t-30 m-r-10">
        <div>
            <div class="text-center m-t-80">
                <i class="fa fa-object-group fa-4x  m-b-10 c-primary " ></i>
                <p>{{$t('common.groupList')}}</p>
                <el-select v-model="groupValue" ref="devId" class="m-t-10" @change = "groupChange" size="small">
                    <el-option
                        v-for="item in groupOptions"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
            </div>
        </div>  
        <div v-show="groupValue != ''">
            <div class="text-center m-t-80">
                <i class="fa fa-tablet fa-5x  m-b-10 c-primary" ></i>
                <p>{{$t('common.onlineDevices')}}</p>
                <p class="deviceTags">
                    <el-tag size="small" v-for="(item, index) in deviceOptions" :key=index>
                        <span class="standart-icon">
                            <svg t="1570859680789" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13652" width="15" height="15" v-if="index == 0">
                                <path d="M638.907876 64.004733 384.488373 64.004733c-177.017646 0-320.517921 143.500275-320.517921 320.518944l0 254.419504c0 177.015599 143.500275 320.517921 320.517921 320.517921l254.419504 0c177.017646 0 320.517921-143.501298 320.517921-320.517921L959.425797 384.523677C959.425797 207.505008 815.926546 64.004733 638.907876 64.004733zM781.421684 477.553467l-84.316338 84.879156c-6.29538 6.54916-9.347902 16.347317-8.478092 25.78834l20.470217 120.697943c7.226588 46.978964-39.938618 82.727143-79.678714 60.175521l-105.247043-56.884568c-8.147564-4.707209-16.767895-4.707209-25.254174 0.188288l-104.662735 56.559157c-39.984666 22.688745-87.151919-13.059434-79.889515-60.261479l20.49273-120.79311c1.665942-8.654101-1.565658-18.216897-8.373715-25.303292l-84.635609-85.207637c-32.351825-33.659611-14.45113-90.218768 30.91408-97.766674l117.697609-17.072841c7.924483-0.827855 15.44476-6.884804 20.444635-16.19996l51.729152-110.463858c19.928888-43.345204 78.229712-43.345204 98.113575-0.094144l51.975768 111.007233c3.328815 7.792477 11.425214 13.845333 20.769023 15.815197l117.441782 17.051351C796.02631 387.175063 813.932122 443.733197 781.421684 477.553467z" p-id="13653" fill="#1296db"></path>
                            </svg>
                        </span>
                        {{item.label}}
                    </el-tag>
                </p>
            </div>
        </div>  
    </div>
    
</template>

<script>
    import {getDeviceGroupApi} from '../components/restfulapi/deviceGroupApi'
    import {getDeviceApi, getOnlineDeviceByGroupApi} from '../components/restfulapi/deviceApi'
    import handleResponse from '../components/restfulapi/handleResponse'
    import {setSession, getSession, checkSession} from "../assets/js/storage"

    export default{
        name: 'selectGroup',

        data(){
            return {
                groupValue:'',
                groupOptions: [],
                deviceOptions: [],
            }
        },
        props: {
            isSingleMode: {
                type: Boolean,
                default: true,
            }
        },
        methods:{
            getAllDeviceGroups(){
                if(this.isSingleMode) {
                    console.error("Cannot operate in a single mode");
                    return;
                }
                getDeviceGroupApi().then((data) => {
                    handleResponse(data, (res) => { 
                        if(Object.prototype.toString.call(res)  === '[object Array]'){
                            this.groupOptions = res;
                            if(checkSession("selectedGroup")){
                                this.groupValue = getSession("selectedGroup");
                                this.groupChange(this.groupValue);
                            }
                        }
                    })
                })
            },
            groupChange(val){
                this.deviceOptions = [];
                this.getAllDevices(val);
                setSession("selectedGroup", val);
            },
            getAllDevices(gname){
                if(this.isSingleMode) {
                    console.error("Cannot operate in a single mode");
                    return;
                }
                getOnlineDeviceByGroupApi(gname).then((data) => {
                    handleResponse(data, (res) => {
                        if(Object.prototype.toString.call(res) === "[object Array]"){
                            if(res.length >= 0){
                                res.forEach((val) => {
                                    if(val.isonline){
                                        this.deviceOptions.push({value: val.endpoint, label: val.devName})
                                    }
                                })
                                this.$emit("select-getDeviceOptions", this.deviceOptions);
                                this.$emit("select-getGroupName", gname);
                                
                            }
                        }else{
                            console.error("data is not array")
                        }
                       
                    })
                })
            },

        },
        created(){
            if(!this.isSingleMode){
                Object.assign(this.$data, this.$options.data());
                this.getAllDeviceGroups();
            }
        },
        
        watch:{
            isSingleMode(val){
                if(!val){
                    this.getAllDeviceGroups();
                }
            },
        }

    }
</script>
<style lang='scss' scoped>
    @import "../assets/css/colors";
    .g-box{
        margin-top: 20px;
        margin-right: 15px;
        padding: 0 10px 40px 10px;
        min-height: 418px;
        max-width: 320px;
        border: 1px solid #eee;
        border-top: 3px solid #f1d6ab;

        border-radius: 5px;
        -moz-box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
        -webkit-box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
        box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
        &:hover{
            -moz-box-shadow: 0 4px 12px 0 rgba(0,0,0,0.2);
            -webkit-box-shadow: 0 4px 12px 0 rgba(0,0,0,0.2);
            box-shadow: 0 4px 12px 0 rgba(0,0,0,0.2);
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
        }
    }
    .deviceTags{
        display: inline-block;
        width: 80%;
        border: 1px solid #dcdfe6;
        min-height: 30px;
        max-height: 420px;
        overflow-y: auto;
        margin-top: 5px;
        padding:3px;
        border-radius: 5px;
        background: #fff;
        .standart-icon{
            display: inline-block;
            position: relative;
            top: 3px;
        }
    }
    
    
</style>

