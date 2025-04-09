<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Телефонная книжка (sessionStorage)</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: inline-block;
            width: 80px;
        }
        input {
            padding: 5px;
            width: 200px;
        }
        button {
            padding: 5px 10px;
            margin-right: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>Телефонная книжка (сессионная)</h2>
    <div class="form-group">
        <label for="phone">Телефон:</label>
        <input type="text" id="phone" placeholder="Введите телефон">
    </div>
    <div class="form-group">
        <label for="name">Имя:</label>
        <input type="text" id="name" placeholder="Введите имя">
    </div>
    <button onclick="addContact()">Добавить</button>
    <button onclick="clearContacts()">Очистить все</button>
    
    <h3>Контакты:</h3>
    <table id="contactsTable">
        <thead>
            <tr>
                <th>Телефон</th>
                <th>Имя</th>
                <th>Действие</th>
            </tr>
        </thead>
        <tbody id="contactsList"></tbody>
    </table>

    <script>
        // Загрузка контактов при открытии страницы
        document.addEventListener('DOMContentLoaded', loadContacts);
        
        function loadContacts() {
            const contacts = JSON.parse(sessionStorage.getItem('phonebook')) || [];
            const contactsList = document.getElementById('contactsList');
            contactsList.innerHTML = '';
            
            contacts.forEach((contact, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${contact.phone}</td>
                    <td>${contact.name}</td>
                    <td><button onclick="deleteContact(${index})">Удалить</button></td>
                `;
                contactsList.appendChild(row);
            });
        }
        
        function addContact() {
            const phone = document.getElementById('phone').value.trim();
            const name = document.getElementById('name').value.trim();
            
            if (!phone || !name) {
                alert('Пожалуйста, заполните оба поля');
                return;
            }
            
            let contacts = JSON.parse(sessionStorage.getItem('phonebook')) || [];
            contacts.push({ phone, name });
            sessionStorage.setItem('phonebook', JSON.stringify(contacts));
            
            document.getElementById('phone').value = '';
            document.getElementById('name').value = '';
            
            loadContacts();
        }
        
        function deleteContact(index) {
            let contacts = JSON.parse(sessionStorage.getItem('phonebook')) || [];
            contacts.splice(index, 1);
            sessionStorage.setItem('phonebook', JSON.stringify(contacts));
            loadContacts();
        }
        
        function clearContacts() {
            if (confirm('Вы уверены, что хотите удалить все контакты?')) {
                sessionStorage.removeItem('phonebook');
                loadContacts();
            }
        }
    </script>
</body>
</html>
