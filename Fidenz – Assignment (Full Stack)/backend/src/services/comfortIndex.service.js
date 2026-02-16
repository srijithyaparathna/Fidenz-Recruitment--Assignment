// calculate custom comfort index
const computeComfortIndex = ({ temp, humidity, windSpeed }) => {
  const tempc = temp;

  // Ideal values
  // Ideal temp = 22°C
  // Ideal humidity = 50%
  // Ideal wind speed = 5 m/s

  let score = 100;

  score -= Math.abs(tempc - 22) * 2;

  score -= Math.abs(humidity - 50) * 0.5;

  score -= Math.abs(windSpeed - 5) * 3;

  if (score > 100) score = 100;
  if (score < 0) score = 0;

  return Math.round(score);
};

module.exports = { computeComfortIndex };
