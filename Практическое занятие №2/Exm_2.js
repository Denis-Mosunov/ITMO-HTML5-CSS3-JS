<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab-2-2.html</title>
    <style>
        #change {
            font-size: 16px;
            color: black;
            text-decoration: none;
            font-weight: normal;
            transition: all 0.3s ease;
        }
    </style>
</head>
<body>
    <h1>Hover the cursor</h1>
    
    <p id="change">The text will change its style when hovering over the link.</p>
    
    <a href="#" id="styleChanger">Change text style</a>

    <script>
        function ChangeStyle() {
            const element = document.getElementById('change');
            element.style.color = 'red';
            element.style.fontSize = '24px';
            element.style.textDecoration = 'underline';
            element.style.fontWeight = 'bold';
        }

        document.getElementById('styleChanger').addEventListener('mouseover', ChangeStyle);
    </script>
</body>
</html>
