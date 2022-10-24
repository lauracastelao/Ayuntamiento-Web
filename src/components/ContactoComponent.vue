<template>
  <div>
    <div class="form-group">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="terms"
          value="yes"
          v-model="form.terms"
        />
        <label class="form-check-label" for="inlineCheckbox3"
          >Agree to Terms & Conditions</label
        >
      </div>
    </div>
    <h2>Contact US</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Your name"
          v-model="form.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="form.email"
        />
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactoComponent",
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:8080/api/letters", this.form)
        .then((res) => {
          //Perform Success Action
        })
        .catch((error) => {
          // error.response.status Check status code
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>
