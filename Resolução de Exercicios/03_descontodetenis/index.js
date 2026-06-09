const precoDoTenis = 129.99;
const meuDinheiro = 80.00;

const desconto = precoDoTenis - meuDinheiro

const cupom = 100 * desconto / precoDoTenis;

console.log(`O valor do cupom de ser ${cupom} %`);


//como eu fiz
// const meuDinheiro = 80;
// const valorDoTenis = 129.99;

// const valorDoDesconto = valorDoTenis - meuDinheiro

// const desconto = ((valorDoDesconto * 100) / valorDoTenis).toFixed(2)

// console.log(`O desconto do tenis é de ${desconto}%, ficando R$ ${meuDinheiro} para pagar`)