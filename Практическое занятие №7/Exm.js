<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSocket Chat</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        #chat-container {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            height: 400px;
            overflow-y: auto;
            margin-bottom: 10px;
        }
        #message-input {
            width: 70%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        #send-button {
            padding: 8px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        #send-button:hover {
            background-color: #45a049;
        }
        .message {
            margin: 5px 0;
            padding: 8px;
            border-radius: 4px;
        }
        .user-message {
            background-color: #e6f7ff;
            text-align: right;
        }
        .server-message {
            background-color: #f0f0f0;
            text-align: left;
        }
        .status {
            color: #666;
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>WebSocket Chat</h1>
    <div id="status" class="status">Connecting to server...</div>
    <div id="chat-container"></div>
    <div>
        <input type="text" id="message-input" placeholder="Type your message..." autocomplete="off">
        <button id="send-button" disabled>Send</button>
    </div>

    <script>
        // DOM elements
        const statusElement = document.getElementById('status');
        const chatContainer = document.getElementById('chat-container');
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');

        // Create WebSocket connection
        // Replace 'wss://your-server.com' with your actual WebSocket server URL
        const socket = new WebSocket('wss://echo.websocket.org');

        // Connection opened handler
        socket.addEventListener('open', (event) => {
            statusElement.textContent = 'Connected to server';
            sendButton.disabled = false;
            addMessageToChat('Connection established', 'status');
        });

        // Message received from server handler
        socket.addEventListener('message', (event) => {
            addMessageToChat(event.data, 'server');
        });

        // Error handler
        socket.addEventListener('error', (event) => {
            statusElement.textContent = 'Connection error';
            addMessageToChat('Connection error occurred', 'status');
        });

        // Connection closed handler
        socket.addEventListener('close', (event) => {
            statusElement.textContent = 'Connection closed';
            sendButton.disabled = true;
            addMessageToChat('Connection closed', 'status');
        });

        // Send message on button click
        sendButton.addEventListener('click', () => {
            sendMessage();
        });

        // Send message on Enter key press
        messageInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });

        // Function to send message
        function sendMessage() {
            const message = messageInput.value.trim();
            if (message && socket.readyState === WebSocket.OPEN) {
                socket.send(message);
                addMessageToChat(message, 'user');
                messageInput.value = '';
            }
        }

        // Function to add message to chat
        function addMessageToChat(message, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            
            if (sender === 'user') {
                messageElement.classList.add('user-message');
                messageElement.textContent = `You: ${message}`;
            } else if (sender === 'server') {
                messageElement.classList.add('server-message');
                messageElement.textContent = `Server: ${message}`;
            } else {
                messageElement.classList.add('status');
                messageElement.textContent = message;
            }
            
            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    </script>
</body>
</html>
