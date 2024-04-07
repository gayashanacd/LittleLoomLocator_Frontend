<template>
    <div class="row" style="margin-top: 20px;">
      <div class="col-lg-12">
        <table class="table datatable">
          <thead>
            <tr>
                <th>Institute</th>
                <th>Program</th>
                <th>Child Name</th>
                <th>Status</th>
                <th data-type="date" data-format="YYYY/MM//DD">Date</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableData" :key="item.id">
              <td>{{ item.instituteName }}</td>
              <td>{{ item.programName }}</td>
              <td>{{ item.childName }}</td>
              <td>{{ item.status }}</td>
              <td>{{ formatDatetime(item.createdDateTime) }}</td>
              <td>
                <div class="btn-group" role="group" v-if="item.status == 'PENDING'">
                    <button type="button" class="btn btn-danger" title="Cancel Request"><i class="bi bi-backspace-reverse" @click="cancelRequest(item)"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>   
</template>

<script>

import RequestService from "@/services/RequestService";
import moment from 'moment';

export default {
  name: "PastRequests",
  data() {           
    return {
      tableData : [],
    };
  },
  methods: {
    fetchRequests(){
      const parent = this.$util.getParent();
      RequestService.getAllRequestsForParent(parent.id)
        .then(response => {       
          if(!response.data){
            this.$util.notify("No records found !", 'info');
          }
          let requests = response.data;
          console.log(requests);
          this.tableData = requests;
        })
        .catch(e => {
          this.$util.notify(e.response.data.message);
        });
    },
    cancelRequest(item){
      item.status = "CANCELLED";
      RequestService.updateRequest(item)
        .then(response => {       
          console.log(response.data);
          this.$util.notify("Successfully cancelled the request !", "success");
          this.$util.wait(1000).then(() => {                        
            this.fetchRequests();                       
          }) 
        })
        .catch(e => {
          this.$util.notify(e.response.data.message);
        });
    },
    formatDatetime(dateTime){
      return moment(dateTime).format('YYYY-MM-DD, h:mm:ss A');
    },
  },
  mounted() {   
    this.fetchRequests();
  }
};
</script>

<style>

</style>
