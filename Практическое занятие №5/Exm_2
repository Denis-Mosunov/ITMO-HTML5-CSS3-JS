<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phonebook (localStorage)</title>
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
    <h2>Phonebook</h2>
    <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" placeholder="Enter phone number">
    </div>
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter name">
    </div>
    <button onclick="addContact()">Add</button>
    <button onclick="clearContacts()">Clear All</button>
    
    <h3>Contacts:</h3>
    <table id="contactsTable">
        <thead>
            <tr>
                <th>Phone</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="contactsList"></tbody>
    </table>

    <script>
        // Load contacts when the page opens
        document.addEventListener('DOMContentLoaded', loadContacts);
        
        function loadContacts() {
            const contacts = JSON.parse(localStorage.getItem('phonebook')) || [];
            const contactsList = document.getElementById('contactsList');
            contactsList.innerHTML = '';
            
            contacts.forEach((contact, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${contact.phone}</td>
                    <td>${contact.name}</td>
                    <td><button onclick="deleteContact(${index})">Delete</button></td>
                `;
                contactsList.appendChild(row);
            });
        }
        
        function addContact() {
            const phone = document.getElementById('phone').value.trim();
            const name = document.getElementById('name').value.trim();
            
            if (!phone || !name) {
                alert('Please fill in both fields');
                return;
            }
            
            let contacts = JSON.parse(localStorage.getItem('phonebook')) || [];
            contacts.push({ phone, name });
            localStorage.setItem('phonebook', JSON.stringify(contacts));
            
            document.getElementById('phone').value = '';
            document.getElementById('name').value = '';
            
            loadContacts();
        }
        
        function deleteContact(index) {
            let contacts = JSON.parse(localStorage.getItem('phonebook')) || [];
            contacts.splice(index, 1);
            localStorage.setItem('phonebook', JSON.stringify(contacts));
            loadContacts();
        }
        
        function clearContacts() {
            if (confirm('Are you sure you want to delete all contacts?')) {
                localStorage.removeItem('phonebook');
                loadContacts();
            }
        }
    </script>
</body>
</html>
