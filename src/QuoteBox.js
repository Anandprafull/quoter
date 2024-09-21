import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Twitter from '../public/twitter.svg';

const QuoteBox = ({ quote, inProp, getNewQuote }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text + " - " + quote.author)}`;

  return (
    <div className="text-center">
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
          <img src={Twitter} alt="Share on Twitter" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;