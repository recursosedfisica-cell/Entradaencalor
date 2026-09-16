document.addEventListener('DOMContentLoaded', () => {
    // Accesibilidad: Modo Alto Contraste
    const btnContrast = document.getElementById('btn-contrast');
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Accesibilidad: Tamaño de Texto Dinámico
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

    // Simulador Interactivo de Reglas
    const form = document.getElementById('rule-checker');
    const outputBox = document.getElementById('rule-output');
    const ruleResult = document.getElementById('rule-result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedAction = document.getElementById('action-select').value;

        switch (selectedAction) {
            case 'pasos':
                ruleResult.innerHTML = '⚠️ <strong>Violación de Pasos:</strong> El jugador no puede dar más de dos pasos sin driblear. El balón pasa al equipo contrario.';
                break;
            case 'tiro3':
                ruleResult.innerHTML = '🏀 <strong>¡Jugada Válida!</strong> Al lanzar por fuera de la línea perimetral, la canasta suma 3 puntos.';
                break;
            case 'zona3':
                ruleResult.innerHTML = '⚠️ <strong>Violación de 3 Segundos:</strong> Un atacante no puede permanecer más de 3 segundos continuos dentro de la pintura rival.';
                break;
            case 'falta5':
                ruleResult.innerHTML = '🛑 <strong>Sanción por Faltas:</strong> Al acumular la quinta falta personal, el jugador queda automáticamente eliminado del encuentro.';
                break;
            default:
                ruleResult.textContent = 'Selecciona una jugada para ver la regla correspondiente.';
        }
        
        outputBox.hidden = false;
        outputBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

// Autoevaluación interactiva
function checkQuiz(selectedOption) {
    const feedback = document.getElementById('quiz-feedback');
    if (selectedOption === 3) {
        feedback.textContent = '¡Correcto! Cada equipo dispone de 3 tiempos muertos (de 60 segundos) en la segunda mitad del partido.';
        feedback.style.color = '#15803d';
    } else {
        feedback.textContent = 'Incorrecto. Recuerda: se otorgan 2 tiempos muertos en la primera mitad y 3 en la segunda mitad.';
        feedback.style.color = '#b91c1c';
    }
}