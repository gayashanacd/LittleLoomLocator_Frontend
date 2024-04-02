<template>
    <div>
      <div class="modal fade" id="ManageRequestModal" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="row mb-3">
                      <label for="inputText" class="col-sm-4 col-form-label">Parent Name</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="currentRequest.parentName" disabled>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputText" class="col-sm-4 col-form-label">Child Name</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="currentRequest.childName" disabled>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row mb-3">
                      <label for="inputText" class="col-sm-4 col-form-label">Age Group</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="currentRequest.ageGroup" disabled>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputText" class="col-sm-4 col-form-label">Status</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="currentRequest.status" disabled>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="row mb-3">
                      <label for="inputText" class="col-sm-4 col-form-label">Message</label>
                      <div class="col-sm-8">
                        <textarea class="form-control" v-model="message"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="manageRequest('CONFIRMED')">Confirm</button>
              <button type="button" class="btn btn-danger" @click="manageRequest('REJECTED')">Reject</button>
              <button type="button" class="btn btn-info" @click="messageParent">Message</button>
            </div>
          </div>
        </div>
      </div>   
    </div>
  </template>
  
  <script>
  
  import RequestService from "@/services/RequestService";
  
  export default {
      name: "ManageRequestModal",
      props: {
        currentItem:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      data() {           
          return {
            currentRequest : {},
            message : ""
          };
      },
      computed: {
        title(){
          let title = 'More Information';
          if(this.currentRequest)
            title += ` | ${this.currentRequest.parentName}`;  
          return title;
        }
      },
      watch:{
        currentItem(newValue){
          this.currentRequest = newValue;   
        },
        deep: true
      },
      methods: {
        manageRequest(action){
          this.currentRequest.status = action;  
          RequestService.updateRequest(this.currentRequest)
            .then(response => {       
              let request = response.data;
              console.log(request);
              this.$util.notify("Successfully submitted the request !", "success");
            })
            .catch(e => {
              this.$util.notify(e.response.data, "error");
              console.log(e.response.data);
            });
        },
        messageParent(){

        }
      },
      mounted() {   
      }
  };
  </script>
  
  <style>
  
  </style>
  