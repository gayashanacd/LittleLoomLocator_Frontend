<template>
    <div>
      <!-- ======= Sidebar ======= -->
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-item">
            <router-link class="nav-link collapsed" to="/request">
              <i class="bi bi-journal-text"></i>
              <span>Request</span>
            </router-link>
          </li><!-- End Request Nav -->

          <li class="nav-item" v-if="isParent">
            <router-link class="nav-link collapsed" to="/children">
              <i class="bi bi-person"></i>
              <span>Children</span>
            </router-link>
          </li><!-- End Children Nav -->

        </ul>
      </aside><!-- End Sidebar-->    
    </div>
  </template>
  
  <script>
  
  export default {
    name: "SideBar",
    data() {           
      return {

      };
    },
    computed: {
      isParent(){
        let user = this.$util.getUser();
        if(user && user.type === "PARENT"){
          return true;    
        }
        else{
          return false;
        }
      }
    },
    components: {

    },
    methods: {

    },
    mounted() {   

    }
  };
  </script>
  
  <style>
  
  </style>
  