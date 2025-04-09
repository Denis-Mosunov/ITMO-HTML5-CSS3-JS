<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Phone Book</title>
</head>
<body>
  <h2>Phone Book</h2>
  <input type="text" id="name" placeholder="Name">
  <input type="text" id="phone" placeholder="Phone">
  <button onclick="addContact()">Add</button>
  <ul id="contactList"></ul>

  <script>
    function loadContacts() {
      const contacts = JSON.parse(sessionStorage.getItem("contacts")) || [];
      const list = document.getElementById("contactList");
      list.innerHTML = "";
      contacts.forEach((contact, index) => {
        const li = document.createElement("li");
        li.textContent = `${contact.name} — ${contact.phone}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
          contacts.splice(index, 1);
          sessionStorage.setItem("contacts", JSON.stringify(contacts));
          loadContacts();
        };
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    }

    function addContact() {
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      if (!name || !phone) return alert("Please fill in both fields.");
      const contacts = JSON.parse(sessionStorage.getItem("contacts")) || [];
      contacts.push({ name, phone });
      sessionStorage.setItem("contacts", JSON.stringify(contacts));
      loadContacts();
    }
    loadContacts();
  </script>
</body>
</html>
