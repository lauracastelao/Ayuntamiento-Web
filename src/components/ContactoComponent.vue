<template>
  <div>
    <div class="container"></div>

    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <div class="card-image">
          <h2 class="card-heading">
            Pregúntanos
            <small
              >Pregúntanos Si tu pregunta no se encuentra arriba en
              FAQ,creala</small
            >
          </h2>
        </div>
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Your name"
          v-model="form.name"
        />

        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="form.email"
        />
        <div class="form-groupss">
          <button onClick="refreshPage()" class="action-button">Submit</button>
        </div>
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

<style lang="scss" scoped>
.container {
  margin-top: 15vh;
}
.form-group {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px;
  gap: 2vh;
  padding: 0.75rem;
}

.card-image {
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 65%;
  background-image: url("https://assets.codepen.io/285131/coffee_1.jpg");
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: 0 5%;
  position: relative;
}
.card-heading {
  position: absolute;
  left: 10%;
  top: 15%;
  right: 10%;
  font-size: 1.75rem;
  font-weight: 700;
  color: #735400;
  line-height: 1.222;
  small {
    display: block;
    font-size: 0.75em;
    font-weight: 400;
    margin-top: 0.25em;
  }
}

.card-form {
  padding: 2rem 1rem 0;
}

.form-control {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
  & + .input {
    margin-top: 1.5rem;
  }
}

input #email.form-control {
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
}

.action-button {
  font: inherit;
  font-size: 1.25rem;
  padding: 1em;
  width: 100%;
  font-weight: 500;
  background-color: #6658d3;
  border-radius: 6px;
  color: #fff;
  border: 0;
  &:focus {
    outline: 0;
  }
}
</style>
