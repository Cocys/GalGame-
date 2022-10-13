<template>
  <el-main>
    <lunbo-zouma/>
    <el-divider id="divder1">
      {{msg}}
    </el-divider>
    <h3>最新稿件</h3>
    <card-count/>
    <card-count/>
    <div style="width: 100%;display: flex;justify-content: center;margin-bottom: 10px">
      <el-button style="width: 1136px" type="info" plain>加载更多</el-button>
    </div>
    <h3>ACG图集</h3>
    <img-card-count/>
    <img-card-count/>
    <div style="width: 100%;display: flex;justify-content: center;margin-bottom: 10px">
      <el-button style="width: 1136px" type="info" plain>加载更多</el-button>
    </div>
  </el-main>
</template>

<script>
import axios from 'axios'
import lunboZouma from "@/components/zhuye/lunboZouma"
import cardCount from "@/components/zhuye/cardCount"
import imgCardCount from "@/components/zhuye/imgCardCount"

export default {
  name: "zhuYeContent",
  data() {
    return {
      msg:null
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    lunboZouma,
    // eslint-disable-next-line vue/no-unused-components
    cardCount,
    // eslint-disable-next-line vue/no-unused-components
    imgCardCount
  },
  //https://api.uixsj.cn/hitokoto/get?type=fart&code=json
  //https://v1.jinrishici.com/all.json
  mounted() {
    axios.get("https://v1.jinrishici.com/all.json").then(
        response => {
          // console.log('请求成功',response);
          // console.log('请求成功',response.data.content);
          this.msg = response.data.content
        },
        error => {
          console.log('请求失败',error.message);
        }
    )
  }
}
</script>

<style scoped>
  #divder1{
    margin-bottom: 10px;
    background-color: #7c1313;
  }
  .el-divider__text{
    background-color: #fff9f9;
  }
  .el-main{
    background-color: #fff9f9;
  }
</style>