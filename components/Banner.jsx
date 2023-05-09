import React from 'react';

const Banner = ({ banner, childStyles, parentStyles }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden bg-gradient-to-bl from-pink-800 via-red-600 to-yellow-400 ${parentStyles}`}>
    <p className={`font-bold text-5xl font-poppins leading-70" ${childStyles}`}>{banner}</p>
    <div className="absolute w-52 h-52 sm:w-34 sm:h-34 rounded-full white-bg -top-12 -left-9 -z-7" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg -bottom-10 -right-14 -z-5" />
  </div>
);

export default Banner;
