//Comentarios
// Complicación a la hora de entender la estructura del feedback
// El no entendimiento del uso de los signos => 
// Complicaciones varias explicadas en la memoria.



const music = document.getElementById("bg-music");
const questions = [
  {
    pregunta:
      "¿Quién es el piloto con más campeonatos del mundo en la historia de la Fórmula 1?",
    respuestas: [
      { text: "Lewis Hamilton", correcta: false },
      { text: "Sebastian Vettel", correcta: false },
      { text: "Juan Manuel Fangio", correcta: false },
      { text: "Michael Schumacher", correcta: true },
    ],
    explicacion:
      " Tiene 7 campeonatos del mundo (empatado con Hamilton), siendo uno de los más exitosos de la historia.",
    imagen: "img/pregunta1.jpg",
  },
  {
    pregunta: "¿Qué escudería ha ganado más campeonatos de constructores?",
    respuestas: [
      { text: "Mercedes", correcta: false },
      { text: "Ferrari", correcta: true },
      { text: "McLaren", correcta: false },
      { text: "Red Bull Racing", correcta: false },
    ],
    explicacion:
      "Ferrari es la escudería más antigua y con más títulos en la Fórmula 1. ",
    imagen: "img/pregunta2.jpg",
  },
  {
    pregunta: "¿En qué año debutó la Fórmula 1 como campeonato mundial?",
    respuestas: [
      { text: "1960", correcta: false },
      { text: "1955", correcta: false },
      { text: "1950", correcta: true },
      { text: "1945", correcta: false },
    ],

    explicacion:
      "El primer campeonato oficial de Fórmula 1 se celebró en 1950. ",
    imagen: "img/pregunta3.jpg",
  },
  {
    pregunta: "¿Qué piloto es conocido como “El Kaiser”?",
    respuestas: [
      { text: "Michael Schumacher", correcta: true },
      { text: "Sebastian Vettel", correcta: false },
      { text: "Nico Rosberg", correcta: false },
      { text: "Fernando Alonso", correcta: false },
    ],
    explicacion:
      "Es un apodo famoso del piloto alemán por su dominio en la F1. ",
    imagen: "img/pregunta1.jpg",
  },
  {
    pregunta:
      "¿Cuál es el circuito más largo del calendario actual de Fórmula 1?",
    respuestas: [
      { text: "Monza", correcta: false },
      { text: "Silverstone", correcta: false },
      { text: "Spa-Francorchamps", correcta: true },
      { text: "Suzuka", correcta: false },
    ],
    explicacion:
      "Es el circuito más largo del calendario moderno con más de 7 km. ",
    imagen: "img/pregunta5.jpg",
  },
  {
    pregunta: "¿Qué país alberga el Gran Premio de Mónaco?",
    respuestas: [
      { text: "Italia", correcta: false },
      { text: "Mónaco", correcta: true },
      { text: "España", correcta: false },
      { text: "Francia", correcta: false },
    ],
    explicacion:
      "Se corre en el principado de Mónaco, uno de los circuitos más famosos.",
    imagen: "img/pregunta6.jpg",
  },
  {
    pregunta:
      "¿Qué escudería utiliza el color rojo como principal seña de identidad?",
    respuestas: [
      { text: "McLaren", correcta: false },
      { text: "Mercedes", correcta: false },
      { text: "Alpine", correcta: false },
      { text: "Ferrari", correcta: true },
    ],
    explicacion: "El rojo es el color histórico de Ferrari en competición. ",
    imagen: "img/pregunta2.jpg",
  },
  {
    pregunta: "¿Quién fue el primer campeón del mundo de Fórmula 1?",
    respuestas: [
      { text: "Juan Manuel Fangio", correcta: false },
      { text: "Alberto Ascari", correcta: false },
      { text: "Giuseppe Farina", correcta: true },
      { text: "Jack Brabham", correcta: false },
    ],
    explicacion: "Ganó el primer campeonato en 1950.",
    imagen: "img/pregunta8.jpg",
  },
  {
    pregunta: "¿Qué piloto español ha sido campeón del mundo de Fórmula 1?",
    respuestas: [
      { text: "Carlos Sainz", correcta: false },
      { text: "Fernando Alonso", correcta: true },
      { text: "Pedro de la Rosa", correcta: false },
      { text: "Marc Gené", correcta: false },
    ],
    explicacion: "Ganó dos campeonatos del mundo en 2005 y 2006. ",
    imagen: "img/pregunta9.jpg",
  },
  {
    pregunta: "¿Qué escudería tiene como sede Maranello?",
    respuestas: [
      { text: "Ferrari", correcta: true },
      { text: "Lamborghini", correcta: false },
      { text: "Red Bull", correcta: false },
      { text: "Mercedes", correcta: false },
    ],
    explicacion: "Maranello es la sede histórica de Ferrari en Italia.",
    imagen: "img/pregunta2.jpg",
  },
  {
    pregunta: "¿Qué significa DRS en Fórmula 1?",
    respuestas: [
      { text: "Dynamic Racing System", correcta: false },
      { text: "Drag Reduction System", correcta: true },
      { text: "Drive Racing Speed", correcta: false },
      { text: "Downforce Regulation System", correcta: false },
    ],
    explicacion:
      "Es un sistema que reduce la resistencia del aire para facilitar adelantamientos.",
    imagen: "img/pregunta11.jpg",
  },
  {
    pregunta: "¿Cuántos puntos recibe el ganador de una carrera actualmente?",
    respuestas: [
      { text: "18", correcta: false },
      { text: "20", correcta: false },
      { text: "25", correcta: true },
      { text: "30", correcta: false },
    ],
    explicacion: "El sistema actual otorga 25 puntos al ganador.",
    imagen: "img/pregunta12.jpg",
  },
  {
    pregunta: "¿Qué piloto tiene más poles en la historia de la Fórmula 1?",
    respuestas: [
      { text: "Ayrton Senna", correcta: false },
      { text: "Lewis Hamilton", correcta: true },
      { text: "Michael Schumacher", correcta: false },
      { text: "Max Verstappen", correcta: false },
    ],
    explicacion: "Hamilton es el piloto con más poles position.",
    imagen: "img/pregunta13.jpg",
  },
  {
    pregunta: "¿Qué circuito es conocido como “Temple of Speed”?",
    respuestas: [
      { text: "Silverstone", correcta: false },
      { text: "Monza", correcta: true },
      { text: "Spa", correcta: false },
      { text: "Suzuka", correcta: false },
    ],
    explicacion: "Es famoso por sus largas rectas y alta velocidad.",
    imagen: "img/pregunta14.jpg",
  },
  {
    pregunta: "¿En qué país se encuentra el circuito de Silverstone?",
    respuestas: [
      { text: "Estados Unidos", correcta: false },
      { text: "Reino Unido", correcta: true },
      { text: "Australia", correcta: false },
      { text: "Canadá", correcta: false },
    ],
    explicacion: "Silverstone es uno de los circuitos históricos británicos.",
    imagen: "img/pregunta15.jpg",
  },
  {
    pregunta:
      "¿Qué piloto brasileño es considerado una leyenda y falleció en 1994?",
    respuestas: [
      { text: "Nelson Piquet", correcta: false },
      { text: "Ayrton Senna", correcta: true },
      { text: "Rubens Barrichello", correcta: false },
      { text: "Felipe Massa", correcta: false },
    ],
    explicacion: "Fue uno de los mejores pilotos y falleció en Imola en 1994. ",
    imagen: "img/pregunta16.jpg",
  },
  {
    pregunta: "¿Qué escudería dominó la era híbrida desde 2014?",
    respuestas: [
      { text: "Ferrari", correcta: false },
      { text: "Mercedes", correcta: true },
      { text: "Red Bull", correcta: false },
      { text: "McLaren", correcta: false },
    ],
    explicacion: "Dominó con múltiples campeonatos consecutivos.",
    imagen: "img/pregunta17.jpg",
  },
  {
    pregunta:
      "¿Qué tipo de neumáticos se utilizan en condiciones de lluvia extrema?",
    respuestas: [
      { text: "Slicks", correcta: false },
      { text: "Intermedios", correcta: false },
      { text: "Full Wet", correcta: true },
      { text: "Duros", correcta: false },
    ],
    explicacion: "Son neumáticos diseñados para evacuar mucha agua.",
    imagen: "img/pregunta18.jpg",
  },
  {
    pregunta: "¿Qué piloto más joven ha ganado un Gran Premio de Fórmula 1?",
    respuestas: [
      { text: "Sebastian Vettel", correcta: false },
      { text: "Fernando Alonso", correcta: false },
      { text: "Max Verstappen", correcta: true },
      { text: "Charles Leclerc", correcta: false },
    ],
    explicacion: "Ganó su primera carrera con 18 años.",
    imagen: "img/pregunta19.jpg",
  },
  {
    pregunta:
      "¿Qué sistema de seguridad protege la cabeza del piloto en los monoplazas actuales?",
    respuestas: [
      { text: "Alerón frontal", correcta: false },
      { text: "Halo", correcta: true },
      { text: "Cockpit cerrado", correcta: false },
      { text: "DRS", correcta: false },
    ],
    explicacion: "Es una estructura de protección obligatoria desde 2018.",
    imagen: "img/pregunta20.jpg",
  },
];

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let playerName = " ";
function startQuiz() {
  const input = document.getElementById("player-name");
  playerName = input.value;

  if (playerName === "") {
    return;
  }

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Siguiente";

  music.play();

  showQuestion();
}
function showQuestion() {
  resetState();

  const feedback = document.getElementById("feedback");
  const feedbackImg = document.getElementById("feedback-img");
  const feedbackText = document.getElementById("feedback-text");

  feedback.style.display = "none";
  feedbackImg.src = "";
  feedbackText.innerText = "";

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.pregunta;

  currentQuestion.respuestas.forEach((respuesta) => {
    const button = document.createElement("button");
    button.innerHTML = respuesta.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (respuesta.correcta) {
      button.dataset.correct = "true";
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

 if (correct) {
  selectedBtn.classList.add("Correcto");
  score++;
} else {
  selectedBtn.classList.add("Incorrecto");
}
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") button.classList.add("Correcto");
  });

  const feedback = document.getElementById("feedback");
  const feedbackText = document.getElementById("feedback-text");
  const feedbackImg = document.getElementById("feedback-img");

  const currentQuestion = questions[currentQuestionIndex];

  feedbackText.innerText = currentQuestion.explicacion || "Respuesta correcta.";
  feedbackImg.src = currentQuestion.imagen || ""; 
  feedback.style.display = "block";

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();

  const feedback = document.getElementById("feedback");
  feedback.style.display = "none";

  question.innerHTML = `
    <h2>🏁 ¡Bien hecho ${playerName}!</h2>
    <p>Tu puntaje es <strong>${score}</strong> de ${questions.length}</p>
  `;

  nextButton.innerHTML = "Reiniciar";
  nextButton.style.display = "inline-block";
  nextButton.onclick = startQuiz;

  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "Volver al inicio";
  homeBtn.classList.add("btn");

  homeBtn.onclick = () => {
    window.location.href = "index.html";
  };

  question.appendChild(homeBtn);
}
startQuiz();
