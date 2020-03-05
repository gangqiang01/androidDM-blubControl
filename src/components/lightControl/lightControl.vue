<template>
    <div class="cf">
        <mode-switch @mode-status="changeMode" class="modeSwitch"></mode-switch>
        <el-col :span="5" :offset="2">
            <select-group 
            @select-getDeviceOptions="getGroupOption" 
            @select-getGroupName="getGroupName" 
            :isSingleMode="isSingleMode">
            </select-group>
            <select-device 
            @select-device="getDeviceOption"
            @isOfflineDev="isOfflineDev" 
            :isSingleMode="isSingleMode"
            :isDisabledOffDev="isDisabledOffDev">
            </select-device>
            <div class="info" v-show="!isInstalled&& isSingleMode&& defIsShow">
                Light control app is not installed
            </div>

            <div class="switchApp" v-show="isSingleMode&& isInstalled&& defIsShow">
               
                <span>
                    Light Control App({{versionName}}):
                </span>
                
                <el-switch
                v-model="isRunning"
                @change="switchSolutionApp()">
                </el-switch>
            </div>

        </el-col>
        <el-col :span="16" class="m-t-20" >
            <single-control 
            :selectedAgentId="selectedAgentId" 
            :isSingleMode="isSingleMode"
            @isDisabled="isDisabled"
            @isRunSuccess="isRunSuccess"
            :isOffline="isOffline"
            ref="singleControl">
            </single-control>
            <batch-control 
            :selectedAgentsData="selectedAgentsData" 
            :isSingleMode="isSingleMode"
            :groupname="groupname"
            ></batch-control>
        </el-col>
    </div>
</template>
<style lang="scss" scoped>
   
    .modeSwitch{
        position: absolute;
        top: 20px;
        right: 50px;
    }

    .switchApp{
        margin-top: 20px;
        text-align: center;
        span{
            display: inline-block;
            margin-right: 10px;
            font-weight: 500;
            color: #303133;
        }
    }

    .appVersion{
        margin-top: 10px;
        font-size: 12px;
        text-align: center;
        color: #aaa;
    }

    .info{
        margin-top: 20px;
        text-align: center;
        font-size: 13px;
        color: #d9534f;
    }
    
</style>


<script>
    import selectDevice from '../../common/select-device'
    import modeSwitch from "../../common/mode-switch"
    import selectGroup from "../../common/select-group"
    import singleControl from "./lightControlDetails/single"
    import batchControl from "./lightControlDetails/batch"
    import {
        getSolutionAppValueApi,
        setSolutionAppValueApi,
        reSetSolutionAppValue,
        batchSetSolutionAppValue
    } from "../restfulapi/solutionAppApi"
    import handleResponse from '@/components/restfulapi/handleResponse'
    
    import { appControl } from '../../assets/js/lwm2mMap'

    export default{
        name: "timerSwitch",
        data(){
            return {
                selectedAgentId: '',
                selectedAgentsData: [],
                isSingleMode: true,
                groupname: '',
                //offline device is disabled
                isDisabledOffDev: true,
                //selectedAgent is offline
                isOffline: false,
                appSecurityIconColor: "#303133",
                isRunning: false,
                pkgname: "com.advantech.lightingcontrol",
                versionName: "",
                isInstalled: false,
                defIsShow: false
            }
        },
        components:{
            selectDevice,
            selectGroup,
            modeSwitch,
            singleControl,
            batchControl
        },
        methods:{

            getDeviceOption(selectedAgentId){ 
                this.selectedAgentId = selectedAgentId;
            },

            getGroupOption(selectedAgentsData){
                this.selectedAgentsData = selectedAgentsData;
            },

            initData(){
                this.selectedAgentId = "";
                this.groupname = "";
                this.selectedAgentsData = [];
                this.defIsShow = false;
                this.isInstalled= false;
            },

            changeMode(val){
                this.initData();
                this.isSingleMode = val
            },

            getGroupName(groupname){
                this.groupname = groupname;
            },

            isDisabled(value){
                this.isDisabledOffDev = value;
            },
            isOfflineDev(value){
                this.isOffline = value
            },

            getSolutionAppIsRunning(){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }

                let data= {
                    appname: this.pkgname,
                    funcid: "",
                    param: "" 
                }
                getSolutionAppValueApi(this.selectedAgentId, appControl.isRunning, data).then((obj) => {
                    handleResponse(obj, (res) => {
                        if(res.status === "CONTENT"){
                            let solutionAppInfo = JSON.parse(res.content.value);
                            let isInstalled = solutionAppInfo.isInstalled;
                            let isRunning = solutionAppInfo.isRunning;
                            let versionName = solutionAppInfo.versionName;
                            this.isInstalled = isInstalled == "true"? true: false;
                            if(this.isInstalled){
                                this.versionName = versionName;
                                this.isRunning = isRunning == "true"? true: false;
                            }
                            
                        }
                    })
                })
            },

            isRunSuccess(val){
                this.isRunning = val
            },

            switchSolutionApp(){
                if(this.isRunning){
                    this.$refs.singleControl.startSolutionApp();
                }else{
                    this.$refs.singleControl.stopSolutionApp();
                }
            }
            
        },

        watch: {
            selectedAgentId(val){
                if(val){
                    this.defIsShow = true;
                    this.getSolutionAppIsRunning();
                }
            }
        },

    }
</script>


