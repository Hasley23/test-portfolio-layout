const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Проверка тёмной темы на уровне системы
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn__active");
    document.body.classList.add("dark");
}

// 2. проверка тёмной темы в localstorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn__active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn__active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn__active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove("dark-mode-btn__active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', 'light');
    }
})

// Кнопка ночного режима
btnDarkMode.onclick = function () {
    // тёмная тема сменой класса
    btnDarkMode.classList.toggle("dark-mode-btn__active");
    // Проверка добавлен ли класс
    const isDark = document.body.classList.toggle("dark"); // функция boolean
    // Включить Dark mode, записать в local storage
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}