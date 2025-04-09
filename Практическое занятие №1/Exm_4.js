<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Class Demonstration - Lab 1-4</title>
</head>
<body>
    <h1>Class Demonstration</h1>
    <script>
        class WebContent {
            constructor(title, url) {
                this.title = title;
                this.url = url;
            }
            
            display() {
                document.write(`
                    <div style="margin: 20px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
                        <h2>${this.title}</h2>
                        <p>Visit: <a href="${this.url}" target="_blank">${this.url}</a></p>
                    </div>
                `);
            }
        }
        
        // Create and display an instance
        const demo = new WebContent(
            "JavaScript Class Example", 
            "https://example.com"
        );
        
        demo.display();
    </script>
</body>
</html>
