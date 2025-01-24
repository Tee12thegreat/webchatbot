export default function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // Simple chatbot logic
        let botResponse = "I'm not sure I understand.";
        if (message.toLowerCase().includes('hello')) {
            botResponse = 'Hi there! How can I help you today?';
        } else if (message.toLowerCase().includes('bye')) {
            botResponse = 'Goodbye! Have a nice day!';
        } else if (message.toLowerCase().includes('help')) {
            botResponse = 'Sure! Let me know what you need help with.';
        }

        res.status(200).json({ response: botResponse });
    } else {
        res.status(405).json({ error: 'Only POST requests are allowed' });
    }
}