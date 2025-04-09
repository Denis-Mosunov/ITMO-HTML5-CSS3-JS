<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>lab-1-3</title>
</head>
<body>
    <h1>lab-1-3</h1>
    
    <script>
        function getDayForm(n) {
            // Check the last digit of the number
            const lastDigit = n % 10;
            const lastTwoDigits = n % 100;
            
            // Exceptions for numbers 11-19
            if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
                return 'days';
            }
            
            // For other cases
            if (lastDigit === 1) return 'day';
            if (lastDigit >= 2 && lastDigit <= 4) return 'days';
            return 'days';
        }
        
        // Examples
        const examples = [14, 3, 1];
        
        examples.forEach(n => {
            const form = getDayForm(n);
            document.write(`<p>There are ${n} ${form} left until the end of your studies.</p>`);
        });
    </script>
</body>
</html>
