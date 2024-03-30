<template>
    <div>
        <main>
            <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="message">
                  {{ message }}
                </div>
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                    <div class="d-flex justify-content-center py-4">
                        <a href="index.html" class="logo d-flex align-items-center w-auto">
                        <img alt="Logo" src="@/assets/logo.png">
                        <!-- <span class="d-none d-lg-block">LittleLoom Locator</span> -->
                        </a>
                    </div><!-- End Logo -->

                    <div class="card mb-3">

                        <div class="card-body">

                        <div class="pt-4 pb-2">
                            <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                            <p class="text-center small">Enter your username & password to login</p>
                        </div>

                        <form class="row g-3 needs-validation" novalidate>

                            <div class="col-12">
                            <label for="yourUsername" class="form-label">Username</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" name="username" class="form-control" id="yourUsername" v-model="userLoginRequest.username" required>
                                <div class="invalid-feedback">Please enter your username.</div>
                            </div>
                            </div>

                            <div class="col-12">
                            <label for="yourPassword" class="form-label">Password</label>
                            <input type="password" name="password" class="form-control" id="yourPassword" v-model="userLoginRequest.password" required>
                            <div class="invalid-feedback">Please enter your password!</div>
                            </div>

                            <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                                <label class="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            </div>
                            <div class="col-12">
                            <button class="btn btn-primary w-100" type="submit" @click="login">Login</button>
                            </div>
                            <div class="col-12">
                            <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                            </div>
                        </form>

                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </section>

            </div>
        </main><!-- End #main -->

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>
</template>

<script>

//import LoginService from "@/services/LoginService";
import ParentService from "@/services/ParentService";

export default {
    name: "UserLogin",
    data() {           
        return {
          userLoginRequest: { username: "", password: "" },  
          message: ""
        };
    },
    methods: {
        login(event) {
            event.preventDefault();
            // LoginService.login(this.userLoginRequest)
            //   .then(response => {       
            //       let user = response.data;
            //       console.log(user);
            //       this.$util.setUser(user);
            //       this.$util.setAuth(true);
            //       this.redirectToDashboard(user);
            //   })
            //   .catch(e => {
            //       this.userLoginRequest = {
            //           username : "",
            //           password : ""
            //       },
            //       this.message = e.response.data.message;
            //       console.log(e.response.data);
            //   });

            this.$util.setAuth(true);
            this.$util.setUser({
              id: 2,
              username: "parent",
              password: "parent",
              type: "PARENT"   
            });
            this.$router.push({ name: "ParentView" });    
            location.reload();   
        },
        redirectToDashboard( user ){
          if(user && user.type === "PARENT"){
            this.getParent(user);       
          }
          else if (user && user.type === "INSTITUTE"){
            this.getInstitute();
            this.$router.push({ name: "InstituteView" });  
          }
          this.$util.wait(200).then(() => {                        
            location.reload();                        
          }) 
        },
        getParent( user ){
          ParentService.get(user.id)
            .then(response => {       
              if(!response.data){
                this.$router.push({ name: "ParentView" }); 
              }
              else{
                let parent = response.data;
                console.log(parent);
                this.$util.setParent(parent);
                this.$router.push({ name: "RequestView" }); 
              }
            })
            .catch(e => {
              console.log(e.response.data);
            });
        },
        getInstitute(){
          
        }
    },
    mounted() {   
        this.message = "";
    }
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
