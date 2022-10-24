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

<!-- <template>
  <div>
    <h1>Página de Contacto</h1>
    <form name="form" id="form" v-on:submit.prevent="procesar();">
      <p>dddddd</p>
      <p>Hoa</p>
      <p>
        Nombre: <input type="text" name="name" placeholder="Nombre" class="form-control" v-model="letters.name" autocomplete="=off" />
        
      
        E-Mail: <input type="text" name="email" placeholder="E-Mail" class="form-control" v-model="letters.email" />
      </p>
      
      <hr />
      <input type="submit" value="Enviar" title="Enviar" class="btn btn-primary" />
    </form>
   
  </div>
</template>

<script>
    
    import { Global } from "../Global";
    import axios from "axios";
    export default {
        name: 'Datas',
        data() {
            return {
                submited: false,
                letters: {
                    name: '',
                    email: ''
                }
            }
        },
        methods: {
            procesar() {
              this.submited = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return false;
                }
                let config = {
                  headers: {
                    token: Global.token,
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                };
                let parametros =
                      "name=" +
                      this.letters.name +
                      "&email=" +
                      this.letters.email;
                
                  axios.post(Global.url + 'letter', parametros, config).then( (response) => {
                  if(response.status==400)
                  {
                    this.flashMessage.show({satus: 'success', title: 'Mi aplicación', message: 'Hemos recibido tu mensaje exitosamente. Nos pondremos en contacto contigo a la brevedad.'});
                    document.form.reset();
                    this.$router.push('/data?s=1');
                  }
                }

                )
                .catch( (error) => {
                  console.log(error);
                }

                );

            }
        },
        

    }
</script> -->

