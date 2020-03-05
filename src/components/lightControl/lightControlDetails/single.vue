<template>
    <div  v-show="isSingleMode">
        <p class="bulb-title">
            <i class="fa fa-lightbulb-o m-r-10" aria-hidden="true"></i>
            Light Color
           
        </p>
        <div class="bulb-status">
            <el-col :md="4" :sm="6">
                <div class="info-box">
                    <div class="info-box-icon">
                        <svg t="1581558012523" class="icon m-t-15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1342"
                            width="42" height="42">
                            <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" :fill="bulbIconColor0" p-id="1343">
                            </path>
                        </svg>
                        
                        <p class="info-box-icon-title">Light1</p>
                    </div>
                    
                </div>   
            </el-col>

            <el-col :md="4" :sm="6">
                <div class="info-box">
                    <div class="info-box-icon">
                        <svg t="1581558012523" class="icon m-t-15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1342"
                            width="42" height="42">
                            <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" :fill="bulbIconColor1" p-id="1343">
                            </path>
                        </svg>
                        
                        <p class="info-box-icon-title">Light2</p>
                    </div>
                    
                </div>   
            </el-col>

            <el-col :md="4" :sm="6">
                <div class="info-box">
                    <div class="info-box-icon">
                        <svg t="1581558012523" class="icon m-t-15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1342"
                            width="42" height="42">
                            <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" :fill="bulbIconColor2" p-id="1343">
                            </path>
                        </svg>
                        
                        <p class="info-box-icon-title">Light3</p>
                    </div>
                    
                </div>   
            </el-col>
            <el-col :md="4" :sm="6">
                <div class="info-box">
                    <div class="info-box-icon">
                        <svg t="1581558012523" class="icon m-t-15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1342"
                            width="42" height="42">
                            <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" :fill="bulbIconColor3" p-id="1343">
                            </path>
                        </svg>
                        
                        <p class="info-box-icon-title">Light4</p>
                    </div>
                    
                </div>   
            </el-col>
            <el-col :md="4" :sm="6">
                <div class="info-box">
                    <div class="info-box-icon">
                        <svg t="1581558012523" class="icon m-t-15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1342"
                            width="42" height="42">
                            <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" :fill="bulbIconColor4" p-id="1343">
                            </path>
                        </svg>
                        
                        <p class="info-box-icon-title">Light5</p>
                    </div>
                    
                </div>   
            </el-col>
            <el-col :md="4" :sm="6">
                <div class="info-box">
                    <div class="info-box-icon">
                        <svg t="1581558012523" class="icon m-t-15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1342"
                            width="42" height="42">
                            <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" :fill="bulbIconColor5" p-id="1343">
                            </path>
                        </svg>
                        
                        <p class="info-box-icon-title">Light6</p>
                    </div>
                    
                </div>   
            </el-col>
            <el-button @click="refreshStatus()" type="primary" size="mini" class="m-l-20 refresh-btn">
                <i class="fa fa-refresh pointer c-white m-r-5" aria-hidden="true" ></i>
                Refresh
            </el-button>
            
        </div>
        
        <p class="bulb-title">
            <i class="fa fa-hand-o-up m-r-10" aria-hidden="true"></i>
            Change Light Color
        </p>
        <div class="blub-color m-b-20" v-loading="changeLoading">
            <el-radio-group v-model="bulbColor" @change = "setBulbColor">
                <el-radio :label="colorData.yellow" class="m-r-10">
                    <i class="fa fa-lightbulb-o blub-yellow" aria-hidden="true"></i>
                </el-radio>
                <el-radio :label="colorData.green" class="m-r-10">
                    <i class="fa fa-lightbulb-o blub-green" aria-hidden="true"></i>
                </el-radio>
                <el-radio :label="colorData.red" class="m-r-10">
                    <i class="fa fa-lightbulb-o blub-red" aria-hidden="true"></i>
                </el-radio>
                <el-radio :label="colorData.blue" class="m-r-10">
                    <i class="fa fa-lightbulb-o blub-blue" aria-hidden="true"></i>
                </el-radio>
                
            </el-radio-group>
        </div>
        <!-- <div class="blub-color" >
            <el-select v-model="bulbColor" placeholder="Please set Light color" @change = "setBulbColor" size="small" style="width: 210px">
                <el-option
                v-for="item in colorData"
                :key="item.name"
                :label="item.name"
                :value="item.name">
                </el-option>
            </el-select>
        </div> -->
        
    </div> 
</template>
<script>

    import handleResponse from '@/components/restfulapi/handleResponse'
    import {getSolutionAppValueApi, setSolutionAppValueApi} from '@/components/restfulapi/solutionAppApi';
    import { 
        eventSourceConn,
        handleMsg,
        singleEventSourceConn,
        singleHandleMsg,
        singleEventSourceClose,
        eventSourceClose
        } from "../../restfulapi/eventSourceApi"
    import {appControl} from "../../../assets/js/lwm2mMap"
    import {
        getDeviceStatus,
        setDeviceStatus,
        execDeviceStatus,
    } from "../../restfulapi/deviceStatusApi"
    let intToColor = (value)=> {
        let int = parseInt(value);
        switch(int){
            case 0: 
                return defaultColor;
            case 1:
                return "#f0ad4e";
            case 2: 
                return "#5cb85c";
            case 3: 
                return "#d9534f";
            case 4: 
                return "#1382c6";
            default:
                return "";
        }

    };
    let defaultColor = "#aaa"

    export default{
        name: 'singlelightControl',
        data(){
            return {
                //solution app info
                getTarget: "/40007/0/27600",
                setTarget: "/40007/0/27601",
                
                //solution app pkg name
                pkgname: "com.advantech.lightingcontrol",
                funcIds: {
                    getLedStatus: "get_led_status",
                    getLedColor: "get_led_color",
                    setLedColor: "set_led_color",
                },

                //icon off color
                bulbIconColor0: defaultColor,
                bulbIconColor1: defaultColor,
                bulbIconColor2: defaultColor,
                bulbIconColor3: defaultColor,
                bulbIconColor4: defaultColor,
                bulbIconColor5: defaultColor,

                //bulb default color
                bulbColor: 1,
                beforeBulbColor: 1,
                // colorData: [
                //     {name: "yellow", value: 1}, 
                //     {name: "red", value: 2}, 
                //     {name: "blue", value: 3},
                //     {name: "green", value: 4}],
                colorData: {
                    yellow: 1,
                    green: 2,
                    red: 3,
                    blue: 4, 
                },

                changeLoading: false

            }
        },
        props: {
            selectedAgentId: {
                type: String,
                default: ""
            },
            isSingleMode: {
                type: Boolean,
                default: true
            },
            //selectedAgent is offline
            isOffline: {
                type: Boolean,
                default: false
            },
        },

        methods:{
            initData(){
                this.bulbIconColor0 = defaultColor;
                this.bulbIconColor1 = defaultColor
                this.bulbIconColor2 = defaultColor
                this.bulbIconColor3 = defaultColor
                this.bulbIconColor4 = defaultColor
                this.bulbIconColor5 = defaultColor
                this.bulbColor= 1;
                this.beforeBulbColor=1;
            },


            getDeviceVideoStatus(funcid){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }

                let data= {
                    appname: this.pkgname,
                    funcid: funcid,
                    param: ""
                }
                getSolutionAppValueApi(this.selectedAgentId, this.getTarget, data).then((obj) => {
                    handleResponse(obj, (res) => {

                        if(res.status === "CONTENT"){
                            let bulbStatusObj = JSON.parse(res.content.value);
                            if(bulbStatusObj.errcode == 0){
                                 switch(funcid){
                                    case this.funcIds.getLedStatus:
                                        let led0 = bulbStatusObj.data.led0_status;
                                        let led1 = bulbStatusObj.data.led1_status;
                                        let led2 = bulbStatusObj.data.led2_status;
                                        let led3 = bulbStatusObj.data.led3_status;
                                        let led4 = bulbStatusObj.data.led4_status;
                                        let led5 = bulbStatusObj.data.led5_status;
                                        this.bulbColor = bulbStatusObj.data.led_color;
                                        this.beforeBulbColor = this.bulbColor;
                                        this.bulbIconColor0 = led0 == "on"? intToColor(this.bulbColor): defaultColor;
                                        this.bulbIconColor1 = led1 == "on"? intToColor(this.bulbColor): defaultColor
                                        this.bulbIconColor2 = led2 == "on"? intToColor(this.bulbColor): defaultColor
                                        this.bulbIconColor3 = led3 == "on"? intToColor(this.bulbColor): defaultColor
                                        this.bulbIconColor4 = led4 == "on"? intToColor(this.bulbColor): defaultColor
                                        this.bulbIconColor5 = led5 == "on"? intToColor(this.bulbColor): defaultColor
                                        break;
                                    case this.funcIds.getLedColor:
                                        this.bulbColor = bulbStatusObj.data.led_color;
                                        break;
                                    
                                    default:
                                        console.error("funcId not support");
                                }
                            }else{
                                console.error("[getSolutionAppValueApi]"+this.funcIds+"#errcode:"+bulbStatusObj.errcode);
                            }
                           
                        }
                        
                    })
                })
            },


            setSolutionAppValue(data, funcId){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }

                setSolutionAppValueApi(this.selectedAgentId, this.setTarget, data).then((obj) => {
                    this.changeLoading = false;
                    handleResponse(obj, (res) => {  

                        if(res.status === "CHANGED"){
                            switch(funcId){
                                case this.funcIds.setLedColor:
                                    this.$swal("","success","success").then(() => {
                                        this.beforeBulbColor = this.bulbColor;
                                        this.getDeviceVideoStatus(this.funcIds.getLedStatus);                          
                                    })
                                    
                                break;
                                default:
                                    console.error("funcId not support")
                            }
                        }else{
                            _g.handleError(res); 
                            this.bulbColor = this.beforeBulbColor;
                        }
                        
                    })
                })
            },

            refreshStatus(){
                this.getDeviceVideoStatus(this.funcIds.getLedStatus);
            },

            setBulbColor(){
                if(!this.selectedAgentId){
                    this.$swal("", "Please select device","info");
                    return;
                }
                let data = {
                    appname: this.pkgname,
                    funcid: this.funcIds.setLedColor,
                    param: this.bulbColor
                }
                this.changeLoading = true;
                this.setSolutionAppValue(data, this.funcIds.setLedColor);
            },

            sgEventSourceConn(selectedAgentId){
                singleEventSourceConn(selectedAgentId).then((isConnect) => {
                    if(isConnect){
                        singleHandleMsg("AUTOREPORT", (type, data) => {
                            if(data){
                                let msgObj = JSON.parse(data);
                                if(msgObj.ep == selectedAgentId && msgObj.appname == this.pkgname){
                                    this.getDeviceVideoStatus(this.funcIds.getLedStatus);
                                }
                                
                            }
                            
                        }, false);
                    }
                    
                });
                   
            },
            closeEventSourceConn(){
                singleEventSourceClose();
            },


            startSolutionApp(){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }
                this.contentLoading = true;
                setDeviceStatus(this.selectedAgentId, appControl.startApp, this.pkgname).then((obj) => {
                    this.contentLoading = false;
                    handleResponse(obj, (res) => {
                        if(res.status === "CHANGED"){
                            this.$swal("", "Success", "success").then(() => {
                                this.refreshStatus();
                            })
                            
                        }else{
                            this.$emit("isRunSuccess", false)
                            _g.handleError(res);
                        }
                    })
                })
            },

            stopSolutionApp(){
                if(this.selectedAgentId == ""){
                    console.error("selectAgentId is empty");
                    return;
                }
                this.contentLoading = true;
                setDeviceStatus(this.selectedAgentId, appControl.stopApp, this.pkgname).then((obj) => {
                    this.contentLoading = false;
                    handleResponse(obj, (res) => {
                        if(res.status === "CHANGED"){
                            this.$swal("", "Success", "success").then(() => {
                                this.initData();
                            })
                        }else{
                            this.$emit("isRunSuccess", true)
                            _g.handleError(res);
                        }
                        
                    })
                })
            },

        },

        watch: {
            isSingleMode(val){
                if(val){
                    this.initData();
                }
            },
            selectedAgentId(val){
                if(this.isSingleMode) {
                    this.initData();
                    this.getDeviceVideoStatus(this.funcIds.getLedStatus);
                    this.closeEventSourceConn();
                    if(val){
                        this.sgEventSourceConn(val);
                    }
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/colors"; 
    .info-box {
        display: block;
        min-height: 180px;
        background: #fff;
        width: 100%;
        border-radius: 3px;
        margin: 15px 0px 15px 0px;;
        text-align: center;
        i{
            color: $androidDM-color;
        }
        .info-box-icon {
            border-radius: 50%;
            display: block;
            /* float: left; */
            height: 80px;
            width: 80px;
            
            line-height: 40px;
            font-size: 45px;
            /* background: rgba(0, 0, 0, 0.2); */
            margin-top: 15px;
            margin: 0.5rem auto;

            .info-box-icon-title{
                color:#303133;
                font-size:15px;
                margin-bottom: 20px;
            }

        }
    
    }

    .bulb-title{
        margin-left: 15px;
        margin-top: 20px;
        font-size: 21px;
        font-weight: 300;
        color: $androidDM-color;
        i{
            color: $androidDM-color;
            font-weight: 200;
        }
    }
    .blub-color{
        margin-left: 35px;
        padding-top: 15px;
        i{
            font-size: 32px;
        }
        .blub-red{
            color: #d9534f;
        }
         .blub-green{
            color: #5cb85c;
        }
         .blub-blue{
            color: #1382c6;
        }
         .blub-yellow{
            color: #f0ad4e;
        }

    }
    .refresh-btn{
        position: relative;
        top: -80px;
        left: 20px;
    }

    .el-radio__inner{
        border-color:#8896a5 !important;
    }

</style>
