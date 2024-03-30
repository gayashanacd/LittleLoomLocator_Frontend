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
                      <input type="text" class="form-control" id="inputName">
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
                    <label for="inputContactName" class="col-sm-2 col-form-label">Contact Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputContactName">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputContactPhone" class="col-sm-2 col-form-label">Contact Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputContactPhone">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputWebsite" class="col-sm-2 col-form-label">Website</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputWebsite">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail">
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
                                        <input type="text" class="form-control" id="inputProgramName">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputAddress" class="col-sm-2 col-form-label">Age Group</label>
                                    <div class="col-md-3">
                                        <select id="inputProvince" class="form-select">
                                            <option selected>Select Age Group</option>
                                            <option value="Under36months">Under 36 months</option>
                                            <option value="Between3and5">Between 3 and 5</option>
                                            <option value="Between5and8">Between 5 and 8</option>
                                            <option value="Between8and12">Between 8 and 12</option>
                                            <option value="Between12and15">Between 12 and 15</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputProgramCapacity" class="col-sm-2 col-form-label">Program Capacity</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputProgramCapacity">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputAllowWaitlisting" class="col-sm-2 col-form-label">Allow Waitlisting</label>
                                    <div class="col-sm-10">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="allowWaitlistingOptions" id="Radio1" value="Yes">
                                            <label class="form-check-label" for="Radio1">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="allowWaitlistingOptions" id="Radio2" value="No">
                                            <label class="form-check-label" for="Radio2">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputWaitlistCapacity" class="col-sm-2 col-form-label">Waitlist Capacity</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputWaitlistCapacity">
                                    </div>
                                </div>
                            </div>
                        </div>
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
    name: "InstituteView",
    data() {           
        return {

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
