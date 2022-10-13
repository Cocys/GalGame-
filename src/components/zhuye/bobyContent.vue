<template>
  <el-carousel id="zouMa1" indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <el-image
          style="width: 100%; height: 100%"
          :src="photo1[item - 1]"
          :fit="fits">
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<!--走马灯-->

<script>
import photo1 from '../../assets/pixiv/pixiv4.jpg'
import photo2 from '../../assets/pixiv/pixiv39.jpg'
import photo3 from '../../assets/pixiv/pixiv14.png'
import photo4 from '../../assets/pixiv/pixiv18.jpg'
export default {
  name: "bobyContent",
  data() {
    return {
      fits: 'cover',
      photo1: [photo1,photo2,photo3,photo4]
    }
  }
}
</script>

<style>
#zouMa1{
  margin-left: 100px;
  margin-top: 20px;
  margin-right: 0px;
  width: 800px;
}
/*!* 超小设备 (手机, 600px 以下屏幕设备) *!*/
/*@media only screen and (max-width: 600px) {*/
/*  #zouMa1{*/
/*    width: 1000px;*/
/*  }*/
/*}*/
</style>