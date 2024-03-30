<template>
    <div >
      <RequestMoreInfoModal :currentItem="currentItem"></RequestMoreInfoModal>
      <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="message">
        {{ message }}
      </div>
      <div class="pagetitle">
        <h1>Request</h1>
      </div><!-- End Page Title -->
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
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
                    <PastRequests></PastRequests>
                  </div>
                </div><!-- End Default Tabs -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import InstituteService from "@/services/InstituteService.js";
import PastRequests from '@/components/request/PastRequests.vue'
import RequestMoreInfoModal from '@/components/request/RequestMoreInfoModal.vue'

export default {
    name: "RequestView",
    data() {           
        return {
          tableData : [
            // { instituteId : 1, institute : "Institute 1", program : "Program 1", ageGroup : "36 Months Below", city : "Burnaby", capacity : "25/40", waitlist : "Yes" },
            // { instituteId : 2, institute : "Institute 2", program : "Program 2", ageGroup : "3-5 Years", city : "Burnaby", capacity : "10/40", waitlist : "No" },
            // { instituteId : 3, institute : "Institute 3", program : "Program 3", ageGroup : "36 Months Below", city : "Surrey", capacity : "29/40", waitlist : "Yes" },
            // { instituteId : 4, institute : "Institute 4", program : "Program 4", ageGroup : "3-5 Years", city : "Burnaby", capacity : "32/40", waitlist : "No" },
            // { instituteId : 5, institute : "Institute 5", program : "Program 5", ageGroup : "36 Months Below", city : "New Westminister", capacity : "33/40", waitlist : "Yes" },
            // { instituteId : 6, institute : "Institute 6", program : "Program 6", ageGroup : "3-5 Years", city : "Burnaby", capacity : "35/40", waitlist : "Yes" },
            // { instituteId : 7, institute : "Institute 7", program : "Program 7", ageGroup : "3-5 Years", city : "Surrey", capacity : "36/40", waitlist : "Yes" },
            // { instituteId : 8, institute : "Institute 8", program : "Program 8", ageGroup : "36 Months Below", city : "New Westminister", capacity : "37/40", waitlist : "No" },
            // { instituteId : 9, institute : "Institute 9", program : "Program 9", ageGroup : "36 Months Below", city : "Burnaby", capacity : "40/40", waitlist : "Yes" },
            // { instituteId : 10, institute : "Institute 10", program : "Program 10", ageGroup : "3-5 Years", city : "Surrey", capacity : "19/40", waitlist : "Yes" },
            // { instituteId : 11, institute : "Institute 11", program : "Program 11", ageGroup : "36 Months Below", city : "New Westminister", capacity : "25/40", waitlist : "No" },
            // { instituteId : 12, institute : "Institute 12", program : "Program 12", ageGroup : "3-5 Years", city : "Surrey", capacity : "2/40", waitlist : "No" },
          ],
          searchParams : {
            name : "",
            province : "BC",
            city : "",
            ageGroup : "UNDER_36_MONTHS"
          },
          message : "",
          currentItem : {}
        };
    },
    components: {
      PastRequests,
      RequestMoreInfoModal
    },
    methods: {
      search(){
        this.message = "";
        InstituteService.search(this.searchParams)
          .then(response => {       
              if(!response.data){
                this.message = "No records found !";
              }
              let institutes = response.data;
              console.log(institutes);
              this.tableData = institutes;
          })
          .catch(e => {
              this.message = e.response.data.message;
          });
      },
      showMoreDetails(currentItem){
        this.currentItem = currentItem;
      }
    },
    mounted() {   
      this.search();
    }
};
</script>

<style>

</style>
