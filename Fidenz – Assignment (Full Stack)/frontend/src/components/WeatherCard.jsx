import React from "react";
import PropTypes from "prop-types";

const WeatherCard = ({ city }) => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">{city.cityName}</h2>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
          #{city.rank}
        </span>
      </div>

      <div className="text-4xl font-bold mb-2">{city.temp}°C</div>

      <p className="text-sm mb-3 opacity-90">{city.status}</p>

      <div className="bg-white/20 rounded-lg p-2 text-center">
        <p className="text-sm">Comfort Score</p>
        <p className="text-xl font-bold">{city.comfortScore}</p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    comfortScore: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeatherCard;
