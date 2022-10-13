<template>
  <div class="div1">
    <h2 style="font-size: 23px;margin: 28px 0 0 0">游戏截图</h2>
    <el-image
        style="width: 100%;height: 100%;margin-top: 20px"
        :src="photos[0]"
        :fit="fit"
        preview-src-list>
    </el-image>
    <el-image
        style="width: 100%;height: 100%;margin-top: 20px"
        :src="photos[1]"
        :fit="fit">
    </el-image>
  </div>
</template>

<script>
import photo1 from '@/assets/pixiv/gal2.jpg'
import photo2 from '@/assets/pixiv/gal3.jpg'
export default {
  name: "youXiJianJie",
  data(){
    return{
      photos:[photo1,photo2],
      fit:"cover"
    }
  }
}
</script>

<style scoped>
.div1{
  width: 90%;
  margin: 18px auto 27px auto;
}
</style>