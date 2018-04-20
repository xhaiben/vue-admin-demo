<template>
  <el-aside class="aside" width="250px">
    <el-menu default-active="">
      <el-menu-item index="">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: "my-aside"
};
</script>
<style scoped >
.aside{
  border-right: solid 1px #e6e6e6;
}
.el-menu{
  border-right: none;
}
</style>