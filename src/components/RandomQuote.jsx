import React, { useState } from "react";
import "./RandomQuote.css";
import reload_icon from "../assets/images/reload.png";
import twitter_icon from "../assets/images/twitter.png";
const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text}-${
        quote.author.split(",")[0]
      }`
    );
  };

  const [quote, setQuote] = useState({
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  });
  loadQuotes();
  return (
    <>
      <div className="container">
        <div className="quote">{quote.text}</div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author"> - {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src={reload_icon}
              alt="reload"
              onClick={() => {
                random();
              }}
            />
            <img
              src={twitter_icon}
              alt="share"
              onClick={() => {
                twitterShare();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
