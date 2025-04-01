// Add interactivity here if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
});

// JavaScript for Quote of the Day
document.addEventListener("DOMContentLoaded", function () {
    // Array of 50 quotes
    const quotes = [
        { text: "Chess is the gymnasium of the mind.", author: "– Blaise Pascal" },
        { text: "A good player is always lucky.", author: "– José Raúl Capablanca" },
        { text: "Chess is life in miniature.", author: "– Anatoly Karpov" },
        { text: "The beauty of chess is it can be whatever you want it to be.", author: "– Magnus Carlsen" },
        { text: "Tactics flow from a superior position.", author: "– Bobby Fischer" },
        { text: "The biggest problem of chess is that amateurs think too much about what should happen.", author: "– Garry Kasparov" },
        { text: "In chess, as in life, opportunity strikes but once.", author: "– Unknown" },
        { text: "Chess is a fairy tale of 1001 blunders.", author: "– Savielly Tartakower" },
        { text: "The winner of the game is the player who makes the next-to-last mistake.", author: "– Savielly Tartakower" },
        { text: "Every chess master was once a beginner.", author: "– Irving Chernev" },
        { text: "The essence of chess is thinking ahead.", author: "– Bobby Fischer" },
        { text: "Chess is a sea in which a gnat may drink and an elephant may bathe.", author: "– Indian Proverb" },
        { text: "A bad plan is better than no plan at all.", author: "– Frank Marshall" },
        { text: "Chess is a game of imagination.", author: "– David Bronstein" },
        { text: "The hardest game to win is a won game.", author: "– Emanuel Lasker" },
        { text: "Chess is a war over the board.", author: "– Bobby Fischer" },
        { text: "When you see a good move, look for a better one.", author: "– Emanuel Lasker" },
        { text: "The pawns are the soul of chess.", author: "– François-André Danican Philidor" },
        { text: "Chess is infinite, and its possibilities are endless.", author: "– Vishy Anand" },
        { text: "A strong memory, concentration, imagination, and willpower are the essentials of excellence in chess.", author: "– Bobby Fischer" },
        { text: "The only thing chess players have in common is chess.", author: "– Lodewijk Prins" },
        { text: "Chess is like body-building. If you train every day, you stay in top shape.", author: "– Magnus Carlsen" },
        { text: "Chess is not for the faint-hearted; it absorbs a person entirely.", author: "– Wilhelm Steinitz" },
        { text: "Even a poor plan is better than none at all.", author: "– Mikhail Chigorin" },
        { text: "Chess is the art of analysis.", author: "– Mikhail Botvinnik" },
        { text: "A knight ending is really just a race of king activity.", author: "– Vasily Smyslov" },
        { text: "Chess is a game of strategy and tactics.", author: "– Alexander Alekhine" },
        { text: "The best way to learn is by playing against stronger opponents.", author: "– Paul Morphy" },
        { text: "In chess, there is no such thing as luck.", author: "– Siegbert Tarrasch" },
        { text: "The king is a fighting piece. Use it!", author: "– Wilhelm Steinitz" },
        { text: "Chess is a battle of ideas.", author: "– Mikhail Tal" },
        { text: "Patience is the most valuable trait of a chess player.", author: "– Anatoly Karpov" },
        { text: "The endgame is where the true skill of a player is revealed.", author: "– José Raúl Capablanca" },
        { text: "Chess is a struggle against error.", author: "– Johannes Zukertort" },
        { text: "A rook on the seventh rank is worth a pawn.", author: "– Wilhelm Steinitz" },
        { text: "Chess is a game of small advantages.", author: "– Wilhelm Steinitz" },
        { text: "The player who wins is the one who makes the fewest mistakes.", author: "– Wilhelm Steinitz" },
        { text: "Chess is a game of logic and creativity.", author: "– Vladimir Kramnik" },
        { text: "The greatest enemy of knowledge is not ignorance, but the illusion of knowledge.", author: "– Stephen Hawking" },
        { text: "A sacrifice is best refuted by accepting it.", author: "– Wilhelm Steinitz" },
        { text: "The strongest players are those who can adapt to any situation.", author: "– Garry Kasparov" },
        { text: "Chess is a game of perfect information.", author: "– Claude Shannon" },
        { text: "A good opening prepares the way for a good middle game.", author: "– Aron Nimzowitsch" },
        { text: "The threat is stronger than the execution.", author: "– Aaron Nimzowitsch" },
        { text: "Chess is a game of patterns.", author: "– Richard Teichmann" },
        { text: "The key to good chess is understanding the opponent's plans.", author: "– Mikhail Botvinnik" },
        { text: "The object of the game is to checkmate the opponent's king.", author: "– Unknown" },
        { text: "Chess is a game of infinite possibilities.", author: "– Emanuel Lasker" },
        { text: "The middlegame is where the real fight begins.", author: "– Alexander Alekhine" },
        { text: "A good player never stops learning.", author: "– Viktor Korchnoi" }
    ];

    // Function to get today's quote
    function getQuoteOfTheDay() {
        const today = new Date();
        const dayOfYear = Math.floor(
            (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
        ); // Get the day of the year (0–364/365)
        const index = dayOfYear % quotes.length; // Use modulo to cycle through the quotes
        return quotes[index];
    }

    // Display the quote
    const quoteElement = document.getElementById("quote");
    const todaysQuote = getQuoteOfTheDay();
    quoteElement.innerHTML = `"${todaysQuote.text}"<br><cite>${todaysQuote.author}</cite>`;
});