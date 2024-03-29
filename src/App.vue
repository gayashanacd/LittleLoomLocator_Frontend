<template>
  <div id="app">
    <div v-if="auth">
      <main-layout></main-layout>
    </div>
    <div v-else>
      <login-layout></login-layout>
    </div>
  </div>
</template>

<script>

import MainLayout from '@/components/common/MainLayout.vue'
import LoginLayout from '@/components/user/UserLogin.vue'

export default{
  name : "app",
  data() {           
    return {
      auth : false
    };
  },
  components:{
    MainLayout,
    LoginLayout
  },
  computed:{
  },
  mounted() {   
    this.auth = JSON.parse(localStorage.getItem('isAuth')); 
  }
}
</script>

<style>
</style>
