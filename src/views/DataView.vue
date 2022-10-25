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
