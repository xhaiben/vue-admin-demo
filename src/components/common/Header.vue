<template>
  <el-header height="65px" class="header">
    <div class="title">Admin</div>
    <div class="menu">菜单</div>
  </el-header>
</template>
<script>
export default {
  name: "my-header"
};
</script>
<style scoped >
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title {
}
</style>