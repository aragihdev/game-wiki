const musica = document.getElementById('song');
const controleVolume = document.getElementById('volumeControl');

// 1. Ao carregar a página, verifica se já existe um volume salvo
const volumeSalvo = localStorage.getItem('volumeMusica');

if (volumeSalvo !== null) {
    musica.volume = volumeSalvo;       // Aplica o volume à música
    controleVolume.value = volumeSalvo; // Ajusta a posição do slider
}

// 2. Sempre que o usuário mexer no slider, salva o novo valor
controleVolume.addEventListener('input', function() {
    const valor = this.value;
    musica.volume = valor;
    localStorage.setItem('volumeMusica', valor); // Grava no "banco de dados" do navegador
});