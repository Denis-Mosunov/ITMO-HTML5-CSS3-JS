<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab-2-1.html</title>
    <style>
        img {
            transition: transform 0.3s ease;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Click on the image to change its size</h1>
    <img src="apple.jpg" alt="Example image" id="resizableImage" width="300">

    <script>
        const image = document.getElementById('resizableImage');
        let isEnlarged = false;

        image.addEventListener('click', function() {
            if (isEnlarged) {
                this.style.transform = 'scale(1)';
            } else {
                this.style.transform = 'scale(2)';
            }
            isEnlarged = !isEnlarged;
        });
    </script>
</body>
</html>
