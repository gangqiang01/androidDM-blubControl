<template>
    <div class="m-t-30 m-r-10" v-show="isSingleMode">
        <div class="text-center m-t-80">
            <i class="fa fa-tablet fa-5x  m-b-10 c-primary" ></i>
            <p>{{$t('common.deviceList')}}</p>
            <el-select v-model="devValue" ref="devId" class="m-t-10" size="small" filterable>
                 <el-option-group
                    v-for="group in deviceOptions"
                    :key="group.label"
                    :label="group.label"
                    :disabled="group.label == $t('common.offline')&& isDisabledOffDev"
                    >
                    <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <span style="float: left">{{ item.label}}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                </el-option-group>

            </el-select>
        </div>
    </div>  
</template>
<style lang="scss" scoped>
    .g-box{
        margin-top: 20px;
        margin-right: 15px;
        padding: 20px 10px;
        min-height: 418px;
        max-width: 320px;
        border: 1px solid #eee;
        border-radius: 5px;
        border-top: 3px solid #61f2f5;
        -moz-box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
        -webkit-box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
        box-shadow: 0 1px 12px 0 rgba(0,0,0,0.1);
        &:hover{
            border-top: 3px solid #61f2f5;
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
</style>


<script>
    import {getDeviceApi} from '../components/restfulapi/deviceApi'
    import {getDeviceGroupApi} from '../components/restfulapi/deviceGroupApi'
    import handleResponse from '../components/restfulapi/handleResponse'
    import {mapState} from 'vuex'

    export default{
        name: 'selectDevice',
        data(){
            return {
                devValue: '',
                deviceOptions: [],
                offlineDevices: [],
            }
        },
        props: {
            isSingleMode: {
                type: Boolean,
                default: true,
            },
            isDisabledOffDev: {
                type: Boolean,
                default: true
            }
        },
        methods:{
            
            getAllDevices(){
                if(!this.isSingleMode) {
                    console.error("Cannot operate in a batch mode");
                    return;
                }
                getDeviceApi().then((data) => {
                    handleResponse(data, (res) => {
                        if(Object.prototype.toString.call(res) === "[object Array]"){
                            if(res.length > 0){
                                let defaultDeviceAgent = localStorage.getItem("selectedAgentId");
                                let onlineDevices = [];
                                let offlineDevices = [];
                                res.forEach((val) => {
                                    if(val.isonline){
                                        onlineDevices.push({value: val.endpoint, label: val.devName})
                                    }else{
                                        offlineDevices.push({value: val.endpoint, label: val.devName})
                                        this.offlineDevices.push(val.endpoint);
                                    }
                                    if(val.endpoint === defaultDeviceAgent && val.isonline === true){
                                        this.devValue = defaultDeviceAgent;
                                    }
                                })
                                this.deviceOptions = [{label: this.$t('common.online'), options: onlineDevices}, {label: this.$t('common.offline'), options: offlineDevices}];
                            }
                        }else{
                            console.error("select-device:data is not array")
                        }
                       
                    })
                })
            },

        },
        watch:{
            onlineDeviceCount(){
                if(this.isSingleMode && !this.devValue === ""){
                    Object.assign(this.$data, this.$options.data());
                    this.getAllDevices();
                }
            },
            isSingleMode(val){
                if(val){
                    Object.assign(this.$data, this.$options.data());
                    this.getAllDevices();
                }
            },

            devValue(val){
                this.$emit("select-device",val);
                //selectedAgent is offline
                this.$emit("isOfflineDev", this.offlineDevices.indexOf(val)>-1)

                if(val&& this.isDisabledOffDev){ 
                    localStorage.setItem("selectedAgentId", val);
                }
            },
            
            isDisabledOffDev(value){
                if(value && this.offlineDevices.indexOf(this.devValue)>-1){
                    this.devValue = "";
                }
            }
        },
        
        computed:{
            ...mapState({
                onlineDeviceCount: "onlineDeviceCount"
            }),   
        },

        created(){
            if(this.isSingleMode){
                this.getAllDevices();
            }
        }
    }
</script>


