function Produdo (id, nome) {
  this.id = id;
  this.nome = nome;
}
function Imposto (id, nome, icms) {
  this.icms = icms;
  Produdo.call(this, id, nome);
}
function Item (id, nome, categoria, desconto, valor, icms) {
  this.categoria = categoria;
  this.desconto = desconto;
  this.valor = valor;
  Imposto.call(this, id, nome, icms);
}

const item1 = new Item ('A003', 'Caneta Bic', 'Aventura', 0, 50, 17);
const item2 = new Item ('A003', 'Caderno', 'Aventura', 0, 50, 17);
const item3 = new Item ('A003', 'Livro Duna', 'Aventura', 10, 50, 17);


console.log(item3);