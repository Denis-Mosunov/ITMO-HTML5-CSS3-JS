<!DOCTYPE html>
<html lang="ru">
 <head>
  <meta charset="utf-8" />
  <title>Трехколоночный макет</title>
  <style type="text/css">
   body {
    font: 0.8em Arial, Helvetica, sans-serif; /* Шрифт на веб-странице */
    background: #D7E1F2; /* Цвет фона */
    color: #ffe; /* Цвет текста */
   }
   a { color: #008BCE; /* Цвет ссылок */ }
   #container {
    width: 500px; /* Ширина макета */
    margin: 0 auto; /* Выравниваем по центру */
    background: #FCE600; /* Цвет колонок */
   }
   header { 
    font-size: 2.2em; /* Размер текста */
    text-align: center; /* Выравнивание по центру */
    padding: 5px; /* Отступы вокруг текста */
    background: #D71920; /* Цвет фона шапки */
   }
   nav, aside {
    float: left; width: 110px; padding: 5px;
   }
   article {
    background: #54B948;
    margin: 0 120px; /* Ширина колонок */
    padding: 10px;
   }
   aside {
    float: right; color: #000;
   }
   h2 { margin: 0 0 1em; }
   footer { 
    clear: both; /* Отменяем действие float */
    padding: 5px; /* Отступы вокруг текста */
    background: #D71920; /* Цвет фона шапки */
   }
  </style>
 </head>
 <body>
  <div id="container">
   <header>Исторический турнир</header>
   <nav>
    <p><a href="stat.html">Статистика турнира</a></p>
    <p><a href="interview.html">Интервью с главным судьей</a></p>
    <p><a href="ask.html">Конкурсные вопросы</a></p>
   </nav>
   <aside>
    <h3>Статистика</h3>
    <p>одиннадцать человек дошли до финала;</p>
    <p>один человек правильно указал в каком стиле писал Диего Веласкес;</p>
    <p>только один человек знал, кто изобрел пароход;</p>
   </aside> 
   <article> 
    <h2>Опрос общественного мнения показал</h2>
    <ul>
     <li>что пароход изобретен: Петром I, А. Эйнштейном и А. Поповым;</li>
     <li>Диего Веласкес писал свои полотна в стиле: империализма, кубизма 
     и империосионизма;</li>
     <li>Фаросский маяк находится в Фаросе;</li>
     <li>конфуцианство возникло в: Италии, Корее и Франции;</li>
     <li>богами торговли и воровства в Древней Греции были: Марс, Меркурий 
     и Дионис;</li>
     <li>Франция – это город;</li>
     <li>богами загробного мира в Египте были: Аид, Анубис и Ассирис;</li>
     <li>столица Золотой Орды — Монголия;</li>
     <li>главные противники Александра Македонского: татаро-монголы, Дедал 
     и Цезарь;</li>
    </ul>
   </article>
   <footer>&copy; Влад Мержевич</footer>
  </div>
 </body>
</html>
