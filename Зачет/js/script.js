// Обработчик формы обратной связи
document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Получаем данные формы
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    rating: document.getElementById('rating').value,
    date: new Date().toLocaleString()
  };
  
  // Сохраняем в localStorage
  saveFeedback(formData);
  
  // Очищаем форму
  this.reset();
  
  // Показываем уведомление
  alert('Спасибо за ваш отзыв!');
});

// Сохранение отзыва в Web Storage
function saveFeedback(data) {
  let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
  feedbacks.push(data);
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
}

// Загрузка сохраненных отзывов при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks'));
  if (savedFeedbacks && savedFeedbacks.length > 0) {
    console.log('Сохраненные отзывы:', savedFeedbacks);
  }
  
  // Темная тема (пример использования WebStorage)
  const themeToggle = document.createElement('button');
  themeToggle.textContent = 'Темная тема';
  themeToggle.addEventListener('click', toggleTheme);
  document.body.prepend(themeToggle);
});

// Переключение темы
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', newTheme);
}

// Проверка сохраненной темы
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}
// Звуки при наведении на рецепты
document.addEventListener('DOMContentLoaded', function() {
  const recipeCards = document.querySelectorAll('.recipe-card');
  
  recipeCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sound = new Audio('media/cooking-sound.mp3');
      sound.volume = 0.3; // Уменьшаем громкость
      sound.play();
    });
  });
});
