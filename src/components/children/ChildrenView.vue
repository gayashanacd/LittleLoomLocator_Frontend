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
            <td>{{ item.lastName }}</td>
            <td>{{ item.gender }}</td>
            <td>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-info" title="Edit Child" @click="editChild(item)"><i class="bi bi-card-list"></i></button>
                  <button type="button" class="btn btn-danger" title="Delete Child" @click="deleteChild(item)"><i class="bi bi-stop-circle"></i></button>
                </div>
              </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <addChild ref="AddChildRef" :retreiveChildren="retreiveChildren" :childId="selectedChildId"></addChild>
      </div>
    </div>  
</template>

<script>
import ParentService from "@/services/ParentService";
import AddChild from '@/components/children/AddChild.vue';
import ChildrenService from "@/services/ChildrenService";

export default {
    name: "ChildrenView",
    data() {           
        return {
            tableData : [],
            selectedChildId:0
        };
    },
    components: {
      AddChild
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
      },
      editChild(item){
        this.selectedChildId = item.id;
        this.$refs.AddChildRef.retreiveChild(this.selectedChildId);

        console.log(item);
      },

      deleteChild(item){
        console.log("Child Id: " + item.id)
        ChildrenService.delete(item.id)
        .then(response => {       
          console.log(response);
          this.$util.notify("Successfully deleted the child !", "success");
          this.$util.wait(1000).then(() => {                        
            this.retreiveChildren();                       
          }) 
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
