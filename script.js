const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Function to display a message
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
}

// Function to handle the message input and response
function handleMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    // Display the user's message
    displayMessage(userMessage, 'user');
    userInput.value = ''; // Clear the input

    // Simulate a bot response after 1 second (you can replace this with your chatbot logic)
    setTimeout(() => {
        const botResponse = "I'm a chatbot, how can I assist you?";
        displayMessage(botResponse, 'bot');
    }, 1000);
}

// Event listener for the send button
sendBtn.addEventListener('click', handleMessage);

// Event listener for pressing 'Enter' key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleMessage();
    }
});
