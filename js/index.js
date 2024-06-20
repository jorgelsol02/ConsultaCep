function consultarCep(){
    const cep = document.getElementById('cep').value.trim();
    const logradouro = document.getElementById('logradouro');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const url = 'https://viacep.com.br/ws/'+cep+'/json/'

    // Limpa os campos antes de nova busca
    logradouro.innerHTML = 'Logradouro: ';
    bairro.innerHTML = 'Bairro: ';
    cidade.innerHTML = 'Cidade: ';
    uf.innerHTML = 'UF: ';
    
    return fetch(url)
    .then(data => data.json())
    .then(json =>{
        logradouro.innerHTML='Logradouro: '+ json.logradouro +''
        bairro.innerHTML='Bairro: '+json.bairro+''
        cidade.innerHTML='Cidade: '+json.localidade+''
        uf.innerHTML='UF: '+json.uf+''
    })
    .catch (err => console.log('Erro: ', err))
}