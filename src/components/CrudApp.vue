<template>
<p>Jo</p>
<p>Jo</p>
<p>Jo</p>
<p>Jo</p>
<p>Jo</p>
<p>Jo</p>

<div>
        <DataTable :value="customers" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="company" header="Company"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
            </template>
        </DataTable>    
	</div>

</template>

<script>
import Letterservice from '../service/LetterService';
export default {

    name: 'CrudApp',
    data(){
      return{
        letters: null
      }
       },
      letterService: null,
      created(){
        this.letterService= new LetterService();
      },
     mounted() {
        this.letterService.getAll().then(data=>{
            console.log(data);
        })
     },
    }

</script>

<style lang="css" scoped></style>
