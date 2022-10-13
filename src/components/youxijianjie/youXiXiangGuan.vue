<template>
  <div>
    <div class="div1">
      <h2 style="font-size: 23px;margin: 28px 0 0 0">游戏相关</h2>
      <p>CG包</p>
    </div>
    <you-xi-xiang-guan-link/>
  </div>

</template>

<script>
import youXiXiangGuanLink from "@/components/youxijianjie/youXiXiangGuanLink";
export default {
  name: "youXiXiangGuan",
  components:{
    youXiXiangGuanLink
  }
}
</script>

<style scoped>
.div1{
  width: 90%;
  margin: 18px auto 27px auto;
}
p{
  margin: 18px 0;
}
</style>