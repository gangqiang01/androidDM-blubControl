<template>
    <div>
        <el-table
            :data="SolutionAppStatusHistoryTableList"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="selectItem"
            @filter-change="filterStatus"
            :default-sort = "{prop: 'ts', order: 'descending'}"
            ref="SolutionAppStatusHistoryTable"
             v-loading="listLoading" 
            >
            <el-table-column
            type="selection"
            min-width="50"
            :selectable="checkSelectable">
            </el-table-column>

            <el-table-column
            prop="devname"
            label="Device Name"
            min-width="120"
            >
            </el-table-column>

            <el-table-column
            prop="taskname"
            label="Task Name"
            min-width="120"
            >
            </el-table-column>
            <el-table-column
            prop="value"
            label="Set Value"
            min-width="120"
            >
                <template slot-scope="scope">
                    {{scope.row.value|bulbColorValue}}
                </template>
            </el-table-column>
            <el-table-column
            prop="funcId"
            label="Application"
            min-width="120"
            >
                <template slot-scope="scope">
                    {{scope.row.funcId|solutionAppStatusFunction}}
                </template>
            </el-table-column>
            
            <el-table-column
            label="Time"
            min-width="130"
            prop="ts"
                >
                <template slot-scope="scope">
                    {{scope.row.ts|time}}
                </template>
            </el-table-column>

            <el-table-column
            column-key="status"
            prop="status"
            label="Status"
            min-width="130"
            :filters="[{ text: $t('global.success'), value: 2 }, { text: $t('global.failed'), value: 1 }, {text: $t('global.running'), value: 0}]"
            filter-placement="bottom-end"
            >
                <template slot-scope="scope">
                    <img src="@/assets/imgs/loading1.gif" alt="" style="width:50px;height:10px;"v-if="scope.row.status==0">
                    <span v-if="scope.row.status==2" class="badge bg-green">{{$t('global.success')}}</span>
                    <span v-if="scope.row.status==1" class="badge bg-DimGray">{{$t('global.failed')}}</span>
                    <!-- {{scope.row.upstatus|SolutionAppStatus}} -->
                </template>
            </el-table-column>

            <el-table-column
            label="Error Status"
            min-width="100"
            >
                <template slot-scope="scope">
                    {{(""+scope.row.errorcode)|appErrorStatus}}
                </template>
            </el-table-column>

            <el-table-column
            label="Action"
            min-width="175"
            align="center">
                <template slot-scope="scope">
                    <div>
                        <el-button-group>
                            <el-button 
                                size="mini" 
                                type="danger"
                                @click="deleteHistory(scope.row.sasid)"
                                :disabled="scope.row.status==0"
                                >
                                    Delete
                            </el-button>
                            <el-button 
                                size="mini" 
                                type="primary"
                                @click="reSolutionApp(scope.row)"
                                :disabled="scope.row.status!=1"
                                >
                                    Repeat
                            </el-button>
                        </el-button-group>
                    </div>
                </template>
            </el-table-column>

        </el-table>

        <btn-group 
        :selectedData="multipleSelection" 
        :isDelete="true" 
        :isMove="false" 
        tid="sasid" 
        :delApi="batchDeleteSolutionAppStatusHistory" 
        @result="isSuccess" 
        v-show="isShowBtnGroup"
        class="fl m-t-10 cf">
        </btn-group>

        <el-button 
        v-loading="clearLoading" 
        size="small" 
        @click="clearAll()" 
        type="primary" 
        class="fl m-t-10 cf m-l-10"
            v-show="isShowBtnGroup">
        Clear All
        </el-button>

        <div class="m-t-10 cf fr">
            <el-pagination
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="limit"
            :current-page="currentPage"
            :total="dataCount"
            v-show="isshow"
            background
            >
            </el-pagination>
            
        </div> 
        
       
    </div>
</template>
<script>
    import {reSetSolutionAppValue} from '@/components/restfulapi/solutionAppApi';
    import{    
        getSolutionAppStatusApi,
        deleteSolutionAppStatusHistoryApi,
        batchDeleteSolutionAppStatusHistoryApi,
        getSolutionAppStatusOverviewApi,
        deleteSolutionAppStatusHistoryAllApi,
        getSolutionAppStatusByTypeApi,
        getSolutionAppStatusByTypeAndDevIdApi, 
        getSolutionAppStatusByTypeAndGroupApi,
        deleteSolutionAppStatusHistoryAllByTypeApi,
        getSolutionAppStatusByPageAndStatusInGroupApi,
        getSolutionAppStatusByPageInGroupApi,
        deleteSolutionAppStatusHistoryAllByDevIDAndTypeApi,
        deleteSolutionAppStatusHistoryAllByGroupAndTypeApi
        } from "@/components/restfulapi/solutionAppStatusApi"
    import {setLocal, getLocal, getSession, checkSession, setSession} from "../../../assets/js/storage"
    import handleResponse from '@/components/restfulapi/handleResponse'
    import btnGroup from "../../../common/btn-group";

export default {
    
    data() {
        return {

            SolutionAppStatusHistoryTableList: [],
            isshow: false,
            limit: 10,
            dataCount: 0,
            currentPage: 1,
            multipleSelection: [],
            isShowBtnGroup: false,
            clearLoading: false,
            batchDeleteSolutionAppStatusHistory: batchDeleteSolutionAppStatusHistoryApi,
            intervalTime: 3000,
            setTarget: "/40007/0/27601",

            listLoading: false,
            isInterval: false,
            //filter status
            statusArray: [],
            pkgname: "com.advantech.lightingcontrol",
        }
    },

    components: {
        btnGroup,
    },

    props: {
        selectedAgentId: {
            default: "",
            type: String
        },

        groupname: {
            default: "",
            type: String
        }
    },
    methods: {
        selectItem(val) {
            this.multipleSelection = val;
        },

        checkSelectable(row) {
            return !row.status==0;
        },

        handleCurrentChange(currentPage){
            if(currentPage){
                this.currentPage = currentPage;
            }else{
                this.currentPage = 1
            }
            this.intervalGetSolutionAppStatusHistory();
            
        },

        deleteHistory(sasid){
            _g.swalInfoDo("Delete").then((result) => {
                if(result){
                    this.listLoading = true;
                    deleteSolutionAppStatusHistoryApi(sasid).then((data) => {
                        this.listLoading = false;
                        handleResponse(data, (res) => {
                            if(res.status === "CHANGED"){
                                this.$swal("", "Success", "success").then(() => {
                                        this.intervalGetSolutionAppStatusHistory();
                                })
                            }else{
                                _g.handleError(res);
                            }
                        })
                    })
                }
            }) 
        },

        getSolutionAppStatusHistoryByGroupname(){
            if(!this.groupname){
                console.error("[getSolutionAppStatusHistoryByGroupname]groupname is empty")
            }
            if(this.isInterval === false){
                this.listLoading = true;
            }
            if(this.statusArray.length > 0){
                getSolutionAppStatusByPageAndStatusInGroupApi(this.groupname, this.pkgname, this.currentPage, this.limit, this.statusArray).then((data) => {
                    this.listLoading = false;
                    handleResponse(data, (res) => {
                        this.assignSolutionAppStatusData(res); 
                    })
                })
             }else{
                getSolutionAppStatusByPageInGroupApi(this.groupname, this.pkgname, this.currentPage, this.limit).then((data) => {
                    this.listLoading = false;
                    handleResponse(data, (res) => {
                        this.assignSolutionAppStatusData(res);
                    })
                })
            }
        },

        assignSolutionAppStatusData(res){
            if(Object.prototype.toString.call(res) === "[object Object]" && Object.prototype.toString.call(res.data) === '[object Array]'){
                this.dataCount = res.count;
                this.SolutionAppStatusHistoryTableList = res.data;
                this.isshow = this.dataCount > this.limit;
                this.isShowBtnGroup = this.dataCount > 0;
                this.$emit("getStatusCount")
                let isFinish = true;
                res.data.forEach((val) => {
                    if(val.status == 0){
                        isFinish = false;
                    }
                })
                if(isFinish){
                    this.$emit("isFinished");
                    window.clearInterval(_g.timer);
                    _g.timer = null;
                }
            }else{
                window.clearInterval(_g.timer);
                _g.timer = null;
            }
            
        },

        intervalGetSolutionAppStatusHistory(){
            this.getSolutionAppStatusHistoryByGroupname();
            if(_g.timer === null){
                _g.timer = window.setInterval(() => {
                    this.getSolutionAppStatusHistoryByGroupname();
                    this.isInterval = true;
                },this.intervalTime)
            }  
        },


        filterStatus(value){
            this.statusArray = value.status;
            this.currentPage = 1;
            if(_g.isArray(this.statusArray)){
                this.intervalGetSolutionAppStatusHistory();
            }
            
        },

        reSetSolutionAppValue(powerData){
            this.dialogTasknameVisible = false;
            reSetSolutionAppValue(this.setTarget, powerData).then((data) => {
                handleResponse(data, (res) => {
                    if(res.status == "CHANGED"){
                        this.activeName = "operationStatusHistory";
                        this.intervalGetSolutionAppStatusHistory();
                    }else{
                        _g.handleError(res);
                    }
                })
                
            })            
                
                        
        },

        reSolutionApp(solutionAppItem){
            _g.swalInfoDo("Repeat").then((result) => {
                if(result){
                    let  powData = {
                        taskname: solutionAppItem.taskname,
                        pkgname: this.pkgname,
                        funcId: solutionAppItem.funcId,
                        value: solutionAppItem.value,
                        endpoint: solutionAppItem.deviceId
                    }
                    this.reSetSolutionAppValue(powData);    
                }
            })
        },

        //delete appstatus $emit
        isSuccess(result){
            if(result){
                this.intervalGetSolutionAppStatusHistory();
            }
        },

         //clear All history
        clearAll(){
            _g.swalInfoDo("Clear All").then((result) => {
                if(result){
                    this.clearLoading = true;
                    deleteSolutionAppStatusHistoryAllByGroupAndTypeApi(this.groupname, this.pkgname).then((data) => {
                        this.clearLoading = false;
                        handleResponse((data), (res) => {
                            if(res.status === "CHANGED"){
                                this.$swal("", "Success", "success").then(() => {
                                    this.intervalGetSolutionAppStatusHistory();
                                })
                            }else{
                                _g.handleError(res);
                            }
                        })
                    })
                }
            })
        },

        initData(){
            this.SolutionAppStatusHistoryTableList = [];
            this.isShowBtnGroup= false;
            this.isshow= false;
        },


    },

    created(){
        this.$emit("getStatusCount")
    },
    
    beforeDestroy() {
         window.clearInterval(_g.timer);
        _g.timer = null;
    },

    watch: {
        groupname(val){
            if(val){
                this.initData();
                this.intervalGetSolutionAppStatusHistory();
                
            }  
　　　　　},
    
    },
        
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/colors.scss";
    .badge{
        display: inline-block;
        min-width: 10px;
        padding: 5px 8px;
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        // background-color: #777;
        border-radius: 10px;
    }
    .el-loading-mask{
        top: 60px;
    }

    
</style>
