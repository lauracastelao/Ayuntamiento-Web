<script>
import LetterService from "../services/LetterService";
import { reactive } from "vue";
import axios from "axios";

const newLetter = reactive({
  name: "",
  email: "",
});

export default {
  name: "Letters",
  data() {
    return {
      letters: [],
      form: {
        name: "",
        email: "",
      },
    };
  },

  methods: {
    getLetters() {
      LetterService.getLetters().then((response) => {
        this.letters = response.data;
      });
    },
  },
  created() {
    this.getLetters();
    axios.delete("https://localhost:8080/api/letters");
  },

  deleteLetter() {
    axios
      .delete("http://localhost:8080/api/letters")
      .then((res) => {})
      .catch((error) => {})
      .finally(() => {});
  },
};
</script>

<template>
  <h1>Preguntas frecuentes</h1>
  <form v-on:submit.prevent="deleteLetter">
    <div class="container d-flex justify-content-center mt-100 mb-100">
      <div class="box">
        <div class="post-heading">
          <div class="float-left image">
            <img
              src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
              class="img-circle avatar"
              alt="user profile image"
            />
          </div>
          <div class="float-left meta">
            <div class="title h5">
              <a href="#"><b>Ayuntamiento</b></a>
              panel de control
            </div>
            <h6 class="text-muted time">Hace 30 días</h6>
          </div>
        </div>

        <div class="card w-100">
          <div class="carta">
            <div v-for="letter in letters" v-bind:key="letter.id">
              <strong>
                <p class="card-text">{{ letter.email }}</p>
              </strong>
              <p>{{ letter.name }}</p>
              <button class="btn btn-dark" @click="editUser(user)">Editar</button>
         
              <b-button class="btn btn-danger" @click="deleteLetter"
                >Eliminar</b-button
              >
            </div>

     
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="css" scoped>
.post-heading {
  height: 95px;
  padding: 20px 15px;
  border: none;
  border-color: none;
}

.post-heading .avatar {
  width: 60px;
  height: 60px;
  display: block;
  margin-right: 15px;
}

.post-heading .meta .title {
  margin-bottom: 0;
}

.post-heading .meta .title a {
  color: black;
}

.post-heading .meta .time {
  margin-top: 8px;
  color: rgb(135, 45, 45);
}

.box {
  margin: 20px;
  padding: 20px;
  width: 100%;
  min-height: 1460px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  gap: 60px;
}

@media (max-width: 600px) {
  .container {
    width: 85%;
    display: block;
    display: flex;
    flex-direction: column;
  }

  .box {
    width: 100%;
    margin-bottom: 4%;
  }
}

.carta {
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.btn-danger{
margin-left: 15px;
}

</style>
