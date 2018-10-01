import React from "react";
// src/Quotes.js
const quotes = [
  {
    quote:
      "Asian Paradise",
    character: "Tokyo",
    image:
      "http://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/025/123/585-0.jpeg_/waset-tokyo-2018-conference-85.jpeg"
  },
  {
    quote:
      "Dubai is magic !",
    character: "Dubai",
    image:
      "https://www.bakerinstitute.org/media/cached/files/13484/250x250/crop/100/dubaimetro-thumb.jpg"
  },
  {
    quote: "Welcome in Holland",
    character: "Amsterdam",
    image:
      "https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/sites/3/2017/07/Amsterdam-best-time.jpg"
  },
  {
    quote: "Beach, Sun and Sand",
    character: "Sidney",
    image:
      "http://www.montagnes-sacrees.com/wp-content/uploads/2018/03/20180309_163833-250x250.jpg"
  },
  {
    quote:
      "Madagascar lanscapes of dream",
    character: "Madagascar",
    image:
      "https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/2017/10/Madagascar_FI.jpg"
  }
];

const Quotes = () => (
  <div>
    {quotes.map(quote => (
      <div>
      <img key={quote.image} src={quote.image} />
      <p key={quote.character}>{quote.character}</p>
      <p key={quote.quote}>{quote.quote}</p>
      </div>
    ))}
  </div>
);

export default Quotes;