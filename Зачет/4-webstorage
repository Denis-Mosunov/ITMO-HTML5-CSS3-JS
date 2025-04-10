// Сохранение данных в localStorage
function savePreferences() {
    const name = document.getElementById('name').value;
    const theme = document.getElementById('theme').value;
    
    localStorage.setItem('userName', name);
    localStorage.setItem('userTheme', theme);
    
    alert('Настройки сохранены!');
}

// Загрузка данных при загрузке страницы
window.onload = function() {
    const savedName = localStorage.getItem('userName');
    const savedTheme = localStorage.getItem('userTheme');
    
    if (savedName) {
        document.getElementById('name').value = savedName;
    }
    
    if (savedTheme) {
        document.getElementById('theme').value = savedTheme;
        applyTheme(savedTheme);
    }
};

function applyTheme(theme) {
    document.body.className = theme;
}
