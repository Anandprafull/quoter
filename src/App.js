import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Science is a way of thinking much more than it is a body of knowledge.", author: "Carl Sagan" },
  { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
  { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson" },
  { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
  { text: "Science is the poetry of reality.", author: "Richard Dawkins" },
  { text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", author: "Isaac Asimov" },
  { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", author: "Edwin Powell Hubble" },
  { text: "The science of today is the technology of tomorrow.", author: "Edward Teller" },
  { text: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.", author: "Louis Pasteur" },
  { text: "Science is organized knowledge. Wisdom is organized life.", author: "Immanuel Kant" },
  { text: "Science is the great antidote to the poison of enthusiasm and superstition.", author: "Adam Smith" },
  { text: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.", author: "Albert Einstein" },
  { text: "Science is the key to our future, and if you don't believe in science, then you're holding everybody back.", author: "Bill Nye" },
  { text: "Science is not only a disciple of reason but also one of romance and passion.", author: "Stephen Hawking" },
  { text: "The art and science of asking questions is the source of all knowledge.", author: "Thomas Berger" },
  { text: "Science is the acceptance of what works and the rejection of what does not. That needs more courage than we might think.", author: "Jacob Bronowski" },
  { text: "Science is the systematic classification of experience.", author: "George Henry Lewes" },
  { text: "Science is a beautiful gift to humanity; we should not distort it.", author: "A. P. J. Abdul Kalam" },
  { text: "Science is the father of knowledge, but opinion breeds ignorance.", author: "Hippocrates" },
  { text: "Science is the great antidote to the poison of enthusiasm and superstition.", author: "Adam Smith" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [inProp, setInProp] = useState(true);

  const getNewQuote = () => {
    setInProp(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setInProp(true);
    }, 300); // Duration of the exit animation
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text + " - " + quote.author)}`;

  return (
    <div className="App min-h-screen flex items-center justify-center bg-blue-100">
      <header className="App-header text-center">
        <CSSTransition in={inProp} timeout={300} classNames="quote">
          <div className="quote-box p-6 bg-white rounded-lg shadow-lg transition-transform transform">
            <p className="quote-text text-xl font-semibold text-gray-800">"{quote.text}"</p>
            <p className="quote-author text-lg text-gray-600 mt-2">- {quote.author}</p>
          </div>
        </CSSTransition>
        <button 
          className="new-quote mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={getNewQuote}
        >
          New Quote
        </button>
        <div className="share-buttons mt-4 flex justify-center">
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="share-button mx-2">
            <img src={require('./twitter.svg').default} alt="Share on Twitter" className="w-8 h-8" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
