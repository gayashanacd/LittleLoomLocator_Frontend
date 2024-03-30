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
                      <input type="text" class="form-control" id="inputFirstName">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputLastName">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputUnit" placeholder="Unit Number">
                    </div>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputBuliding" placeholder="Buliding Number">
                    </div>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputStreet" placeholder="Street">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" id="inputCity" placeholder="City">
                    </div>
                    <div class="col-md-3">
                      <select id="inputProvince" class="form-select">
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
                      <input type="text" class="form-control" id="inputPostalCode" placeholder="Postal Code">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputPhone">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmergencyContactName" class="col-sm-2 col-form-label">Emergency Contact Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputEmergencyContactName">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmergencyContactPhone" class="col-sm-2 col-form-label">Emergency Contact Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputEmergencyContactPhone">
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary form-buttons">Submit</button>
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

export default {
    name: "ParentView",
    data() {           
        return {
          //test commit
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
