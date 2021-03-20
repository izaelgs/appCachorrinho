var vapp = new Vue({
    el: '#app',
    data: {
        animal: {
            tipo: '',
            nome: '',
            tutor: '',
            sexo: '',
            esterelizado: '',
            alergia: '',
            vacina: '',
            pulga: '',
            porte: ''
        },
        animais: [],
        pessoas: []
    },
    mounted: function() {
        this.listarAnimais();
    },
    methods: {
        resetAnimal: function() {
            this.animal = {
                tipo: '',
                nome: '',
                tutor: '',
                sexo: '',
                esterelizado: '',
                alergia: '',
                vacina: '',
                pulga: '',
                porte: ''
            };
        },
        addAnimal: function() {
            var _this = this;
            dataBase.tbAnimais.add(_this.animal).then(function(retorno) {
                alert('animal Cadastrada');
                _this.listarAnimais();
            });
            this.resetAnimais
        },
        delAnimal: function(animal) {
            var _this = this;
            dataBase.tbAnimais.delete(animal.id).then(function(retorno) {
                alert('esse ficou fudido');
                _this.listarAnimais();
            });
        },
        listarAnimais: function() {
            var _this = this;
            dataBase.tbAnimais.toArray().then(function(retorno) {
                _this.animais = retorno;
            });
            dataBase.tbPessoas.toArray().then(function(retorno) {
                _this.pessoas = retorno;
            });
            console.log(dataBase.tbAnimais.toArray());
        }
    }
});