<template>
  <div>
    <div class="modal fade" id="MoreInfoModal" tabindex="-1">
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
                    <label for="inputText" class="col-sm-4 col-form-label">Institute Name</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="currentInstitute.name" disabled>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Program Name</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="currentInstitute.programName" disabled>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Capacity</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="currentInstitute.programCapacity" disabled>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Age Group</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="currentInstitute.ageGroup" disabled>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Address</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="currentInstitute.address" disabled>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Select Child</label>
                    <div class="col-sm-8">
                      <select id="inputChild" class="form-select" v-model="requestPayload.childId">
                        <option v-for="child in children" :key="child.id" :value="child.id">{{ child.firstName }}</option>
                      </select>
                    </div>
                  </div>
                </div> 
                <div class="col-md-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Message</label>
                    <div class="col-sm-8">
                      <textarea class="form-control" v-model="requestPayload.message"></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-4 col-form-label">Select Type</label>
                    <div class="col-sm-8">
                      <select id="inputChild" class="form-select" v-model="requestPayload.type ">
                        <option value="ENROLMENT">Enrollment</option>
                        <option value="WAITLIST">Waitlist</option>
                      </select>
                    </div>
                  </div>
                </div>  
              </div>
            </div>  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="makeRequest">Request for enrollment</button>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>

import RequestService from "@/services/RequestService";
import InstituteService from "@/services/InstituteService";
import NotificationService from "@/services/NotificationService";
import lodash from 'lodash';

export default {
    name: "RequestMoreInfoModal",
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
          currentInstitute : {},
          children : [],
          requestPayload : {
            type : "ENROLMENT",
            message : "",
            status : "PENDING",
            childId : -1
          }
        };
    },
    computed: {
      title(){
        let title = 'More Information';
        if(this.currentInstitute)
          title += ` | ${this.currentInstitute.name}`;  
        return title;
      }
    },
    watch:{
      currentItem(newValue){
        this.currentInstitute = this.formatAddress(newValue);   
      },
      deep: true
    },
    methods: {
      formatAddress( item ){
        item.address = `${item.unitNumber} ${item.buildingNumber} ${item.street} ${item.city} ${item.province} ${item.postalCode}`;
        return item;
      },
      makeRequest(){
        if(this.requestPayload.childId == -1){
          this.$util.notify("Please select a child !");
          return;
        }
          
        this.requestPayload.instituteId = this.currentInstitute.id;
        this.requestPayload.instituteName = this.currentInstitute.name;
        this.requestPayload.programName = this.currentInstitute.programName;
        this.requestPayload.ageGroup = this.currentInstitute.ageGroup;
        let parent = this.$util.getParent();
        if(parent){
          this.requestPayload.parentId = parent.id;
          this.requestPayload.parentName = `${parent.firstName} ${parent.lastName}` ;
        }
        let selectedChild = lodash.find(this.children, { 'id': this.requestPayload.childId });
        if(selectedChild)
          this.requestPayload.childName = `${selectedChild.firstName} ${selectedChild.lastName}`;

        RequestService.createRequest(this.requestPayload)
          .then(response => {       
            let request = response.data;
            console.log(request);
            this.$util.notify("Successfully submitted the request !", "success");
            this.notifyInstitute();
          })
          .catch(e => {
            this.$util.notify(e.response.data, "error");
            console.log(e.response.data);
          });
      },
      async notifyInstitute(){
        const user = this.$util.getUser();
        const parent = this.$util.getParent();
        let institute = await this.getInstitute(this.requestPayload.instituteId);

        let notiPayload = {
          senderId: user.id,
          senderName: `${parent.firstName} ${parent.lastName}`,
          receiverId: institute.userId,
          receiveName: this.requestPayload.instituteName,
          message: 'New application is received.',
          read: false
        };

        NotificationService.create(notiPayload)
          .then(response => {       
            console.log(response.data);
          })
          .catch(e => {
            console.log(e.response.data);
          });
        },
        getInstitute(id){
          return new Promise((resolve, reject) => {
            InstituteService.get(id)
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
      this.children =  this.$util.getChildren() || [];
      if(this.children.length > 0){
        this.children.unshift({
          id : -1,
          firstName : '- Select Child -'
        });
      }
    }
};
</script>

<style>

</style>
