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
              <td>{{ item.createdDateTime }}</td>
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

export default {
  name: "PastRequests",
  data() {           
    return {
      tableData : [
        // { instituteId : 1, institute : "Institute 1", program : "Program 1", childName : "Mellisa", status : "Pending", date : "2023/04/07" },
        // { instituteId : 2, institute : "Institute 2", program : "Program 2", childName : "Mellisa", status : "Rejected", date : "2023/06/20" },
        // { instituteId : 3, institute : "Institute 3", program : "Program 3", childName : "Mellisa", status : "Pending", date : "2023/06/15" }
      ],
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
    } 
  },
  mounted() {   
    this.fetchRequests();
  }
};
</script>

<style>

</style>
