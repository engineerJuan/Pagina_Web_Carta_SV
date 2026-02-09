/* LÓGICA DE NAVEGACIÓN Y BOTÓN INTERACTIVO */
const bNo = document.getElementById('no');
const bSi = document.getElementById('si');
const music = document.getElementById('bgMusic');

// Función para abrir el sobre y CAMBIAR FONDO
function openCard() {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    
    // Agrega la foto de fondo al abrir
    document.body.classList.add('con-fondo');
}

// Función para mostrar la pregunta final
function showQuiz() {
    document.getElementById('message').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

// Función para que el botón No escape aleatoriamente
const move = () => {
    bNo.style.position = 'fixed';

    const x = Math.random() * (window.innerWidth - bNo.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - bNo.offsetHeight - 20);

    bNo.style.left = x + 'px';
    bNo.style.top = y + 'px';
};

// Eventos para el botón que huye
bNo.addEventListener('mouseenter', move);
bNo.addEventListener('touchstart', (e) => { e.preventDefault(); move(); });

// Función al aceptar: oculta todo, muestra respuesta y activa música
bSi.addEventListener('click', () => {
    document.getElementById('quiz').style.display = 'none';
    bNo.style.display = 'none';

    document.getElementById('v-si').style.display = 'block';
    music.play().catch(e => console.log("Música activada")); 
});