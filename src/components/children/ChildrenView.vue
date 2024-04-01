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
import ParentService from "@/services/ParentService";

export default {
    name: "ChildrenView",
    data() {           
        return {
            tableData : [],
        };
    },
    methods: {
      retreiveChildren(){
      const parent = this.$util.getParent();
      ParentService.getChildrenByParentId(parent.id)
        .then(response => {       
          if(!response.data){
            this.$util.notify("No records found !", 'info');
          }
          let children = response.data;
          console.log(children);
          this.tableData = children;
        })
        .catch(e => {
          this.$util.notify(e.response.data.message);
        });
    }
    },
    mounted() {   
      this.retreiveChildren();
    }
};
</script>

<style>

</style>
