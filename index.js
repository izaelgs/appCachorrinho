var app = new Vue({
    el: '#app',
    data: {
        animal: {
            especie: '',
            nome: '',
            tutor: ''
        },
        animais: []
    },
    methods: {

        cadastro: function() {
            this.animais.push(this.animal);
            this.animal = {
                especie: '',
                nome: '',
                tutor: '',
            };
            console.log(animal)
        },
    }
});