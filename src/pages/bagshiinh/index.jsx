import { useState, useEffect } from "react";

const weatherApiKey = "899d9c2c0f5845838dc70138240912";

const Weather = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({});
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulan bator");

  useEffect(() => {
    fetchCountriesData();
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [selectedCity]);

  useEffect(() => {
    let searchResults = [];

    countries?.map((country) => {
      return country?.cities?.map((city) => {
        if (city.toLowerCase().includes(searchValue)) {
          searchResults.push({ name: city, country: country.country });
        }
      });
    });

    setFilteredCities(searchResults.slice(0, 5));
  }, [searchValue]);

  const fetchCountriesData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      });
  };

  const fetchWeatherData = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data?.forecast?.forecastday[0]);
      });
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };

  return (
    <div className=" p-[20px] bg-[#F3F4F6] w-screen h-screen">
      <div className="w-[587px] h-[80px] bg-white rounded-3xl flex items-center px-4 relative shadow-md ">
        <input
          onChange={(event) => setSearchValue(event.target.value.toLowerCase())}
          value={searchValue}
          type="text"
          className="text-4xl outline-none"
        />
        {/* dropdown */}
        <div className="w-[587px] flex flex-col p-4 absolute top-[100px] left-0 bg-[#FFFFFFCC] rounded-2xl shadow-sm gap-2">
          {/* dropdown element */}
          {filteredCities.map((city) => {
            return (
              <div
                key={city.name + city.country}
                className="hover:bg-[#9b9b9bcc] cursor-pointer "
                onClick={() => handleCityClick(city.name)}
              >
                {city.name}, {city.country}
              </div>
            );
          })}
        </div>
        <div>{selectedCity},</div>
        <div>{weather?.day?.avgtemp_c} C</div>
      </div>
    </div>
  );
};

export default Weather;
