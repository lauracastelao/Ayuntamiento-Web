<script>

import LetterService from '../services/LetterService';
export default {
    name: 'Letters',
    data(){
        return {
            letters: []
        }
    },
    methods: {
        getLetters(){
            LetterService.getLetters().then((response) => {
            this.letters = response.data;   
            });
        }
    },
    created() {
        this.getLetters();
    }
}
</script>

<template>
    <h1>Preguntas frecuentes</h1>
        <div class="container-card">
            <div class="all-card">
            <div v-for="letter in letters" v-bind:key="letter.id" class="card" style="width: 14rem;">
                    <div class="card-body">
                        <p class="card-text">{{letter.email}} - {{letter.name}}</p>
                    </div>
            </div>
            </div>
        </div>
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                    <div class="card-body">
                        <p class="card-text">Pregunta frecuente</p>
                    </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                    <div class="card-body">
                        <p class="card-text">Pregunta frecuente</p>
                    </div>
            </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                    <div class="card-body">
                        <p class="card-text">Pregunta frecuente</p>
                    </div>
            </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                    <div class="card-body">
                        <p class="card-text">Pregunta frecuente</p>
                    </div>
            </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                    <div class="card-body">
                        <p class="card-text">Pregunta frecuente</p>
                    </div>
            </div>
            </div>
            </div>
            <h1>EXPLORE</h1>
        <!-- <div class="container-card">
            
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            </div>
        </div> -->
    <!-- </div> -->
</template>

<style lang="css" scoped>
.h1, h1 {
    text-align: center;
}
.card-img-top {
    border: 5px solid #CE98E8;
}

.card {
    border: none;
    display: flex;
    justify-content: center;
    width: 10vw;
    margin: 2vw;
}

.card-body {
    display: flex;
    justify-content: center;
}

.container-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.all-card {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

}
</style>