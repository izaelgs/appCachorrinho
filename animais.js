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
    },
    mounted: function() {
        this.listarAnimais();
        alert('deu certo');
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
            }

        },
        addanimal: function() {
            var _this = this;
            dataBase.tbAnimais.add(_this.animal).then(function(retorno) {
                alert('animal Cadastrada');
                _this.listarAnimais();
            });
            this.resetAnimais
        },
        listarAnimais: function() {
            var _this = this;
            dataBase.tbAnimais.toArray().then(function(retorno) {
                _this.animais = retorno;
            })
        }
    }
});