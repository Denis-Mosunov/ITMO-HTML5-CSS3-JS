<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>laba-2-2.html</title>
</head>
<body>
    <h1>Открытие нового окна браузера</h1>
    
    <a href="#" id="newWindowLink">Новое окно</a>

    <script>
        document.getElementById('newWindowLink').addEventListener('click', function(e) {
            e.preventDefault();
            
            const windowFeatures = 'width=300,height=400,' +
                                  'menubar=yes,' +
                                  'toolbar=yes,' +
                                  'location=yes,' +
                                  'resizable=yes,' +
                                  'status=yes';
            
            window.open('about:blank', 'newWindow', windowFeatures);
        });
    </script>
</body>
</html>
