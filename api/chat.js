export default function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // Chatbot logic
        let botResponse = "I'm sorry, I don't understand that.";
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('hello')) {
            botResponse = 'Hi there! 👋 How can I assist you today?';
        } else if (lowerCaseMessage.includes('help')) {
            botResponse = 'Of course! Let me know what you need help with.';
        } else if (lowerCaseMessage.includes('bye')) {
            botResponse = 'Goodbye! Have a great day! 😊';
        } else if (lowerCaseMessage.includes('your name')) {
            botResponse = "I'm your friendly chatbot! 🤖";
        }

        res.status(200).json({ response: botResponse });
    } else {
        res.status(405).json({ error: 'Method not allowed. Only POST requests are supported.' });
    }
}