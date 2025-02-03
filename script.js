const progressElement = document.getElementById('progress');
const valueInput = document.getElementById('value');
const animateCheckbox = document.getElementById('animate');
const hideCheckbox = document.getElementById('hide');

valueInput.addEventListener('input', (e) => {
    const value = Math.min(100, Math.max(0, e.target.value));
    progressElement.style.background = `conic-gradient(blue 0%, blue ${value}%, transparent ${value}%)`;
});

animateCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        progressElement.classList.add('animated');
    } else {
        progressElement.classList.remove('animated');
    }
});

hideCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        progressElement.style.display = 'none';
    } else {
        progressElement.style.display = 'flex';
    }
});

// Добавляем анимацию вращения
document.styleSheets[0].insertRule(`
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`, 0);

document.styleSheets[0].insertRule(`
    .animated {
        animation: rotate 5s linear infinite;
    }
`, 1);