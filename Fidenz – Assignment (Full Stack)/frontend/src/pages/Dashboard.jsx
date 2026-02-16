import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchWeatherData } from "../services/api";
import WeatherCard from "../components/WeatherCard";

const Dashboard = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isAuthenticated) return;

    const loadData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const res = await fetchWeatherData(token);
        setCities(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <p className="text-center mt-20 text-white">Please login</p>;
  }

  const filteredCities = cities.filter((city) =>
    city.cityName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 p-8">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-purple-400 mb-6">
        Comfort Index Dashboard
      </h1>

   
    <div className="flex justify-center mb-10">
  <div className="w-full max-w-md bg-white rounded-full shadow-lg p-1">
    <input
      type="text"
      placeholder="Search city..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 rounded-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
</div>


      {/* City list */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCities.map((city) => (
          <WeatherCard key={city.cityName} city={city} />
        ))}
      </div>

      {filteredCities.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No cities found
        </p>
      )}
    </div>
  );
};

export default Dashboard;
