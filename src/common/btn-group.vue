<template>
    <div class="m-b-20">
        <el-button v-loading="deleteLoading" size="small" @click="deleteEvent()" v-if=isDelete type="primary">{{$t('global.delete')}}</el-button>
        <el-button v-loading="moveLoading" size="small" @click="moveEvent()" v-if=isMove type="primary">{{$t('global.move')}}</el-button>
    </div>
</template>

<script>
    import handleResponse from "../components/restfulapi/handleResponse"

    export default{
        name: 'btnGroup',
        props: {
            selectedData:{
                type: [Array, null],
                default:function(){
                    return [];
                }
            },
            delApi: {
                type: Function,
                default: function(){
                    console.log("default delete")
                }
            },
            isDelete: {
                default: false,
                type: Boolean,
            },
            isMove: {
                default: false,
                type: Boolean,
            },
            tid: {
                default: "",
                type: String,
            },

            filterFun:{
                type:  Function,
                default: function(val){
                    return true;
                }
            }
        },
        data(){
            return {
                moveLoading: false,
                deleteLoading: false
            }
        },
        methods:{
            getSelectedIds(isFilter) {
                let tidArray = [];
                this.selectedData.forEach((res) => {
                    if(!isFilter || this.filterFun(res)){
                        tidArray.push(res[this.tid])
                    }
                })
                return tidArray
            },
            deleteEvent(){
                if(this.selectedData.length == 0){
                    this.$swal("",this.$t('global.selectDevice'),"info", {button: this.$t('global.confirm')})
                    return;
                }
                let tidArray = this.getSelectedIds(true);
                _g.swalInfoDo(this.$t('global.areYouSure'), this.$t('global.delete'), this.$t('global.confirm'), this.$t('global.cancel')).then((result) => {
                    if(result){
                        this.deleteLoading = true
                        this.delApi(tidArray).then((data) => {
                            handleResponse(data, (res)=>{
                                this.deleteLoading = false;
                                if(res.status === "CHANGED"){
                                    this.$swal("", this.$t('global.success'), "success", {button: this.$t('global.confirm')}).then(() => {
                                        this.$emit("result", true);
                                    })
                                }else{
                                    _g.handleError(res);
                                }
                            })
                            
                        })
                    }
                })
            },

             moveEvent(){
                if(this.selectedData.length == 0){
                    this.$swal("",this.$t('global.selectDevice'),"info", {button: this.$t('global.confirm')})
                    return;
                }
                let tidArray = this.getSelectedIds(false);
                this.$emit("showMoveGroupDialog", tidArray);
            },
        }
    }
</script>
