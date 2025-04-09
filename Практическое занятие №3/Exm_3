<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Image Box with Shadow</title>
    <style>
        /* Container styles */
        .image-container {
            width: 300px;       /* Fixed width of the container */
            height: 300px;      /* Fixed height of the container */
            margin: 30px auto;  /* Center the container horizontally with 30px top/bottom margin */
            padding: 10px;      /* Internal padding */
            background: #fff;   /* White background */
            border-radius: 5px; /* Rounded corners */
            
            /* Cross-browser box shadow */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Standard syntax */
            -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Safari/Chrome */
            -moz-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Firefox */
            
            /* Smooth transition for hover effects */
            transition: all 0.3s ease;
        }

        /* Image styles */
        .image-container img {
            width: 100%;        /* Make image fill container width */
            height: 100%;       /* Make image fill container height */
            object-fit: cover;  /* Maintain aspect ratio while filling space */
            border-radius: 3px; /* Slightly rounded image corners */
            display: block;     /* Remove default inline spacing */
        }

        /* Hover effects */
        .image-container:hover {
            /* Enhanced shadow on hover */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            transform: translateY(-5px); /* Lift effect on hover */
        }

        /* Image caption styles */
        .image-caption {
            text-align: center;  /* Center-align text */
            margin-top: 10px;    /* Space between image and caption */
            font-family: Arial, sans-serif; /* Clean font */
            color: #333;         /* Dark gray text color */
        }
    </style>
</head>
<body>
    <!-- Main container with image -->
    <div class="image-container">
        <!-- Image element - replace 'apple.jpg' with your image path -->
        <img src="apple.jpg" alt="Red Apple">
        <!-- Image caption -->
        <div class="image-caption">Juicy Red Apple</div>
    </div>
</body>
</html>
