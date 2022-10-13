<template>
  <el-main>
    <youxiheader/>
    <el-divider content-position="center">{{msg}}</el-divider>
    <you-xi-chang-shang/>
    <you-xi-jie-mian/>
    <you-xi-jian-jie/>
    <you-xi-jie-tu/>
    <you-xi-ce-ping/>
    <you-xi-tips/>
    <ti-shi-kuang/>
    <you-xi-xiang-guan/>
  </el-main>
</template>

<script>
import axios from "axios";
import youxiheader from "@/components/youxijianjie/header";
import youXiChangShang from "@/components/youxijianjie/youXiChangShang";
import youXiJieMian from "@/components/youxijianjie/youXiJieMian";
import youXiJianJie from "@/components/youxijianjie/youXiJianJie";
import youXiJieTu from "@/components/youxijianjie/youXiJieTu";
import youXiCePing from "@/components/youxijianjie/youXiCePing";
import youXiTips from "@/components/youxijianjie/youXiTips";
import tiShiKuang from "@/components/youxijianjie/tiShiKuang";
import youXiXiangGuan from "@/components/youxijianjie/youXiXiangGuan";
export default {
  name: "xiangQingCotent",
  components:{
    youxiheader,
    youXiChangShang,
    youXiJieMian,
    youXiJianJie,
    youXiJieTu,
    youXiCePing,
    youXiTips,
    tiShiKuang,
    youXiXiangGuan
  },
  mounted() {
    axios.get("https://api.uixsj.cn/hitokoto/get?type=social&code=json").then(
        response => {
          this.msg = response.data.content
        },
        error => {
          console.log('请求失败',error.message);
        }
    )
  },
  data(){
    return{
      msg:''
    }
  }
}
</script>

<style scoped>
  .el-main{
    background-color: white;
    width: 58.1%;
    margin: 20px auto;
    border: 1px solid #7c1313;
    /*border: 1px solid #7c1313;*/
    border-radius: 5px;
  }
</style>