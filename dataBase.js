var dataBase = new Dexie('baseDependentes');
dataBase.version(1).stores({
    tbPessoas: '++id, nome',
    tbAnimais: '++id, nome, tutor, espécie'
});