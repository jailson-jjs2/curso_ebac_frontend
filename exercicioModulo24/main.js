function Produto(id, nome) {
  this.id = id;
  this.nome = nome;
  }
  
  function ProdutoTributavel(id, nome, imposto) {
  this.imposto = imposto;
  Produto.call(this, id, nome);
  }
  
  function Item(id, nome, categoria, desconto, valor, imposto) {
  this.categoria = categoria;
  this.desconto = desconto;
  this.valor = valor;
  ProdutoTributavel.call(this, id, nome, imposto);
  }
  
  class MaterialEscolar extends Item {
  constructor(id, nome, categoria, desconto, valor, imposto) {
  super(id, nome, categoria, desconto, valor, imposto);
  }
  }
  
  const caderno = new MaterialEscolar('A004', 'Caderno', '12 Mat', 0, 50, 17);
  const caneta = new MaterialEscolar('A003', 'Caneta Bic', '4 Cores', 0, 50, 17);
  
  console.log(caderno);
  console.log(caneta);