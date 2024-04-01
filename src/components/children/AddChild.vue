<template>
    <div >
      <div class="pagetitle">
        <h1>Children Registration</h1>
      </div><!-- End Page Title -->
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"></h5>
  
                <!-- Horizontal Form -->
                
                <form>
                  <div class="row mb-3">
                    <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputFirstName" v-model="childRequest.firstName">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputLastName" v-model="childRequest.lastName">
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label for="inputGender" class="col-sm-2 col-form-label">Gender</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputGender" v-model="childRequest.gender">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputDOB" class="col-sm-2 col-form-label">Date of birth</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputDOB" v-model="childRequest.dob">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputAllergies" class="col-sm-2 col-form-label">Allergies</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputAllergies" v-model="childRequest.allergy">
                    </div>
                  </div>
                  
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary form-buttons" @click="addChild">Add</button>
                    <button type="reset" class="btn btn-secondary" @click="clear">Clear</button>
                  </div>
                </form><!-- End Horizontal Form -->
  
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  
  import ChildrenService from "@/services/ChildrenService";
  
  export default {
    name: "AddChild",
    data() {           
        return {
            childRequest: { firstName: "", lastName: "", gender: "", dateofbirth: "", allergy: "", parent: {}},
            message: ""
        };
    },
    props: ['retreiveChildren','childId'],
    methods: {
      addChild(event) {
            event.preventDefault();
            let parent = this.$util.getParent();
            console.log(parent);
            if(parent){              
              if (this.childRequest.id === 0){
                this.childRequest.parent = parent;
                ChildrenService.create(this.childRequest)
                .then(response => {
                    let child = response.data;
                    console.log(child);
                    localStorage.setItem('Child id', child.id);
                    this.message = child;
                    this.retreiveChildren();
                    //this.$router.push({ name: "ChildrenView" });
                })
                .catch(error => {
                    this.childRequest.firstName = "";
                    this.childRequest.lastName = "";                    
                    console.log(error.response);
                });
              } else {
                ChildrenService.update(this.childRequest.id, this.childRequest)
                .then(response => {
                    let child = response.data;
                    console.log(child);
                    localStorage.setItem('Child id', child.id);
                    this.message = child;
                    this.retreiveChildren();
                    //this.$router.push({ name: "ChildrenView" });
                })
                .catch(error => {
                    this.childRequest.firstName = "";
                    this.childRequest.lastName = "";                    
                    console.log(error.response);
                });
              }
              
            }
            
        },
        
        retreiveChild(id) {
              //let parent = this.$util.getParent();
            ChildrenService.get(id)
                .then(response => { 
                    this.childRequest = response.data;
                    console.log(this.childRequest);
                })
                .catch(error => {
                    console.log(error);
                })
            
          },
          clear(){
            this.childRequest.id = 0;
            this.childRequest.firstName = "";
            this.childRequest.lastName = "";
            this.gender= ""; 
            this.dateofbirth= ""; 
            this.allergy= ""; 
            this.parent= {};
          }
    },
    mounted() {   
      this.retreiveChild(this.childId);
    }
  };
  </script>
  
  <style>
  
  </style>
  