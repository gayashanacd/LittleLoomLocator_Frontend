<template>
    <div>
        <main>
            <div class="container">

                <section
                    class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div class="d-flex justify-content-center py-4">
                                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                                        <img alt="Logo" src="@/assets/logo.png">
                                    </a>
                                </div>

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Register</h5>
                                        </div>

                                        <form class="row g-3 needs-validation" novalidate>

                                            <div class="col-12">
                                                <label for="yourUsername" class="form-label">Username</label>
                                                <div class="input-group has-validation">
                                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="text" name="username" class="form-control"
                                                        id="yourUsername" v-model="registrationRequest.username"
                                                        required>
                                                    <div class="invalid-feedback">Please enter your username.</div>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input type="password" name="password" class="form-control"
                                                    id="yourPassword" v-model="registrationRequest.password" required>
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>

                                            <div class="col-12">
                                                <select class="form-select" name="type"
                                                    v-model="registrationRequest.type">
                                                    <option value="" selected>- Select the type - </option>
                                                    <option value="PARENT">Parent</option>
                                                    <option value="INSTITUTE">Institute</option>
                                                </select>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100" type="submit"
                                                    @click="registerUser">Register</button>
                                            </div>
                                            <div class="col-12">
                                                <a href="pages-register.html">Back to Login</a>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main><!-- End #main -->

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

    </div>
</template>

<script>
import UserRegistrationService from '@/services/UserRegistrationService';

export default {
    name: "RegistrationView",
    data() {
        return {
            registrationRequest: { username: "", password: "", type: "" },
            message: ""
        };
    },
    methods: {
        registerUser(event) {
            event.preventDefault();
            if (this.registrationRequest.type.toLowerCase() === 'parent') {
                UserRegistrationService.create(this.registrationRequest)
                    .then(response => {
                        this.message = response.data;
                        this.$util.notify("Successfully registered as a parent!", "success");
                        this.$util.wait(1000).then(() => {
                            this.$router.push({ name: "ParentView" });
                        })

                    })
                    .catch(error => {
                        this.handleRegistrationError(error);
                    });
            } else {
                console.log(this.registrationRequest);
                UserRegistrationService.create(this.registrationRequest)
                    .then(response => {
                        this.message = response.data;
                        this.$util.notify("Successfully registered as an institute!", "success");
                        this.$util.wait(1000).then(() => {
                            this.$router.push({ name: "InstituteView" });
                        })

                    })
                    .catch(error => {
                        this.handleRegistrationError(error);
                    });
            }
        },

        handleRegistrationError(error) {
            this.registrationRequest.username = "";
            this.registrationRequest.password = "";
            this.registrationRequest.userType = "";
            console.log(error.response);
            this.$util.notify("Registration failed. Please try again.", "error");
        }

    },
    mounted() {
        this.message = "";
    }
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
