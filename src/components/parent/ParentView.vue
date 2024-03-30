<template>
  <div >
    <div class="pagetitle">
      <h1>Parent Registration</h1>
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
                  <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputFirstName" v-model="parentRequest.firstName">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputLastName" v-model="parentRequest.lastName">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputUnit" placeholder="Unit Number" v-model="parentRequest.unit">
                  </div>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputBuliding" placeholder="Buliding Number" v-model="parentRequest.building">
                  </div>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputStreet" placeholder="Street" v-model="parentRequest.street">
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputCity" placeholder="City" v-model="parentRequest.city">
                  </div>
                  <div class="col-md-3">
                    <select id="inputProvince" class="form-select" v-model="parentRequest.province">
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
                    <input type="text" class="form-control" id="inputPostalCode" placeholder="Postal Code" v-model="parentRequest.postalCode">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPhone" v-model="parentRequest.phone">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail" v-model="parentRequest.email">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmergencyContactName" class="col-sm-2 col-form-label">Emergency Contact Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmergencyContactName" v-model="parentRequest.emergencyContactName">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmergencyContactPhone" class="col-sm-2 col-form-label">Emergency Contact Phone</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmergencyContactPhone" v-model="parentRequest.emergencyContactPhone">
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

import ParentService from "@/services/ParentService";

export default {
  name: "ParentView",
  data() {           
      return {
          parentRequest: { firstName: "", lastName: "", unit: "", building: "", street: "", city: "", province: "", postalCode: "", phone: "", email: "", 
                                  emergencyContactName: "", emergencyContactPhone: "" },
          message: ""
      };
  },
  methods: {
    register(event) {
          event.preventDefault();
          ParentService.create(this.parentRequest)
              .then(response => {
                  let parent = response.data;
                  console.log(parent);
                  localStorage.setItem('id', parent.id);
                  this.message = parent;
                  this.$router.push({ name: "ChildrenView" });
              })
              .catch(error => {
                  this.parentRequest.firstName = "";
                  this.parentRequest.lastName = "";
                  this.parentRequest.address = "";
                  this.parentRequest.phone = "";
                  this.parentRequest.email = "";
                  this.parentRequest.emergencyContactName = "";
                  this.parentRequest.emergencyContactPhone = "";
                  //this.message = error.response.data.message;
                  console.log(error.response);
              });
      }
  },
  mounted() {   

  }
};
</script>

<style>

</style>
