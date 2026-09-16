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

    // Simulador de Reglas
    const form = document.getElementById('rule-checker');
    const outputBox = document.getElementById('rule-output');
    const ruleResult = document.getElementById('rule-result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedAction = document.getElementById('action-select').value;

        switch (selectedAction) {
            case 'pasos':
                ruleResult.innerHTML = '⚠️ <strong>Violación de Pasos:</strong> El jugador no puede dar más de dos pasos sin driblear. Posesión para el equipo contrario.';
                break;
            case 'tiro3':
                ruleResult.innerHTML = '🏀 <strong>¡Jugada Válida!</strong> Al lanzar por fuera de la línea perimetral, la canasta suma 3 puntos.';
                break;
            case 'zona3':
                ruleResult.innerHTML = '⚠️ <strong>Violación de 3 Segundos:</strong> Un atacante no puede permanecer más de 3 segundos dentro de la zona restringida (pintura).';
                break;
            case 'falta5':
                ruleResult.innerHTML = '🛑 <strong>Sanción por Faltas:</strong> Al acumular la quinta falta personal, el jugador queda eliminado del partido.';
                break;
            default:
                ruleResult.textContent = 'Selecciona una jugada válida.';
        }
        
        outputBox.hidden = false;
    });
});

// Autoevaluación
function checkQuiz(selectedOption) {
    const feedback = document.getElementById('quiz-feedback');
    if (selectedOption === 3) {
        feedback.textContent = '¡Correcto! Cada equipo tiene derecho a 3 tiempos muertos (de 60 segundos cada uno) durante la segunda mitad del partido (y 2 en la primera mitad).';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrecto. Recuerda que son 2 tiempos muertos en la primera mitad y 3 en la segunda mitad.';
        feedback.style.color = 'red';
    }
}