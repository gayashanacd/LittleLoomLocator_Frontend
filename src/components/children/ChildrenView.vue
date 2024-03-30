<template>
    <div class="row" style="margin-top: 20px;">
      <div class="col-lg-12">
        <table class="table datatable">
          <thead>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastname }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <div class="btn-group" role="group" >
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
    name: "ChildrenView",
    data() {           
        return {
            tableData : [
            { id : 1, firstName : "FN 1", lastname : "LN 1", gender : "Male" },
            { id : 1, firstName : "FN 2", lastname : "LN 2", gender : "Female" }
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
