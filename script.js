document.addEventListener('DOMContentLoaded', () => {
    // Accesibilidad: Modo Contraste
    const btnContrast = document.getElementById('btn-contrast');
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Accesibilidad: Tamaño de Letra
    let currentSize = 16;
    const btnInc = document.getElementById('btn-text-inc');
    const btnDec = document.getElementById('btn-text-dec');

    btnInc.addEventListener('click', () => {
        if (currentSize < 24) {
            currentSize += 2;
            document.documentElement.style.setProperty('--font-scale', `${currentSize}px`);
        }
    });

    btnDec.addEventListener('click', () => {
        if (currentSize > 12) {
            currentSize -= 2;
            document.documentElement.style.setProperty('--font-scale', `${currentSize}px`);
        }
    });

    // Creador de Rutina Interactivo
    const form = document.getElementById('routine-builder');
    const outputBox = document.getElementById('routine-output');
    const routineList = document.getElementById('routine-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const f1 = document.getElementById('fase1').value;
        const f2 = document.getElementById('fase2').value;
        const f3 = document.getElementById('fase3').value;

        routineList.innerHTML = `
            <li><strong>Fase 1 (Movilidad):</strong> ${f1}</li>
            <li><strong>Fase 2 (Activación):</strong> ${f2}</li>
            <li><strong>Fase 3 (Estiramiento):</strong> ${f3}</li>
        `;
        
        outputBox.hidden = false;
        outputBox.scrollIntoView({ behavior: 'smooth' });
    });
});

// Autoevaluación
function checkAnswer(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    if (isCorrect) {
        feedback.textContent = '¡Correcto! En la entrada en calor se utilizan estiramientos dinámicos para mantener el pulso y preparar la elasticidad muscular sin enfriar el cuerpo.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrecto. Los estiramientos estáticos prolongados se recomiendan para la vuelta a la calma. En el calentamiento usamos estiramientos dinámicos.';
        feedback.style.color = 'red';
    }
}