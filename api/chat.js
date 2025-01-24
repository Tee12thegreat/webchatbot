export default function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // Chatbot logic
        let botResponse = "I'm sorry, I don't understand that.";
        const lowerCaseMessage = message.toLowerCase();

        // Response mapping with multiple options
        const responses = {
            hello: [
                'Hi there! 👋 How can I assist you today?',
                'Hello! 😊 What can I do for you?',
                'Hey! How’s it going?'
            ],
            help: [
                'Of course! Let me know what you need help with.',
                'I’m here to help! What do you need assistance with?',
                'Sure! Tell me what you need help with.'
            ],
            bye: [
                'Goodbye! Have a great day! 😊',
                'See you later! Take care!',
                'Bye! Don’t hesitate to return if you need anything!'
            ],
            name: [
                "I'm your friendly chatbot! 🤖",
                "You can call me Chatbot! How can I assist you?",
                "Just a chatbot here to help you out!"
            ],
            howareyou: [
                "I'm just a program, but thanks for asking! How about you?",
                "Doing well, thank you! What about you?",
                "I’m here and ready to assist you!"
            ]
        };

        // Check for keywords and respond accordingly
        if (lowerCaseMessage.includes('hello')) {
            botResponse = getRandomResponse(responses.hello);
        } else if (lowerCaseMessage.includes('help')) {
            botResponse = getRandomResponse(responses.help);
        } else if (lowerCaseMessage.includes('bye')) {
            botResponse = getRandomResponse(responses.bye);
        } else if (lowerCaseMessage.includes('your name')) {
            botResponse = getRandomResponse(responses.name);
        } else if (lowerCaseMessage.includes('how are you')) {
            botResponse = getRandomResponse(responses.howareyou);
        }

        res.status(200).json({ response: botResponse });
    } else {
        res.status(405).json({ error: 'Method not allowed. Only POST requests are supported.' });
    }
}

// Helper function to get a random response from an array
function getRandomResponse(responseArray) {
    const randomIndex = Math.floor(Math.random() * responseArray.length);
    return responseArray[randomIndex];
}
