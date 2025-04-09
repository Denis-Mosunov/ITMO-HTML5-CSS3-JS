<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gradient</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
        }
        canvas {
            border: 2px solid #333;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <canvas id="gradientCanvas" width="500" height="400"></canvas>

    <script>
        const canvas = document.getElementById('gradientCanvas');
        const ctx = canvas.getContext('2d');
      
        const gradient = ctx.createLinearGradient(10, 10,                 
            canvas.width, canvas.height 
        );
        // Add color stops
        gradient.addColorStop(0, '#FFC0CB');  // Pink
        gradient.addColorStop(1, '#FFFF00');  // Yellow
        
        // Fill canvas with gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    </script>
</body>
</html>
