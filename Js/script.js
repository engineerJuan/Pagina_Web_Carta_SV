const bNo = document.getElementById('no');
const bSi = document.getElementById('si');
const envelope = document.getElementById('envelope');
const message = document.getElementById('message');
const quiz = document.getElementById('quiz');
const vSi = document.getElementById('v-si');

// Función para abrir el sobre y CAMBIAR FONDO
function openCard() {
    envelope.style.display = 'none';
    message.style.display = 'block';
    
    // Agrega la foto o clase de fondo al abrir
    document.body.classList.add('con-fondo');
}

// Función para mostrar la pregunta final
function showQuiz() {
    message.style.display = 'none';
    quiz.style.display = 'block';
}

// Función para que el botón No escape aleatoriamente
const move = () => {
    bNo.style.position = 'fixed';

    // Cálculo mejorado para evitar que se salga de los bordes
    const padding = 50;
    const x = Math.random() * (window.innerWidth - bNo.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - bNo.offsetHeight - padding);

    bNo.style.left = `${x}px`;
    bNo.style.top = `${y}px`;
};

// Eventos para el botón que huye
bNo.addEventListener('mouseenter', move);
bNo.addEventListener('touchstart', (e) => { 
    e.preventDefault(); 
    move(); 
});

// Función al aceptar
bSi.addEventListener('click', () => {
    quiz.style.display = 'none';
    bNo.style.display = 'none';
    vSi.style.display = 'block';
});

// Listener adicional para la imagen del sobre
document.getElementById('btnOpen').addEventListener('click', openCard);