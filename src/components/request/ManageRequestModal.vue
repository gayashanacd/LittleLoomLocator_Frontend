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
              <button type="button" class="btn btn-info" @click="messageParent(message)">Message</button>
            </div>
          </div>
        </div>
      </div>   
    </div>
  </template>
  
  <script>
  
  import RequestService from "@/services/RequestService";
  import NotificationService from "@/services/NotificationService";
  import ParentService from "@/services/ParentService";
  import InstituteService from "@/services/InstituteService";

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
          if(this.currentRequest.status === 'CONFIRMED' && action === 'CONFIRMED'){
            this.$util.notify("Request is already confirmed !", "warning"); 
            return;
          }

          this.currentRequest.status = action;  
          let msg = "Successfully rejected the request !";
          if(action === 'CONFIRMED'){
            msg = "Successfully confirmed the request !"; 
            const institute = this.$util.getInstitute();
            if(institute.programRemainingSlots === 0){
              this.$util.notify("Program capacity exeeded !", "warning"); 
              return;
            }
          }
            
          RequestService.updateRequest(this.currentRequest)
            .then(response => {       
              let request = response.data;
              console.log(request);
              this.$util.notify(msg, "success");
              this.messageParent();
              if(action === 'CONFIRMED')
                this.updateAvailableSlots();
            })
            .catch(e => {
              this.$util.notify(e.response.data, "error");
              console.log(e.response.data);
            });
        },
        updateAvailableSlots(){
          const institute = this.$util.getInstitute();
          institute.programRemainingSlots = institute.programRemainingSlots - 1;
          InstituteService.update(institute)
            .then(response => {       
              this.$util.setInstitute(response.data);
              this.$emit('updateCapacity');   
            })
            .catch(e => {
              console.log(e.response.data);
            }); 
        },
        async messageParent( message ){
          const user = this.$util.getUser();
          const institute = this.$util.getInstitute();
          let msg = message || "Your application is accepted. Please contact the institute for more details.";
          if(!message && this.currentRequest.status === 'REJECTED')
            msg = "Your application is rejected. Please keep in touch."; 

          let parent = await this.getParent(this.currentRequest.parentId);

          let notiPayload = {
            senderId: user.id,
            senderName: institute.name,
            receiverId: parent.userId,
            receiveName: this.currentRequest.parentName,
            message: msg,
            read: false
          };

          NotificationService.create(notiPayload)
            .then(response => {       
              console.log(response.data);
              if(message){
                this.$util.notify("Successfully sent the message !", "success"); 
              }
            })
            .catch(e => {
              console.log(e.response.data);
            });
        },
        getParent(id){
          return new Promise((resolve, reject) => {
            ParentService.get(id)
              .then(response => {       
                resolve(response.data);
              })
              .catch(e => {
                reject(e.response.data);
              });
          })
        }
      },
      mounted() {   
      }
  };
  </script>
  
  <style>
  
  </style>
  