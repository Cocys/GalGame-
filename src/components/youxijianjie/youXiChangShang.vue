<template>
  <div class="div1">
    <h2 style="font-size: 23px;margin-bottom: 8px">游戏信息</h2>
    <dl>
      <dt>
          <span class="fontweight">
            <i class="el-icon-s-unfold"></i>
            Summer Pockets Reflection Blue信息：
          </span>
      </dt>
      <dt>
          <span class="fontweight">
            <i style="visibility: hidden" class="el-icon-s-unfold"></i>
            游戏原名：Summer Pockets Reflection Blue
          </span>
      </dt>
      <dt>
          <span class="fontweight">
            <i style="visibility: hidden" class="el-icon-s-unfold"></i>
            发售日期：2020-06-26
          </span>
      </dt>
      <dt>
          <span class="fontweight">
            <i style="visibility: hidden" class="el-icon-s-unfold"></i>
            游戏厂商：Key
          </span>
      </dt>
      <dt>
          <span class="fontweight">
            <i style="visibility: hidden" class="el-icon-s-unfold"></i>
            汉化组织：枫笛汉化组
          </span>
      </dt>
    </dl>
  </div>
</template>

<script>
import youXiChangShang from "@/components/youxijianjie/youXiChangShang";
export default {
  name: "youXiBody",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    youXiChangShang
  }
}
</script>

<style scoped>
.div1{
  width: 90%;
  margin: 18px auto 0px auto;
}
.fontweight{
  font-weight: bold;
}
i{
  color: #b9b9b9;
  margin-top: 10px;
}
</style>