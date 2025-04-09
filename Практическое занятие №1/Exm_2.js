<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>laba-1-2</title>
    <style>
        table {
            border-collapse: collapse;
            margin: 20px;
        }
        td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>laba-1-2</h1>
    
    <script>
        document.write('<table>');
        for (let i = 1; i <= 10; i++) {
            document.write('<tr>');
            for (let j = 1; j <= 10; j++) {
                document.write(`<td>${i * j}</td>`);
            }
            document.write('</tr>');
        }
        document.write('</table>');
    </script>
</body>
</html>
