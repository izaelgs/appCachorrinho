var vapp = new Vue({
    el: '#app',
    data: {
        pessoa: {
            nome: null,
            segundoNome: null,
            telefone: null,
            sexo: null,
            cartao: null,
            cpf: null
        },
        pessoas: []
    },
    mounted: function() {
        this.listarPessoas();
    },
    methods: {
        resetPessoa: function() {

        },
        addPessoas: function() {
            var _this = this;
            dataBase.tbPessoas.add(_this.pessoa).then(function(retorno) {
                alert('pessoa Cadastrada');
                _this.listarPessoas();
            });
        },
        banirPessoa: function(pessoa) {
            var _this = this;
            dataBase.tbPessoas.delete(pessoa.id).then(function(retorno) {
                alert('esse ficou fudido');
                _this.listarPessoas();
            });
        },
        selectPessoa: function(pessoa) {
            this.pessoa = pessoa;
        },
        listarPessoas: function() {
            var _this = this;
            dataBase.tbPessoas.toArray().then(function(retorno) {
                _this.pessoas = retorno;
            })
        }
    }
})