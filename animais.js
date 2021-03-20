var animal = new Vue({
    el: '#app',
    data: {
        animal: {
            especie: '',
            nome: '',
            tutor: ''
        },
        animais: [],

    },
    mounted: function() {
        this.animais = JSON.parse(localStorage.getItem("vetorAnimais"));
        console.log(this.animais);
    },
    methods: {

        resetAnimal: function() {
            this.animal = {
                especie: '',
                nome: '',
                tutor: '',
            };
        },
        cadastro: function() {
            this.animais.push(this.animal);
            localStorage.setItem("vetorAnimais", JSON.stringify(this.animais));
            this.resetAnimal

        },
    }
});