<template>
    <el-switch
    class="fr p-r-10"
    style="display: block"
    v-model="mode"
    @change="modeChange"
    inactive-color="#f0ad4e"
    active-color="#3c8dbc"
    :active-text="$t('common.single')"
    :inactive-text="$t('common.batch')">
    </el-switch>
</template>
<script>
import {setSession, getSession, checkSession} from "../assets/js/storage"
export default {
    name: 'modeSwitch',
    data(){
        return {
            mode: true
        }
    },
    methods: {
        modeChange(val){
            setSession("mode", val);
            this.$emit("mode-status", val);
        },

        initData(){
            if(checkSession("mode")){
                let mode = getSession("mode");
                this.mode = mode == "true" ? true: false;
            }
            this.modeChange(this.mode);
        }
        
    },

    created(){
        this.initData();
    }
}
</script>