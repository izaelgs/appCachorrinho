var dataBase = new Dexie('baseDependentes');
dataBase.version(1).stores({
    tbPessoas: '++id, nome, segundoNome, telefone, sexo, cartao, cpf',
    tbAnimais: '++id, tipo, nome, tutor, sexo, esterelizado, alergia, vacina, pulga, porte'
});