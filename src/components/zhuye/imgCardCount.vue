<template>
  <el-row :gutter="29" style="padding: 0 154px;margin-bottom: 20px">
    <el-col :span="4.8">
      <image-card/>
    </el-col>
    <el-col :span="4.8">
      <image-card/>
    </el-col>
    <el-col :span="4.8">
      <image-card/>
    </el-col>
    <el-col :span="4.8">
      <image-card/>
    </el-col>
    <el-col :span="4.8">
      <image-card/>
    </el-col>
  </el-row>
</template>

<script>
import imageCard from "@/components/zhuye/imageCard";

export default {
  name: "imgCardCount",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    imageCard
  }
}
</script>

<style scoped>

</style>