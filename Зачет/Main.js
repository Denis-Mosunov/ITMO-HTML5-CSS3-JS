<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Русская кухня - Главная</title>
    <style>
        header {
            background: linear-gradient(100deg, #ff6b6b, #4ecdc4);
            padding: 50px;
            color: white;
        }

        /*Тень*/
        h1 {
            text-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
        }

        /*углы */
        nav li {
            display: inline-block;
            margin: 0 10px;
            background: rgba(255, 255, 255, 0.2);
            padding: 10px 15px;
            border-radius: 15px;
        }

        /*Анимация */
        @keyframes fadeIn {
            from { opacity: 1; }
            to { opacity: 1; }
        }

        main {
            animation: fadeIn 1s ease-in;
            padding: 20px;
        }

        /* Flexbox */
        .recipe-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .recipe-card {
            flex: 1 1 300px;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* Медиа-запросы для адаптивности */
        @media (max-width: 768px) {
            nav ul {
                padding: 0;
                text-align: center;
            }
            
            nav li {
                display: block;
                margin: 10px 0;
            }
        }

        /* Стили для формы */
        .contact-form {
            max-width: 600px;
            margin: 20px auto;
        }

        .form-group {
            margin-bottom: 15px;
        }

        /* Стили для canvas */
        #recipeChart {
            margin: 20px auto;
            display: block;
            max-width: 500px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Добро пожаловать в мир русской кухни!</h1>
        <nav>
            <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#recipes">Рецепты</a></li>
                <li><a href="#history">История</a></li>
                <li><a href="#gallery">Галерея</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <article>
                <h2>Особенности русской кухни</h2>
                <p>Русская кухня славится своим разнообразием и сытностью. Она формировалась под влиянием сурового климата и богатых традиций.</p>
            </article>

            <section>
                <h2>Популярные блюда</h2>
                <div class="recipe-cards">
                    <div class="recipe-card">
                        <figure>
                            <img src="https://via.placeholder.com/300x200?text=Борщ" alt="Борщ" width="100%">
                            <figcaption>Традиционный русский борщ</figcaption>
                        </figure>
                    </div>
                    <div class="recipe-card">
                        <figure>
                            <img src="https://via.placeholder.com/300x200?text=Пельмени" alt="Пельмени" width="100%">
                            <figcaption>Русские пельмени</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <aside>
                <h3>Интересный факт</h3>
                <p>Знаете ли вы, что блины на Руси считались поминальным блюдом?</p>
            </aside>
        </section>

        <section id="recipes" style="display:none;">
            <h2>Рецепты русской кухни</h2>
            <div class="recipe-cards">
                <div class="recipe-card">
                    <h3>Борщ</h3>
                    <p>Ингредиенты: свекла, капуста, картофель, морковь, лук, мясо, сметана.</p>
                    <button onclick="saveRecipe('Борщ')">Сохранить рецепт</button>
                </div>
                <div class="recipe-card">
                    <h3>Оливье</h3>
                    <p>Ингредиенты: колбаса, картофель, морковь, горошек, яйца, майонез.</p>
                    <button onclick="saveRecipe('Оливье')">Сохранить рецепт</button>
                </div>
            </div>
            
            <!-- Canvas элемент -->
            <canvas id="recipeChart" width="400" height="400"></canvas>
        </section>

        <section id="history" style="display:none;">
            <h2>История русской кухни</h2>
            <article>
                <p>Русская кухня имеет богатую историю, уходящую корнями в древние времена...</p>
            </article>
        </section>

        <section id="gallery" style="display:none;">
            <h2>Галерея русских блюд</h2>
            <!-- SVG элемент -->
            <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#ff6b6b" />
                <circle cx="70" cy="80" r="15" fill="white" />
                <circle cx="130" cy="80" r="15" fill="white" />
                <path d="M70 140 Q100 160 130 140" stroke="white" stroke-width="3" fill="none" />
                <text x="100" y="30" text-anchor="middle" fill="white">Блины</text>
            </svg>
        </section>

        <section id="contacts" style="display:none;">
            <h2>Обратная связь</h2>
            <form class="contact-form" onsubmit="saveFormData(event)">
                <div class="form-group">
                    <label for="name">Имя:</label>
                    <input type="text" id="name" name="name" required placeholder="Ваше имя">
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Ваш email">
                </div>
                
                <div class="form-group">
                    <label for="phone">Телефон:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890">
                </div>
                
                <div class="form-group">
                    <label for="date">Дата посещения:</label>
                    <input type="date" id="date" name="date">
                </div>
                
                <div class="form-group">
                    <label for="dish">Любимое блюдо:</label>
                    <input type="text" id="dish" name="dish" list="dishes">
                    <datalist id="dishes">
                        <option value="Борщ">
                        <option value="Пельмени">
                        <option value="Оливье">
                        <option value="Блины">
                    </datalist>
                </div>
                
                <div class="form-group">
                    <label for="message">Сообщение:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Ваше сообщение"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="rating">Оценка сайта:</label>
                    <input type="range" id="rating" name="rating" min="1" max="10" value="5">
                </div>
                
                <button type="submit">Отправить</button>
            </form>
            
            <div id="savedData"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Русская кухня. Все права защищены.</p>
    </footer>

    <script>
        // WebStorage - сохранение данных
        function saveRecipe(recipeName) {
            let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
            if (!savedRecipes.includes(recipeName)) {
                savedRecipes.push(recipeName);
                localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
                alert(`Рецепт "${recipeName}" сохранен!`);
            } else {
                alert('Этот рецепт уже сохранен!');
            }
        }

        // Сохранение данных формы
        function saveFormData(event) {
            event.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: document.getElementById('date').value,
                dish: document.getElementById('dish').value,
                message: document.getElementById('message').value,
                rating: document.getElementById('rating').value
            };
            
            localStorage.setItem('formData', JSON.stringify(formData));
            alert('Данные сохранены!');
            displaySavedData();
        }

        // Отображение сохраненных данных
        function displaySavedData() {
            const savedData = JSON.parse(localStorage.getItem('formData'));
            if (savedData) {
                let html = '<h3>Сохраненные данные:</h3><ul>';
                for (const key in savedData) {
                    if (savedData[key]) {
                        html += `<li><strong>${key}:</strong> ${savedData[key]}</li>`;
                    }
                }
                html += '</ul>';
                document.getElementById('savedData').innerHTML = html;
            }
        }

        // Отрисовка на Canvas
        function drawChart() {
            const canvas = document.getElementById('recipeChart');
            if (canvas.getContext) {
                const ctx = canvas.getContext('2d');
                
                // Данные для диаграммы
                const data = {
                    'Борщ': 45,
                    'Пельмени': 30,
                    'Оливье': 25
                };
                
                const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1'];
                let startAngle = 0;
                let total = Object.values(data).reduce((a, b) => a + b, 0);
                let i = 0;
                
                // Рисуем круговую диаграмму
                for (const [label, value] of Object.entries(data)) {
                    const sliceAngle = (value / total) * 2 * Math.PI;
                    
                    ctx.beginPath();
                    ctx.fillStyle = colors[i % colors.length];
                    ctx.moveTo(200, 200);
                    ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
                    ctx.closePath();
                    ctx.fill();
                    
                    // Подписи
                    const midAngle = startAngle + sliceAngle / 2;
                    const textX = 200 + Math.cos(midAngle) * 120;
                    const textY = 200 + Math.sin(midAngle) * 120;
                    
                    ctx.fillStyle = 'black';
                    ctx.font = '12px Arial';
                    ctx.fillText(label, textX, textY);
                    
                    startAngle += sliceAngle;
                    i++;
                }
                
                // Заголовок
                ctx.fillStyle = 'black';
                ctx.font = '16px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Популярность блюд', 200, 30);
            }
        }

        // Навигация по страницам
        function showSection(sectionId) {
            document.querySelectorAll('main > section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
            
            if (sectionId === 'contacts') {
                displaySavedData();
            }
            
            if (sectionId === 'recipes') {
                drawChart();
            }
        }

        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            showSection('home');
            
            // Навигация
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const sectionId = this.getAttribute('href').substring(1);
                    showSection(sectionId);
                });
            });
        });
    </script>
</body>
</html>
