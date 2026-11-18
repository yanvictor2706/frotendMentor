const botaoTrocar = document.getElementById('btn-trocar');
const nomePlano = document.getElementById('nome-plano');
const precoPlano = document.getElementById('preco-plano');
const botaoPagar = document.getElementById('btn-pagar');
const botaoCancelar = document.getElementById('btn-cancelar');

let planoAnual = true;


botaoTrocar.addEventListener('click', function() {
  if (planoAnual) {
    nomePlano.textContent = 'Monthly Plan';
    precoPlano.textContent = '$9.99/month';
    planoAnual = false;
  } else {
    nomePlano.textContent = 'Annual Plan';
    precoPlano.textContent = '$59.99/year';
    planoAnual = true;
  }
});


botaoPagar.addEventListener('click', function() {
  alert('Indo para o pagamento do ' + nomePlano.textContent);
});


botaoCancelar.addEventListener('click', function() {
  alert('Pedido cancelado!');
});
