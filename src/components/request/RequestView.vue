<template>
    <div >
      <RequestMoreInfoModal :currentItem="currentItem" ref="RequestMoreInfoModal"></RequestMoreInfoModal>
      <div class="pagetitle">
        <h1>Request</h1>
      </div><!-- End Page Title -->
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body" v-if="userType === 'PARENT'">
                <!-- Default Tabs -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Institute Search</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Past Requests</button>
                  </li>
                </ul>
                <div class="tab-content pt-2" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="row" style="margin-top: 10px;">
                      <div class="col-lg-12">
                        <div class="row g-3">
                          <div class="col-md-10">
                            <input type="text" class="form-control" placeholder="Type institute name..." v-model="searchParams.name">
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
                              <select id="inputProvince" class="form-select" v-model="searchParams.province">
                                <option selected value="">- Select Province -</option>
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">New Brunswick</option>
                                <option value="NL">Newfoundland and Labrador</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="NT">Northwest Territories</option>
                                <option value="NU">Nunavut</option>
                                <option value="ON">Ontario</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="QC">Quebec</option>
                                <option value="SK">Saskatchewan</option>
                                <option value="YT">Yukon</option>
                              </select>
                            </div> 
                            <div class="col-md-3">
                              <input type="text" class="form-control" id="inputCity" placeholder="City" v-model="searchParams.city">
                            </div> 
                            <div class="col-md-3">
                              <select id="inputAgeGroup" class="form-select" v-model="searchParams.ageGroup">
                                <option selected value="">- Select Age Group -</option>
                                <option value="UNDER_36_MONTHS">36 Months Below</option>
                                <option value="BETWEEN_3_5_YEARS">3-5 Years</option>
                              </select>
                            </div> 
                            <div class="col-md-3">
                              <div class="form-check" style="margin-top: 5px;">
                                <input class="form-check-input" type="checkbox" id="gridCheck1">
                                <label class="form-check-label" for="gridCheck1">
                                  With Waitlists
                                </label>
                              </div>
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
                              <th>Institute</th>
                              <th>Program</th>
                              <th>Age Group</th>
                              <th>City</th>
                              <th>Capacity</th>
                              <th>Waitlist</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in tableData" :key="item.id">
                              <td>{{ item.name }}</td>
                              <td>{{ item.programName }}</td>
                              <td>{{ item.ageGroup }}</td>
                              <td>{{ item.city }}</td>
                              <td>{{ item.programCapacity }}</td>
                              <td>{{ item.waitlistingAllowed }}</td>
                              <td>
                                <div class="btn-group" role="group">
                                  <button type="button" class="btn btn-info" title="More Info" data-bs-toggle="modal" data-bs-target="#MoreInfoModal" @click="showMoreDetails(item)"><i class="bi bi-info-circle"></i></button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <PastRequests ref="PastRequests"></PastRequests>
                  </div>
                </div><!-- End Default Tabs -->
              </div>
              <div class="card-body" v-else-if="userType === 'INSTITUTE'">
                <RequestInstituteView></RequestInstituteView>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import InstituteService from "@/services/InstituteService.js";
import ParentService from "@/services/ParentService";
import PastRequests from '@/components/request/PastRequests.vue'
import RequestMoreInfoModal from '@/components/request/RequestMoreInfoModal.vue'
import RequestInstituteView from '@/components/request/RequestInstituteView.vue'

export default {
    name: "RequestView",
    data() {           
        return {
          tableData : [],
          searchParams : {
            name : "",
            province : "BC",
            city : "",
            ageGroup : "UNDER_36_MONTHS"
          },
          currentItem : {}
        };
    },
    components: {
      PastRequests,
      RequestMoreInfoModal,
      RequestInstituteView
    },
    computed: {
      userType(){
        const user = this.$util.getUser();
        return user.type;
      }
    },
    methods: {
      search(){
        InstituteService.search(this.searchParams)
          .then(response => {       
            if(!response.data){
              this.$util.notify("No records found !", 'info');
            }
            let institutes = response.data;
            console.log(institutes);
            this.tableData = institutes;
          })
          .catch(e => {
            this.$util.notify(e.response.data.message);
          });
      },
      showMoreDetails(currentItem){
        this.currentItem = currentItem;
      },
      fetchChildren(){
        const parent = this.$util.getParent();
        if(!parent)
          return false;
        ParentService.getChildrenByParentId(parent.id)
          .then(response => {       
            if(response.data){
              let children = response.data; 
              this.$util.setChildren(children);    
            }
          })
          .catch(e => {
            console.log(e.response.data);
          });
      }
    },
    mounted() {   
      this.fetchChildren();
      this.search();
    }
};
</script>

<style>

</style>
