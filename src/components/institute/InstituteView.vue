<template>
    <div >
      <div class="pagetitle">
        <h1>Institute Registration</h1>
      </div><!-- End Page Title -->
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"></h5>

                <!-- Horizontal Form -->
                <form>
                  <div class="row mb-3">
                    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputName" v-model="instituteRequest.name">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputUnit" placeholder="Unit Number" v-model="instituteRequest.unitNumber">
                    </div>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputBuliding" placeholder="Buliding Number" v-model="instituteRequest.buildingNumber">
                    </div>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputStreet" placeholder="Street" v-model="instituteRequest.street">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputCity" placeholder="City" v-model="instituteRequest.city">
                    </div>
                    <div class="col-md-3">
                      <select id="inputProvince" class="form-select" v-model="instituteRequest.province">
                        <option selected>Select Province</option>
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
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputPostalCode" placeholder="Postal Code" v-model="instituteRequest.postalCode">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputContactName" class="col-sm-2 col-form-label">Contact Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputContactName" v-model="instituteRequest.contactName">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputContactPhone" class="col-sm-2 col-form-label">Contact Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputContactPhone" v-model="instituteRequest.contactPhone">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputWebsite" class="col-sm-2 col-form-label">Website</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputWebsite" v-model="instituteRequest.webSite">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail" v-model="instituteRequest.email">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Program Information</h5>

                                <div class="row mb-3">
                                    <label for="inputProgramName" class="col-sm-2 col-form-label">Program Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputProgramName" v-model="instituteRequest.programName">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputAgeGroup" class="col-sm-2 col-form-label">Age Group</label>
                                    <div class="col-md-3">
                                        <select id="inputAgeGroup" class="form-select" v-model="instituteRequest.ageGroup">
                                            <option selected>Select Age Group</option>
                                            <option value="UNDER_36_MONTHS">Under 36 months</option>
                                            <option value="BETWEEN_3_5_YEARS">Between 3 and 5 years</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputProgramCapacity" class="col-sm-2 col-form-label">Program Capacity</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputProgramCapacity" v-model="instituteRequest.programCapacity">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputAllowWaitlisting" class="col-sm-2 col-form-label">Allow Waitlisting</label>
                                    <div class="col-sm-10">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="allowWaitlistingOptions" id="Radio1" value="Yes" v-model="instituteRequest.waitlistingAllowed">
                                            <label class="form-check-label" for="Radio1">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="allowWaitlistingOptions" id="Radio2" value="No" v-model="instituteRequest.waitlistingAllowed">
                                            <label class="form-check-label" for="Radio2">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputWaitlistCapacity" class="col-sm-2 col-form-label">Waitlist Capacity</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputWaitlistCapacity" v-model="instituteRequest.waitlistCapacity">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary form-buttons" @click="register">Submit</button>
                    <button type="reset" class="btn btn-secondary">Reset</button>
                  </div>
                </form><!-- End Horizontal Form -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
    import InstituteService from "@/services/InstituteService";

    export default{
        name: "InstituteView",

        data(){
            return{
                instituteRequest: {  id:0, name: "", unitNumber: "", buildingNumber: "", street: "", city: "", province: "", postalCode: "", 
                contactName: "", contactPhone: "", webSite: "", email: "", programName: "", ageGroup: "", programCapacity: 0, 
                programRemainingSlots: 0, waitlistingAllowed: "", waitlistCapacity: 0, userId: 0 },
                message: ""
            };
        },

        methods: {
            register(event) {
                event.preventDefault();
                let user = this.$util.getUser();
                console.log(user);
                if(user && this.instituteRequest.name){
                    this.instituteRequest.userId = user.id;
                    if (this.instituteRequest.id === 0){
                    InstituteService.create(this.instituteRequest)
                    .then(response => {
                        let institute = response.data;
                        this.$util.setInstitute(institute);
                        this.message = institute;
                        this.$util.notify("Successfully saved the institute detail !", "success");
                        this.$util.wait(1000).then(() => {                        
                          this.$router.push({ name: "InstituteView" });                       
                        })                  
                    })
                    .catch(error => {
                        this.instituteRequest.name = "";
                        this.instituteRequest.unitNumber = "";
                        this.instituteRequest.buildingNumber = "";
                        this.instituteRequest.street = "";
                        this.instituteRequest.city = "";
                        this.instituteRequest.province = "";
                        this.instituteRequest.postalCode = "";
                        this.instituteRequest.contactName = "";
                        this.instituteRequest.contactPhone = "";
                        this.instituteRequest.webSite = "";
                        this.instituteRequest.email = "";
                        this.instituteRequest.programName = "";
                        this.instituteRequest.ageGroup = "";
                        this.instituteRequest.programCapacity = 0;
                        this.instituteRequest.programRemainingSlots = 0;
                        this.instituteRequest.waitlistingAllowed = "";
                        this.instituteRequest.waitlistCapacity = 0;
                        this.instituteRequest.userId = 0;
                        console.log(error.response);
                    });
                    } else {
                    InstituteService.update(this.instituteRequest)
                    .then(response => {
                        let institute = response.data;
                        this.$util.setInstitute(institute);
                        this.message = institute;
                        this.$util.notify("Successfully updated the institute detail !", "success");
                            this.$util.wait(1000).then(() => {                        
                            this.$router.push({ name: "InstituteView" });                       
                            })
                    })
                    .catch(error => {
                        this.instituteRequest.name = "";
                        this.instituteRequest.unitNumber = "";
                        this.instituteRequest.buildingNumber = "";
                        this.instituteRequest.street = "";
                        this.instituteRequest.city = "";
                        this.instituteRequest.province = "";
                        this.instituteRequest.postalCode = "";
                        this.instituteRequest.contactName = "";
                        this.instituteRequest.contactPhone = "";
                        this.instituteRequest.webSite = "";
                        this.instituteRequest.email = "";
                        this.instituteRequest.programName = "";
                        this.instituteRequest.ageGroup = "";
                        this.instituteRequest.programCapacity = 0;
                        this.instituteRequest.programRemainingSlots = 0;
                        this.instituteRequest.waitlistingAllowed = "";
                        this.instituteRequest.waitlistCapacity = 0;
                        this.instituteRequest.userId = 0;
                        console.log(error.response);
                    });
                    }
                    
                }
                
            },

            retreiveInstitute() {
                    let institute = this.$util.getInstitute();
                    console.log(institute);
                    if(institute && institute.id){
                    InstituteService.get(institute.id)
                        .then(response => { 
                            this.instituteRequest = response.data;
                            console.log(this.instituteRequest);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    }       
                }
        },

        mounted() {   
            this.retreiveInstitute();
        }

    }

</script>

<style>

</style>
