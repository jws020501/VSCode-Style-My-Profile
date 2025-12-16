<template>
    <div class="main">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'MainPage',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.main {
  padding: 20px;
}
</style>