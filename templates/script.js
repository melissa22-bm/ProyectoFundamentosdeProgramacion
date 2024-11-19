// Carrusel

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const carousel = document.querySelector('.carousel-container');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Consejos

function mostrarConsejo(numero) {
    const consejos = {
        1: "💡 Ahorra primero: Al recibir tu salario, separa al menos el 20% para ahorros antes de gastar.",
        2: "💡 Evita deudas innecesarias: Compra sólo lo que puedes pagar al contado.",
        3: "💡 Invierte en educación: Aprende sobre finanzas para tomar mejores decisiones."
    };
    const resultado = document.getElementById('consejo-resultado');
    resultado.innerHTML = `<p>${consejos[numero]}</p>`;
}

function calcularAhorros() {
    // Obtener los valores ingresados por el usuario
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savingsGoal = parseFloat(document.getElementById('savings-goal').value);

    const resultDiv = document.getElementById('result');

    // Validar los datos
    if (isNaN(income) || isNaN(expenses) || isNaN(savingsGoal)) {
        resultDiv.innerHTML = `<p style="color: red;">Por favor, ingresa valores válidos.</p>`;
        return;
    }

    if (income <= 0 || expenses <= 0 || savingsGoal <= 0) {
        resultDiv.innerHTML = `<p style="color: red;">Los valores deben ser mayores a cero.</p>`;
        return;
    }

    // Calcular ahorros mensuales
    const monthlySavings = income - expenses;

    if (monthlySavings <= 0) {
        resultDiv.innerHTML = `<p style="color: red;">Tus gastos superan o igualan tus ingresos. Considera ajustar tus hábitos.</p>`;
        return;
    }

    // Calcular el tiempo necesario para alcanzar la meta
    const monthsNeeded = Math.ceil(savingsGoal / monthlySavings);

    // Mostrar los resultados
    resultDiv.innerHTML = `
        <p>🌟 Ahorros mensuales: <strong>S/ ${monthlySavings.toFixed(2)}</strong></p>
        <p>⏳ Tiempo necesario para alcanzar la meta: <strong>${monthsNeeded} meses</strong></p>
    `;
}