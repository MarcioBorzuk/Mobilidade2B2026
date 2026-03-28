// script.js

// 1. Contador de Visitas Simples (Local Storage)
let visitas = localStorage.getItem('contagemVisitas') || 0;
visitas++;
localStorage.setItem('contagemVisitas', visitas);
if(document.getElementById('contador')) {
    document.getElementById('contador').innerText = visitas;
}

// 2. Lógica para Processar Pesquisa (na página pesquisa.html)
function enviarPesquisa() {
    const dificuldade = document.getElementById('dificuldade').value;
    alert("Obrigado pela contribuição! Os dados de " + dificuldade + " foram salvos.");
    // Aqui os alunos podem criar um gráfico futuramente
}