<template>
  <div style="margin: 0 auto; width: 80%">
    <Panel header="CRUD 4SD">
      <Menubar :model="items" />
      <br />
      <DataTable :value="personas" :paginator="true" :rows="10">
        <Column field="nombre" header="Nombre"></Column>
        <Column field="apellido" header="Apellido"></Column>
        <Column field="direccion" header="Dirección"></Column>
        <Column field="telefono" header="Teléfono"></Column>
      </DataTable>
    </Panel>
    <Dialog header="Crear Persona" :visible.sync="displayModal" :modal="true">
      <span class="p-float-label">
        <InputText id="nombre" type="text" v-model="persona.nombre" style="width: 100%" />
        <label for="nombre">Nombre</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="apellido" type="text" v-model="letter.email" style="width: 100%" />
        <label for="apellido">Apellido</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="direccion" type="text" v-model="letter.name" style="width: 100%" />
        <label for="direccion">Dirección</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="telefono" type="text" v-model="letter.id" style="width: 100%" />
        <label for="telefono">Teléfono</label>
      </span>
      <template #footer>
        <Button label="Guardar" icon="pi pi-check" @click="save" />
        <Button label="Cancelar" icon="pi pi-times" @click="closeModal" class="p-button-secondary" />
      </template>
    </Dialog>
  </div>
</template>

<script>
import LetterService from "../service/LetterService";
export default {
  name: "CrudApp",
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
          }
        },
        {
          label: "Editar",
          icon: "pi pi-fw pi-pencil"
        },
        {
          label: "Eliminar",
          icon: "pi pi-fw pi-trash"
        },
        {
          label: "Refrescar",
          icon: "pi pi-fw pi-refresh",
          command: () => {
            this.getAll();
          }
        }
      ],
      displayModal: false
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
      this.letterService.getAll().then(data => {
        this.letters = data.data;
      });
    },
    save() {
      this.letterService.save(this.letter).then(data => {
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
    }
  }
};
</script>

<style>
</style>