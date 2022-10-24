<!-- <template>
  
    <h1>Hola</h1>
    <h1>Hola</h1>
    <h1>Hola</h1>
    <h1>Hola</h1>
    
    <p>User ID: {{result.name}}</p>
    <p>Title: {{result.email}}</p>

    

 

</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    result: null
  }),
  created() {
    let post = {
    name: 'guadalupe',
    email: 'flordeguadalupe@email.com'
    
  };
    axios.post("http://localhost:8080/api/letters", post).then((result) => {
      console.log(result);
    })
  }
};
</script>

<style scoped lang="scss">
</style> -->

<!-- tutorial cesar -->

<template>
  <div>
    <h1>Página de Contacto</h1>
    <form name="form" id="form" v-on:submit.prevent="procesar()">
      <p>Prueba</p>
      <p>Prueba</p>
      <p>Prueba</p>
      <p>Prueba</p>
      <p>
        Nombre:
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          class="form-control"
          v-model="contacto.nombre"
          autocomplete="=off"
        />

        E-Mail:
        <input
          type="text"
          name="correo"
          placeholder="E-Mail"
          class="form-control"
          v-model="contacto.email"
        />
      </p>

      <hr />
      <input
        type="submit"
        value="Enviar"
        title="Enviar"
        class="btn btn-primary"
      />
    </form>
  </div>
</template>

<script>
import {required, minLenght} from 'vuelidate/lib/validators';
export default {
  name: "DataView",
  data() {
    return {
      contacto: {
        nombre: "",
        correo: "",
      },
    };
  },
  methods: {
    procesar() {
      // alert(this.contacto.nombre);
    }
  },
validations: 
{
 contacto: {
  nombre: {
    required,
    minLenght: minLenght (2)
  }
 } 
}


};
</script>

<style scoped></style>
