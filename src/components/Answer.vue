<template>
  <div class="container">
    <!-- code here -->
    <div class="form-group">
      <div class="card">
        <div class="card-image">
          <h2 class="card-heading">
            Pregúntanos
            <small>Si tu pregunta no se encuentra arriba en FAQ,creala</small>
          </h2>
        </div>
        <form v-on:submit.prevent="submitForm">
          <form class="card-form">
            

            <div class="input">
              <input
                type="email"
                id="email"
                class="input-field"
                v-model="form.email"
                required
              />
              <label class="input-label">Email</label>
            </div>
            <div class="input">
              <input
                type="text"
                class="input-field"
                id="name"
                v-model="form.name"
                required
              />
              <label class="input-label">Pregunta</label>
            </div>
            <div class="action">
              <button class="action-button">Enviar</button>
            </div>
          </form>
        </form>
        <div class="card-info">
          <p>
            Responderemos a tu pregunta via email
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Answer",
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
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
  background-color: #f1f3fb;
  padding: 0 2rem;
}

img {
  max-width: 100%;
  display: block;
}

// iOS Reset
input {
  appearance: none;
  border-radius: 0;
}

.card {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(#999, 0.25);
  padding: 0.75rem;
}

.container {
  margin-top: 15vh;
}
.card-image {
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 65%;
  background-image: url("https://github.com/lauracastelao/image/blob/main/question.jpg?raw=true");
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

.input {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
  & + .input {
    margin-top: 1.5rem;
  }
}

.input-label {
  color: #8597a3;
  position: absolute;
  top: 1.5rem;
  transition: 0.25s ease;
}

.input-field {
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #6658d3;
    & + .input-label {
      color: #6658d3;
      transform: translateY(-1.5rem);
    }
  }
}

.action {
  margin-top: 2rem;
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

.card-info {
  padding: 1rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #8597a3;
  a {
    display: block;
    color: #6658d3;
    text-decoration: none;
  }
}
</style>
