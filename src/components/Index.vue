<template>
    <div id="index">
        <el-container class="full-content" direction="vertical">
            <my-header/>
            <el-container>
                <my-aside/>
                <el-main>
                    <div class="content">
                        <router-view/>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import myHeader from "./common/Header";
import myAside from "./common/Aside";
export default {
  name: "index",
  components: {
    MyHeader: myHeader,
    MyAside: myAside
  }
};
</script>
<style scoped >
.el-main{
    padding: 0;
}
 .content{
     background-color:#fff;
     width: 100%;
     height: 100%;
 }
</style>