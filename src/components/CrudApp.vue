<template>
  <div style="margin: 0 auto; width: 80%">
    <p>
      dde
    </p>
    <p>
      dde
    </p>
    <Panel header="CRUD 4SD">
      <Menubar :model="items" />
      <br />
      <DataTable :value="letters" :paginator="true" :rows="10">
        <Column field="nombre" header="Nombre"></Column>
        <Column field="apellido" header="Apellido"></Column>
        <Column field="direccion" header="Dirección"></Column>
        <Column field="telefono" header="Teléfono"></Column>
      </DataTable>
    </Panel>
    <Dialog header="Crear pregunta" :visible.sync="displayModal" :modal="true">
      <span class="p-float-label">
        <InputText id="nombre" type="text" v-model="letter.id" style="width: 100%" />
        <label for="nombre">Pregunta</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="apellido" type="text" v-model="letter.email" style="width: 100%" />
        <label for="apellido">Respuesta</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="direccion" type="text" v-model="letter.name" style="width: 100%" />
        <label for="direccion">Comentario </label>
      </span>
      <br />

      <template #footer>
        <Button label="Guardar" icon="pi pi-check" @click="save" />
        <Button label="Cancelar" icon="pi pi-times" @click="closeModal" class="p-button-secondary" />
      </template>
    </Dialog>
  </div>
</template>

<!-- <script>
import LetterService from "../service/LetterService";
import axios from "axios";
const API = "https://localhost:8080/api/letters";
export default {
  name: "CrudApp",
  get() {
    return axios.get(API);
  },
  create(todo) {
    return axios.post(API, todo);
  },
  methods: {
    async getTodos() {
      // Este paso funciona,recoge el objeto del json en consola
      let response = await axios.get(
       API
      );
      console.log(response.data);
    },
    async modifyPost() {
      let post = {
        title: "foo",
        body: "bar",
        userId: 1,
      };
      let response = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        post
      );
      console.log(response.data);
    },
  },
  created() {
    this.getTodos();
    this.modifyPost();
  },

  data() {
    return {
      letters: null,
      letter: {
        id: null,
        email: null,
        name: null,
      },
      items: [
        {
          label: "Nuevo",
          icon: "pi pi-fw pi-plus",
          command: () => {
            this.showSaveModal();
          },
        },
        {
          label: "Editar",
          icon: "pi pi-fw pi-pencil",
        },
        {
          label: "Eliminar",
          icon: "pi pi-fw pi-trash",
        },
        {
          label: "Refrescar",
          icon: "pi pi-fw pi-refresh",
          command: () => {
            this.getAll();
          },
        },
      ],
      displayModal: false,
    };
  },
  letterService: null,
  created() {
    this.letterService = new LetterService();
  },
  mounted() {
    this.getAll();
  },
  methods: {
    showSaveModal() {
      this.displayModal = true;
    },
    getAll() {
      this.letterService.getAll().then((data) => {
        this.letters = data.data;
      });
    },
    save() {
      this.letterService.save(this.letter).then((data) => {
        if (data.status === 200) {
          this.displayModal = false;
          this.letter = {
            id: null,
            email: null,
            name: null,
          };
          this.getAll();
        }
      });
    },
    closeModal() {
      this.displayModal = false;
    },
  },
};
</script>

<style></style> --> 
<!-- <script setup>
import axios from "axios";
import { ref, reactive, onBeforeMount } from "vue";

const name = ref("Lau");

let letters = ref([]);

const newLetter = reactive({
  name: "",
  email: "",
});

async function getData() {
  const url = "http://localhost:8080/api/letters";
  const resp = await axios.get(url);
  const json = await resp.data();
  console.log(json);

  letters.value = json;
}
 async function addLetter() {
  const url = "http://localhost:8080/api/letters";
  const response = await axios.post(url, newLetter);
  const json = await response.data;
  console.log(json);
   await getData();
}

onBeforeMount(async () => {});
console.log("Funciona");
await getData();
</script>

<template>
  
  <div class="container test-component">
    <h1>el crud</h1>
    <span> {{ name }}</span>
    <ul v-for="(letter, index) in letters" :key="index">
      <li>{{ letter.id }}: {{ `${letter.name} / ${letter.email}`}}</li>
    </ul>
  
     <div class="d-flex justify-content-center create-form">
      <input v-model="newLetter.name" type="text" name="name" id="name" class="m-1 w-75 form-control"/>
      <input v-model="newLetter.email" type="text" name="email" id="email" class="m-1 w-75 form-control"/>
    </div> 
  </div>

</template>


<style scoped></style> -->


<!-- <script setup>

</script> --> --> -->
