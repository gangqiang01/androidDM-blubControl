<template>
    <div  v-show="!isSingleMode" class="bulbStatusContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane name="lightControl">
                <span slot="label">
                    <i class="fa fa-sliders m-r-5" aria-hidden="true"></i>
                    Light Control
                </span>
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
                                    <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" 
                                    :fill="bulbIconColor0" p-id="1343">
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
                                    <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" 
                                    :fill="bulbIconColor1" p-id="1343">
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
                                    <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" 
                                    :fill="bulbIconColor2" p-id="1343">
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
                                    <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" 
                                    :fill="bulbIconColor3" p-id="1343">
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
                                    <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" 
                                    :fill="bulbIconColor4" p-id="1343">
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
                                    <path d="M618.666667 896H405.333333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h213.333334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z m42.666666-85.333333H362.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h298.666666c12.8 0 21.333333-8.533333 21.333334-21.333333s-8.533333-21.333333-21.333334-21.333333zM512 0C311.466667 0 149.333333 157.866667 149.333333 349.866667c0 102.4 46.933333 198.4 125.866667 264.533333 17.066667 12.8 25.6 34.133333 25.6 55.466667v29.866666c0 38.4 32 70.4 68.266667 70.4h283.733333c38.4 0 68.266667-32 68.266667-70.4v-29.866666c0-21.333333 8.533333-40.533333 25.6-55.466667 78.933333-66.133333 125.866667-162.133333 125.866666-264.533333C874.666667 157.866667 712.533333 0 512 0z m232.533333 392.533333c-10.666667 0-19.2-8.533333-19.2-19.2-2.133333-55.466667-25.6-113.066667-64-155.733333-25.6-27.733333-70.4-61.866667-134.4-61.866667-10.666667 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333c61.866667 0 119.466667 25.6 164.266667 74.666666 44.8 49.066667 72.533333 117.333333 74.666667 183.466667 2.133333 10.666667-8.533333 21.333333-21.333334 21.333333zM576 981.333333h-128c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h128c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z" 
                                    :fill="bulbIconColor5" p-id="1343">
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
                <div class="blub-color m-b-20">
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
            </el-tab-pane>
            <el-tab-pane name="operationStatusHistory">
                <span slot="label">
                    <i class="fa fa-history m-r-5" aria-hidden="true"></i>
                    Light Color History
                </span>
                <operation-history
                :statusType="pkgname"
                ref="operationHistory"
                @getStatusCount="getBatchControlStatusCount"
                @isFinished="isControlFinished"
                :groupname="groupname"
                >
                </operation-history>
            </el-tab-pane>
        </el-tabs>
        <el-dialog :visible.sync="dialogTasknameVisible" @close="initBulbInfo()">
            <div slot="title" class="dialog-title">
                <i class="fa fa-hand-pointer-o m-r-10" ></i>
                Batch Control
            </div>
            <el-form :model="toperationForm" :rules="rules" ref="toperationForm">
                <el-form-item label="Task name:" label-width="210px" prop="taskname">
                    <el-input v-model.trim="toperationForm.taskname" autocomplete="off" class="w-300" placeholder="Please input task name"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTasknameVisible = false">Cancel</el-button>
                <el-button type="primary" @click="batchControl()">Confirm</el-button>
            </div>
        </el-dialog>
        <div class="blubStatusCount" v-show="isShowOverview">
            <span>Taskname: {{local_taskname}}</span>
            <span>Total: {{total}}</span>
            <span>Running:  {{running}}</span>
            <span>Success: {{success}}</span>
            <span>Failed: {{failed}}</span>
        </div>

    </div> 
</template>

<style lang="scss">
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
    .bulbStatusContent{
        position: relative;
        .blubStatusCount{
            position: absolute;
            top: 10px;
            right: 6px;
            span{
                font-weight: 500;
                font-size: 11px;
                &:nth-child(1){
                    color: $primary-color;
                }
                &:nth-child(2){
                    border-left: 2px solid #ddd;
                    padding-left: 3px;
                    color: $info-color;
                }
                &:nth-child(3){
                    color: $warn-color;
                }
                &:nth-child(4){
                    color: $success-color;
                }
                &:nth-child(5){
                    color: $darkgray-color;
                }
            }

        }
    }
    .el-radio__inner{
        border-color:#8896a5 !important;
    }

</style>


<script>
    import handleResponse from '@/components/restfulapi/handleResponse'
    import {
        getSolutionAppValueApi,
        setSolutionAppValueApi,
        reSetSolutionAppValue,
        batchSetSolutionAppValue
    } from "@/components/restfulapi/solutionAppApi";
    import {getSolutionAppStatusOverviewApi} from "@/components/restfulapi/solutionAppStatusApi"
    import operationHistory from "./operationHistory";
    import {setLocal, getLocal, getSession, checkSession, setSession} from "../../../assets/js/storage"
    let defaultColor = "#aaa";
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
    export default{
        name: 'batchlightControl',
        data(){
           let validateTaskname = (rule,value,callback)=>{
                let reg=new RegExp(/^(?![._-])[a-zA-Z0-9\.\-_]{3,12}$/);
                if(!reg.test(value)){
                    return callback(new Error ('Must begin with letter/number,contain line/underline/dot/letter/number length 3~12'))
                }else{callback()};
            };
            

            return {
                dialogTasknameVisible: false,
                activeName: "lightControl",
                //solution app info
                getTarget: "/40007/0/27600",
                setTarget: "/40007/0/27601",
                
                //solution app pkg name
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
                toperationForm:{
                    taskname: '',
                },
                rules:{
                    taskname: {required: true, validator: validateTaskname, trigger: 'blur'}
                },

                funcId: "",
                // colorData: [{name: "yellow"}, {name: "red"}, {name: "blue"}, {name: "green"}],
                colorData: {
                    yellow: 1,
                    green: 2,
                    red: 3,
                    blue: 4, 
                },

                isShowOverview: false,
                local_taskname: '',
                success: 0,
                running: 0,
                failed: 0,
                listLoading: false,
            }
        },

        props:{
            selectedAgentsData: {
                type: Array,
                default: []
            },
            groupname: {
                type: String,
                default: ""
            }, 
            isSingleMode: {
                type: Boolean,
                default: true
            }
        },

        components: {
            operationHistory
        },

        methods:{

            getDeviceVideoStatus(funcid){
                if(this.selectedAgentsData.length === 0){
                    console.error("", "All devices are offline","info");
                    return;
                }

                let data= {
                    appname: this.pkgname,
                    funcid: funcid,
                    param: ""
                }
                getSolutionAppValueApi(this.selectedAgentsData[0].value, this.getTarget, data).then((obj) => {
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
            
            //batch operation
            batchSetSolutionAppValue(funcId, value){

                this.$refs.toperationForm.validate((valid) => {
                    if(valid) {
                        let taskname = this.toperationForm.taskname;

                        let  data = {
                            taskname: taskname,
                            pkgname: this.pkgname,
                            funcId: funcId,
                            value: value,
                            groupname: this.groupname
                        }

                        this.dialogTasknameVisible = false;
                        this.fullLoading = true;
                        batchSetSolutionAppValue(this.setTarget, data).then((data) => {
                            this.fullLoading = false;
                            handleResponse(data, (res) => {
                                if(res.status == "CHANGED"){
                                    setLocal("local_bulb_tname", taskname);
                                    this.activeName = "operationStatusHistory";
                                    this.$refs.operationHistory.intervalGetSolutionAppStatusHistory();
                                }else{
                                    _g.handleError(res);
                                }
                            })
                            
                        })            
                    }
                })
                          
            },


            initBulbInfo(){
                this.toperationForm.taskname = "";
                this.funcId = "",
                this.bulbColor = this.beforeBulbColor;
            },

            refreshStatus(){
                this.getDeviceVideoStatus(this.funcIds.getLedStatus);
            },

            getBatchControlStatusCount(){
                let local_taskname = getLocal("local_bulb_tname");
                if(!local_taskname){
                    console.error("getBatchControlStatusCount:localStorage(local_bulb_tname) is null")
                    this.isShowOverview = false;
                    return;
                }
                getSolutionAppStatusOverviewApi(local_taskname, this.pkgname).then((data) => {
                    handleResponse((data), (res) => {
                        if(res){
                            this.local_taskname = local_taskname;
                            this.running = res.running;
                            this.failed = res.fail;
                            this.success = res.success;
                            if(this.total > 0 &&  this.activeName === "operationStatusHistory"){
                                this.isShowOverview = true;
                            }else{
                                this.isShowOverview = false;
                            }
                        }
                    })
                })
            },
            
            initData(){
                this.toperationForm.taskname = "";
                this.bulbIconColor0 = defaultColor;
                this.bulbIconColor1 = defaultColor;
                this.bulbIconColor2 = defaultColor;
                this.bulbIconColor3 = defaultColor;
                this.bulbIconColor4 = defaultColor;
                this.bulbIconColor5 = defaultColor;
                this.bulbColor= 1;
                this.beforeBulbColor = 1;
                this.funcId = "";
            },

            handleClick(tab){
                if(tab.name === "operationStatusHistory"){
                    this.getBatchControlStatusCount();
                }else{
                    this.isShowOverview = false;
                }
            },

            setBulbColor(){
                if(this.selectedAgentsData.length === 0){
                    this.$swal("", "All devices are offline","info");
                    return;
                }
                this.funcId = this.funcIds.setLedColor;
                this.dialogTasknameVisible = true;
            },
            
            batchControl(){
                if(this.selectedAgentsData.length === 0){
                    this.$swal("", "All devices are offline","info");
                    return;
                }
                // if(!this.funcId){
                //     this.$swal("", "Please refresh page", 'info');
                //     return;
                // }
                this.batchSetSolutionAppValue(this.funcId, this.bulbColor)
            },

            isControlFinished(){
                this.initData();
                this.getDeviceVideoStatus(this.funcIds.getLedStatus);
            }
            
        },
       

       
        watch: {
            isSingleMode(val){
                if(!val){
                    this.initData();
                }
            },
            groupname(val){
                if(!this.isSingleMode&& val){
                    this.initData();
                    this.getDeviceVideoStatus(this.funcIds.getLedStatus);
                }
            }
        },

        computed: {
            total(){
                return  this.success+ this.running+ this.failed;
            },

        }

    }
</script>

