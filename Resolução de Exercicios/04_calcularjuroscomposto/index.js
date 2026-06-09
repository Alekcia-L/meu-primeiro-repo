const capitalInicial = 1000;
const taxaFixaDeJuros = 12.5 / 100;
const periodoDeTempo = 5;

// const valorMontante = capitalInicial * (1 + taxaFixaDeJuros) ** periodoDeTempo
const valorMontante = capitalInicial * Math.pow((1 + taxaFixaDeJuros), periodoDeTempo);

console.log(`O valor será R$ ${valorMontante}`)