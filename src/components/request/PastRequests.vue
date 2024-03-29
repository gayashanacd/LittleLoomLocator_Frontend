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
          <tr v-for="item in tableData" :key="item.instituteId">
            <td>{{ item.institute }}</td>
            <td>{{ item.program }}</td>
            <td>{{ item.childName }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.date }}</td>
            <td>
              <div class="btn-group" role="group" v-if="item.status == 'Pending'">
                  <button type="button" class="btn btn-danger" title="Cancel Request"><i class="bi bi-backspace-reverse"></i></button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>   
</template>

<script>

export default {
    name: "PastRequests",
    data() {           
        return {
          tableData : [
            { instituteId : 1, institute : "Institute 1", program : "Program 1", childName : "Mellisa", status : "Pending", date : "2023/04/07" },
            { instituteId : 2, institute : "Institute 2", program : "Program 2", childName : "Mellisa", status : "Rejected", date : "2023/06/20" },
            { instituteId : 3, institute : "Institute 3", program : "Program 3", childName : "Mellisa", status : "Pending", date : "2023/06/15" }
          ],
        };
    },
    methods: {

    },
    mounted() {   

    }
};
</script>

<style>

</style>
