<template>
    <div class="cf">
        <mode-switch @mode-status="changeMode" class="modeSwitch"></mode-switch>
        <el-col :span="4" :offset="2">
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
        </el-col>
        <el-col :span="16" class="m-t-20" >
            <single-control 
            :selectedAgentId="selectedAgentId" 
            :isSingleMode="isSingleMode"
            @isDisabled="isDisabled"
            :isOffline="isOffline">
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
            right: 3px;
        }
    
</style>


<script>
    import selectDevice from '../../common/select-device'
    import modeSwitch from "../../common/mode-switch"
    import selectGroup from "../../common/select-group"
    import singleControl from "./bulbControlDetails/single"
    import batchControl from "./bulbControlDetails/batch"

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
                appSecurityIconColor: "#303133"
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
            }
            
        },

    }
</script>


