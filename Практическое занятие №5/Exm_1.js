<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        label {
            width: 120px;
            display: inline-block;
        }
        input:required + span::before {
            content: "✖";
            color: red;
            margin-left: 5px;
        }
        input:optional:valid + span::before {
            content: "✓";
            color: green;
            margin-left: 5px;
        }
        button {
            padding: 8px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h2>Please fill in the required fields</h2>
    <form id="myForm">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <span></span>
        </div>
        
        <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required min="1" max="120">
            <span></span>
        </div>
        
        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>
            <span></span>
        </div>
        
        <div class="form-group">
            <label for="website">Website:</label>
            <input type="url" id="website" name="website">
            <span></span>
        </div>
        
        <button type="submit">Submit</button>
    </form>

    <script>
        document.getElementById('myForm').addEventListener('submit', function(e) {
            e.preventDefault();
            if (this.checkValidity()) {
                alert('Form submitted successfully!');
            }
        });
    </script>
</body>
</html>
