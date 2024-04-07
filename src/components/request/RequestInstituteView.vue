<template>
  <div >
    <ManageRequestModal :currentItem="currentItem" @updateCapacity="setCapacity"></ManageRequestModal>
    <div class="row" style="margin-top: 10px;">
      <div class="col-lg-12">
      <div class="row g-3">
          <div class="col-md-10">
          <input type="text" class="form-control" placeholder="Type parent name..." v-model="searchParams.parentName">
          </div>
          <div class="col-md-2">
          <button style="width: 100%;" type="submit" class="btn btn-primary form-buttons" @click="search()">Search</button>  
          </div>
      </div>
      </div> 
    </div>
    <div class="row" style="margin-top: 20px; margin-bottom: -20px; padding-left: 12px; padding-right: 12px;">
        <div class="card" >
        <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <select id="inputStatus" class="form-select" v-model="searchParams.status">
                  <option selected value="">- Select Status -</option>
                  <option value="PENDING">Pending</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="CANCELLED">Cancelled</option>
                </select>
              </div> 
              <div class="col-md-3">
                <select id="inputAgeGroup" class="form-select" v-model="searchParams.type">
                  <option selected value="">- Select Registration Type -</option>
                  <option value="ENROLMENT">Enrollment</option>
                  <option value="WAITLIST">Waitlist</option>
                </select>
              </div> 
              <div class="col-md-3">
              </div> 
              <div class="col-md-3" style="margin-top: 8px;">
                <label><b>Program Capacity : </b>{{ programCapacity }} </label> &nbsp;
                <label><b>Available Slots : </b>{{ availableProgramSlots }} </label>
              </div>
            </div>   
        </div>
        </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <table class="table datatable">
          <thead>
            <tr>
                <th>Program</th>
                <th>Type</th>
                <th>Parent</th>
                <th>Child</th>
                <th>Age Group</th>
                <th>Status</th>
                <th data-type="date" data-format="YYYY/MM//DD">Date</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableData" :key="item.id">
              <td>{{ item.programName }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.parentName }}</td>
              <td>{{ item.childName }}</td>
              <td>{{ item.ageGroup }}</td>
              <td>{{ item.status }}</td>
              <td>{{ formatDatetime(item.createdDateTime) }}</td>
              <td>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-info" title="Manage Request" data-bs-toggle="modal" data-bs-target="#ManageRequestModal" @click="manageRequest(item)"><i class="bi bi-card-list"></i></button>
                  <button v-if="item.status === 'REJECTED'" type="button" class="btn btn-danger" title="Delete Request" @click="deleteRequest(item)"><i class="bi bi-stop-circle"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>  
</template>

<script>

import ManageRequestModal from '@/components/request/ManageRequestModal.vue'
import RequestService from "@/services/RequestService";
import moment from 'moment';

export default {
  name: "RequestInstituteView",
  data() {           
    return {
      tableData : [],
      searchParams : {
        parentName : "",
        status : "",
        type : "",
      },
      currentItem : {},
      programCapacity : 0,
      availableProgramSlots : 0,
      waitlistCapacity : 0,
      availableWaitlistSlots : 0,
    };
  },
  components: {
    ManageRequestModal
  },
  methods: {
    manageRequest(currentItem){
      this.currentItem = currentItem;
    },
    search(){
      const institute = this.$util.getInstitute();
      this.searchParams.instituteId = institute.id;
      RequestService.search(this.searchParams)
        .then(response => {       
          if(!response.data){
            this.$util.notify("No records found !", 'info');
          }
          let requests = response.data;
          this.tableData = requests;
        })
        .catch(e => {
          this.$util.notify(e.response.data.message);
        });
    },
    deleteRequest(item){
      RequestService.deleteRequest(item.id)
        .then(response => {       
          console.log(response);
          this.$util.notify("Successfully deleted the request !", "success");
          this.$util.wait(1000).then(() => {                        
            this.search();                       
          }) 
        })
        .catch(e => {
          this.$util.notify(e.response.data.message);
        });  
    },
    formatDatetime(dateTime){
      return moment(dateTime).format('YYYY-MM-DD, h:mm:ss A');
    },
    setCapacity(){
      const institute = this.$util.getInstitute();
      this.programCapacity = institute.programCapacity;
      this.availableProgramSlots = institute.programRemainingSlots;
    }
  },
  mounted() {   
    this.search();
    this.setCapacity();
  }
};
</script>

<style>

</style>
