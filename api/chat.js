export default function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // Default response for unrecognized input
        let botResponse = "I'm sorry, I didn't quite catch that. You can ask me about properties, buying, selling, renting, or how to contact us!";

        const lowerCaseMessage = message.toLowerCase();

        // Response mapping with broader keywords
        const responses = {
            hello: [
                'Hi there! 👋 Welcome to Realtorville Real Estate. How can I assist you today?',
                'Hello! 😊 I’m here to help with all your real estate needs. What can I do for you?',
                'Hey! How can I assist you in finding your dream property?'
            ],
            help: [
                'Sure! You can ask me about available properties, buying or selling a home, renting options, or how to contact us.',
                'I’m here to assist you! Feel free to ask about properties, pricing, locations, or anything else related to real estate.',
                'Need help? You can ask me about buying, selling, renting, or contacting an agent!'
            ],
            bye: [
                'Goodbye! Have a great day! 😊',
                'See you later! If you need more assistance, feel free to chat again!',
                'Bye! Don’t hesitate to return if you have more questions!'
            ],
            properties: [
                "We offer a variety of properties including houses, apartments, and commercial spaces. Let me know what you're looking for!",
                "Our listings include homes for sale and rent in different areas. Do you have a specific location in mind?",
                "We have properties in various price ranges. Tell me your budget or preferred type of property!"
            ],
            buy: [
                "Buying a property? Great choice! Let me know your budget and preferred location so I can assist further.",
                "Looking to buy? We have listings in several areas. Would you like information on financing or specific properties?",
                "Buying a home is exciting! Let me know if you'd like tips on the process or details about available listings."
            ],
            sell: [
                "Selling your property? I can provide tips on pricing, staging, and connecting with potential buyers.",
                "Thinking of selling? Let me know if you'd like a market analysis or advice on listing your property.",
                "Selling is a big step! Would you like guidance on setting the right price or preparing your home for sale?"
            ],
            rent: [
                "Looking for rentals? We have apartments, houses, and commercial spaces available. What’s your budget?",
                "Renting is a great option! Let me know your preferred area and price range so I can help.",
                "We offer rental options in various locations. Do you need short-term or long-term rentals?"
            ],
            contact: [
                "You can reach our team at +2622378 or json@code.co.zw Would you like me to connect you with an agent?",
                "For personalized assistance, please contact us at +26377645 or email us at json@code.co.zw.",
                "Feel free to call us at +253889043 for any inquiries!"
            ]
        };

        // Broader keyword matching
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hie') || lowerCaseMessage.includes('hey')) {
            botResponse = getRandomResponse(responses.hello);
        } else if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('assist') || lowerCaseMessage.includes('support')) {
            botResponse = getRandomResponse(responses.help);
        } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye') || lowerCaseMessage.includes('later')) {
            botResponse = getRandomResponse(responses.bye);
        } else if (lowerCaseMessage.includes('property') || lowerCaseMessage.includes('properties') || lowerCaseMessage.includes('real estate')) {
            botResponse = getRandomResponse(responses.properties);
        } else if (lowerCaseMessage.includes('buy') || lowerCaseMessage.includes('purchase')) {
            botResponse = getRandomResponse(responses.buy);
        } else if (lowerCaseMessage.includes('sell') || lowerCaseMessage.includes('selling')) {
            botResponse = getRandomResponse(responses.sell);
        } else if (lowerCaseMessage.includes('rent') || lowerCaseMessage.includes('rental') || lowerCaseMessage.includes('leasing')) {
            botResponse = getRandomResponse(responses.rent);
        } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('agent') || lowerCaseMessage.includes('reach')) {
            botResponse = getRandomResponse(responses.contact);
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
