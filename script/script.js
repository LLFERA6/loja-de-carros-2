

function salvarCarro(event){ 
    //impedir de recarga da pagina
    event.preventDefault();w
    let titulo = document.getElementById('title').value;
   
    let preco = document.getElementById('preco').value;
    let descricao = document.getElementById
     ('descricao').value;
    let marca = document.getElementById('marca').value;
    let kilometragem = document.getElementById
     ('kilometragem').value;
    let modelo = document.getElementById('modelo').value;
    let data_compra = document.getElementById
    ('data_compra').value;

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id: "Não selecionado";

     let carro ={ 
      id: Date.now(),
        titulo,
        preco,
        descricao,
        marca,
        modelo, 
        kilometragem,
        data_compra,     
        cambio  
  };
   let carros = JSON.parse(localStorage.getItem("carros")) || [];
   [];
   carros.push(carro);
   localStorage.setItem("carros", JSON.stringify(carros));
   
   adicionarNaTela(carro);

   document.querySelector("form").reset();


}

function adicionarNaTela(carro){
   let lista = document.getElementById('listarCarros');
   let card = document.createElement('div')
   card.classList.add('card');
   
   card.innerHTML = `
   <img src = 'https://picsum.photos/250/150?random = ${Math.random()}' width='100%'>
   
   <h3>${carro.titulo}</h3>
   <p><strong>Preço:</strong> R$ ${carro.preco}</p>
   <p><strong>Marca:</strong> R$ ${carro.marca}</p>
   <p><strong>Modelo:</strong> R$ ${carro.modelo}</p>
   <p><strong>Câmbio:</strong> R$ ${carro.cambio}</p>
   
   <button onclick="excluirCarro(${carro.id}, this)">Excluir</button>
   `;
   
   
   lista.appendChild(card);

   
}

window.onload = function () {
   let carros = JSON.parse(localStorage.getItem("carros")) || [];
   
   carros.forEach(carro => {
      adicionarNaTela(carro);
   })
      
   
}

function excluirCarro(id, botao) {
   let carros = JSON.parse(localStorage.getItem("carros")) || [];

   carros = carros .filter(carro => Number(carro.id) !== Number(id));

   localStorage.setItem("carros", JSON.stringify(carros));
    
   let card = botao.parentElement;
   card.remove();




}
