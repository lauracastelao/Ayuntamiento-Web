<template>
  <section class="h-100 bg-dark">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample photo"
                  class="img-fluid"
                  style="
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                  "
                />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Registro</h3>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1m"
                          >Nombre</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1n"
                          >Apellido</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example8"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example8"
                      >Dirección</label
                    >
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <select class="select">
                        <option value="1">Provincia</option>
                        <option value="2">Asturias</option>
                        <option value="3">Galicia</option>
                        <option value="4">Cantabria</option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-4">
                      <select class="select">
                        <option value="1">Ciudad</option>
                        <option value="2">Gijón</option>
                        <option value="3">Oviedo</option>
                        <option value="4">Avilés</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example9"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example9"
                      >Nº tarjeta ciudadana</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example90"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example90"
                      >Pincode</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example99"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example99"
                      >Course</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example97"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example97"
                      >Email ID</label
                    >
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-light btn-lg">
                      Reset all
                    </button>
                    <button type="button" class="btn btn-warning btn-lg ms-2">
                      Submit form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
  }),
  methods: {
    register() {
      auth.register(this.email, this.password).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.card-registration .select-arrow {
  top: 13px;
}
</style>
