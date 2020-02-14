<template>
    <div class="card-box">
        <div class="card" :style="{width: width, minHeight: height}" v-for="(item, index) in data"  v-if="isAllShow|| typeArray.indexOf(item[typeKey])> -1">


            <div :style="{background: headerBg}">
                <slot name="card-header" :item= "item" ></slot>
            </div>

            <div  class="card-body" :class="{'m-t-10': isCommon}">
                <slot name="card-body-img" :item= "item"></slot>
                <el-tooltip :content="item[bodyDesc]" placement="top">
                    <p v-if="isCommon" class="sup-intro">{{item[bodyDesc]}}</p>
                </el-tooltip>
                
                <p v-if="!isCommon" class="sup-intro" v-for="(it, key) in subIntro">{{item[it]}}</p>
            </div>
            
        </div>
        <div class="card" v-if="isShowAdd" :style="{width: width, height: height}">
            <div class="card-header cf" :style="{background: headerBg}">
                <i class="fa fa-ellipsis-v p-t-10 fr" style="opacity: 0.4"></i>   
            </div>
            <div class="card-add-body">
                <i class="fa fa-plus fa-4x " aria-hidden="true" @click="addClick"></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "../assets/css/colors";

    $box-width:170px;
    $box-height: 200px;
    

    .card-box{
        .card {
            .card-header{
                span{
                    display: inline-block;
                    color: #222d32;
                }
                i{
                    color: $primary-color;
                }
                flex-basis: 38px;
                flex-grow: 0;
                padding: 10px 15px;
                border-bottom: 1px solid #ebeef5;
                box-sizing: border-box;
                height: 47px;
                box-sizing: border-box;
            }
            .card-body{
                position: relative;
                flex: 1;
                z-index: 0; /* back on .desc */
                color: lighten($gray-color, 15%);
                opacity: 0.8;
                text-align: center;
                padding: 10px;
                img{
                    width: 67px;
                }

                i{
                    color: $dark-color;
                }
                p{
                    color: $dark-color;
                    margin-top: 10px;
                    word-break:break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -o-text-overflow: ellipsis;
                    -webkit-text-overflow: ellipsis;
                    -moz-text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .card-add-body{
                position: relative;
                flex: 1;
                z-index: 0; /* back on .desc */
                text-align: center;
                margin-top: 30px;
                cursor: pointer;
                i{
                    color: $primary-color;
                }
            }
            // width: $box-width;
            // height: $box-height;
            display: flex;
            flex-direction: column;
            border: 1px solid $gray-color;
            margin: 10px;
            position: relative;
            z-index: 0;
            border-radius: 5px;
            -moz-box-shadow: 0 3px 12px 0 rgba(0,0,0,.1);
            -webkit-box-shadow: 0 3px 12px 0 rgba(0,0,0,.1);
            box-shadow: 0 3px 12px 0 rgba(0,0,0,.1);
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 15px;
    }
</style>
<script>
export default {
    data() {
        return {
            
        }
    },

    props: {
        //all data
        data: {
            default: [],
            type: Array
        },

        subIntro: {
            default: function(){
                return ["filename", "versionname"]
            },
            type: Array
        },
        
        isCommon: {
            default: false,
            type: Boolean
        },

        bodyDesc: {
            default: "description",
            type: String
        }, 

        isShowAdd: {
            default: false,
            type: Boolean
        },
        // if show all item
        isAllShow: {
            default: true,
            type: Boolean
        },
        //if condition show item
        typeArray: {
            default: ()=>[],
            type: Array
        },
        //if condition key show item
        typeKey: {
            default: "",
            type: String
        },

        width: {
            default: "170px",
            type: String
        },
        height: {
            default: "200px",
            type: String
        },
        headerBg:{
            default: "#ffffff",
            type: String
        } 
    },

    methods: {
        addClick(){
            this.$emit("addCard")
        },
        getSrc(appData){
            return appData.address+"/icon.png";
        },
    },

}
</script>

