var vapp = new Vue({
    el: '#ap',
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
            this.pessoa = {
                nome: null,
                segundoNome: null,
                telefone: null,
                sexo: null,
                cartao: null,
                cpf: null
            }
        },
        addPessoas: function() {
            var _this = this;
            if (_this.pessoa.id == null) {
                dataBase.tbPessoas.add(_this.pessoa).then(function(retorno) {
                    alert('pessoa Cadastrada');
                    _this.listarPessoas();
                    _this.resetPessoa()
                });
            } else {
                dataBase.tbPessoas.update(_this.pessoa.id, _this.pessoa).then(function(retorno) {
                    alert('pessoa Atualizada');
                    _this.listarPessoas();
                    _this.resetPessoa()
                });
            }
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