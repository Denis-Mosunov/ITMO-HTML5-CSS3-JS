<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Вертикальное меню модулей</title>
    <style>
        /* Общие стили */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        /* Контейнер меню */
        .module-menu {
            width: 500px;
            margin: 0 auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            overflow: hidden;
        }
        
        /* Стили пунктов меню */
        .module-menu ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        
        .module-menu li {
            border-bottom: 1px solid #e0e0e0;
            transition: all 0.3s ease;
        }
        
        .module-menu li:last-child {
            border-bottom: none;
        }
        
        .module-menu li a {
            display: block;
            padding: 15px 20px;
            text-decoration: none;
            color: #333;
            background-color: #fff;
            font-size: 16px;
            position: relative;
            transition: all 0.3s ease;
        }
        
        /* Нумерация модулей */
        .module-menu li a::before {
            content: attr(data-module);
            display: inline-block;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #3498db;
            color: white;
            border-radius: 50%;
            margin-right: 15px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        /* Эффекты при наведении */
        .module-menu li:hover {
            transform: translateX(5px);
        }
        
        .module-menu li:hover a {
            background-color: #f0f8ff;
            color: #2c3e50;
        }
        
        .module-menu li:hover a::before {
            background-color: #2980b9;
            transform: scale(1.1);
        }
        
        /* Активный пункт меню */
        .module-menu li.active a {
            background-color: #e1f0fa;
            color: #2c3e50;
            font-weight: bold;
        }
        
        .module-menu li.active a::before {
            background-color: #2c3e50;
        }
    </style>
</head>
<body>
    <div class="module-menu">
        <ul>
            <li class="active"><a href="#" data-module="1">Введение. Структура Web-технологий. Обзор технологий разработки клиентских Web-приложений</a></li>
            <li><a href="#" data-module="2">Введение в XML. Структура XML документа. DOM XML</a></li>
            <li><a href="#" data-module="3">Обзор технологий разработки серверных Web-приложений. Web-сервисы</a></li>
            <li><a href="#" data-module="4">Web 2.0. Семантический Web</a></li>
            <li><a href="#" data-module="5">Синдикация и агрегирование веб-контента. Улучшение usability веб-контента</a></li>
            <li><a href="#" data-module="6">Создание динамических Web-страниц на клиентской стороне. AJAX</a></li>
            <li><a href="#" data-module="7">Обеспечение безопасности Web-приложений</a></li>
            <li><a href="#" data-module="8">Насыщение интернет-приложения (RIA)</a></li>
            <li><a href="#" data-module="9">Silverlight и XAML</a></li>
            <li><a href="#" data-module="10">Технологии облачных вычислений</a></li>
        </ul>
    </div>
</body>
</html>
