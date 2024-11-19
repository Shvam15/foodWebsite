import React from "react";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 3.3a1 1 0 011.902 0l1.423 4.39a1 1 0 00.95.686h4.608a1 1 0 01.592 1.809l-3.72 2.7a1 1 0 00-.364 1.118l1.423 4.39a1 1 0 01-1.539 1.117l-3.72-2.7a1 1 0 00-1.176 0l-3.72 2.7a1 1 0 01-1.539-1.117l1.423-4.39a1 1 0 00-.364-1.118l-3.72-2.7a1 1 0 01.592-1.809h4.608a1 1 0 00.95-.686L9.049 3.3z" />
          </svg>
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c-.41 0-.79.26-.93.65L9.47 8.56l-6.11.51c-.4.04-.73.31-.86.69-.13.37-.02.79.28 1.05L6.83 13 5.25 18.9c-.1.4.05.82.38 1.07.34.25.8.29 1.18.12L12 17.3l5.19 2.79c.17.09.36.13.54.13.23 0 .46-.07.66-.22.34-.25.48-.67.38-1.07L17.17 13l4.05-3.19c.3-.26.41-.68.28-1.05-.13-.37-.46-.65-.86-.69l-6.11-.51-1.6-5.91C12.79 2.26 12.41 2 12 2zm0 14.94l-3.81 2.05.99-4.01c.08-.31-.03-.64-.27-.84l-3.15-2.48 4.06-.34c.32-.03.59-.24.69-.55l1.19-4.4 1.19 4.4c.09.31.37.52.69.55l4.06.34-3.15 2.48c-.24.19-.34.52-.27.84l.99 4.01L12 16.94z" />
          </svg>
        );
      } else {
        // Empty star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 3.3a1 1 0 011.902 0l1.423 4.39a1 1 0 00.95.686h4.608a1 1 0 01.592 1.809l-3.72 2.7a1 1 0 00-.364 1.118l1.423 4.39a1 1 0 01-1.539 1.117l-3.72-2.7a1 1 0 00-1.176 0l-3.72 2.7a1 1 0 01-1.539-1.117l1.423-4.39a1 1 0 00-.364-1.118l-3.72-2.7a1 1 0 01.592-1.809h4.608a1 1 0 00.95-.686L9.049 3.3z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
