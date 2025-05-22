import { DarkSide } from "../components/darkSide";
import { Search } from "../components/search";
import { Location } from "../components/location";
import { HomeButton } from "../components/home";
import { Heart } from "../components/heart";
import { User } from "../components/user";
import { Locate } from "../components/locate";
import { Pinecone } from "../components/pinecone";
import { FirstCircle } from "../components/first-circle";
import { SecondCircle } from "../components/second-circle";
import { ThirdCircle } from "../components/third-circle";
import { FourthCircle } from "../components/fourth-circle";
import { FifthCircle } from "../components/fifth-circle";
import { SixthCircle } from "../components/sixth-circle";
import { SecondCircleBlack } from "../components/second-circle-black";
import { ThirdCircleBlack } from "../components/third-circle-black";
import { FourthCircleBlack } from "../components/fourth-circle-black";
import { FifthCircleBlack } from "../components/fifth-circle-black";
import { SixthCircleBlack } from "../components/sixth-circle-black";
import { useEffect, useState } from "react";

const weatherApiKey = "899d9c2c0f5845838dc70138240912";

export default function Home() {
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
        setWeather(data);
        console.log(data.forecast);
      });
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };
  console.log(weather);

  return (
    <div className=" flex justify-center relative ">
      <Pinecone />

      <div className="light-side bg-[#F3F4F6] w-[800px] h-[1200px] relative left-0 top-0 ">
        <div className=" w-[800px] h-[1200px] absolute z-0"></div>
        <FirstCircle />
        <SecondCircle />
        <ThirdCircle />
        <FourthCircle />
        <FifthCircle />
        <SixthCircle />

        <div className="z-50 flex justify-center  items-center h-[100%] ">
          <div className=" flex z-50 absolute bg-[#FFFFFF] rounded-[48px] search-shadow border-none h-[80px] items-center justify-center top-[48px] left-[5%]">
            <div className=" h-[44px] flex justify-center gap-[16px] ">
              <Search />
              <input
                type="text"
                placeholder="Search"
                className=" font-bold text-[32px] text-black outline-0 opacity-[0.2] w-[75%]"
                onChange={(event) =>
                  setSearchValue(event.target.value.toLowerCase())
                }
                value={searchValue}
              />
              {searchValue !== "" && (
                <div className="w-[587px] flex flex-col z-50  p-4 absolute top-[100px] left-0 bg-[#ffffff] rounded-[48px] shadow-sm gap-2">
                  {filteredCities.map((city) => {
                    return (
                      <div
                        key={city.name + city.country}
                        className="hover:bg-[#9b9b9b]   cursor-pointer font-bold text-[32px] "
                        onClick={() => handleCityClick(city.name)}
                      >
                        {city.name}, {city.country}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="day-time h-[832px] w-[414px] bg-[#FFFFFFBF] rounded-[48px] flex flex-col z-10 absolute justify-center  items-center  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ">
            <div className="w-[100%] flex justify-center flex-col items-center p-[56px]">
              <div className="location flex justify-between w-[90%]">
                <div>
                  <p className=" font-[Manrope] text-[18px] font-medium text-[#9CA3AF]">
                    {weather?.forecast?.forecastday[0].date}
                  </p>
                  <p className=" font-[Manrope] h-[72px] text-[48px] font-extrabold text-[#111827]">
                    {weather?.location?.name}
                  </p>
                </div>
                <Location />
              </div>
              <img
                src="./images/sun.png"
                alt=""
                className="h-[262px] w-[262px]"
              />
            </div>

            <div className="w-[100%] flex flex-col items-center">
              <div className="w-[80%]">
                <p className=" text-[144px] font-extrabold temp-color">
                  {weather?.forecast?.forecastday[0].hour[14].temp_c}°
                </p>
                <p className=" text-[#FF8E27] font-[Manrope] text-[24px] font-extrabold">
                  {weather?.forecast?.forecastday[0].hour[14].condition.text}
                </p>
              </div>
              <div className="flex w-[80%] justify-between mt-[48px]">
                <HomeButton />
                <Locate />
                <Heart />
                <User />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-side w-[800px] h-[1200px]  relative">
        <SecondCircleBlack />
        <ThirdCircleBlack />
        <FourthCircleBlack />
        <FifthCircleBlack />
        <SixthCircleBlack />
        <div className=" w-[800px] h-[1200px] absolute z-0 bg-[#F3F4F6]"></div>
        <DarkSide />
        <div className="z-50 absolute flex justify-center  items-center h-[100%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <div className="night-time h-[832px] w-[414px]  backdrop-blur-md  rounded-[48px] flex flex-col unique-bg border-[8px] border-[#111827]">
            <div className="w-[100%] flex justify-center flex-col items-center p-[56px]">
              <div className="location flex justify-between w-[95%]">
                <div>
                  <p className=" font-[Manrope] text-[18px] font-medium text-[#9CA3AF]">
                    {weather?.forecast?.forecastday[0].date}
                  </p>
                  <p className=" font-[Manrope] h-[72px] text-[48px] font-extrabold text-white">
                    {weather?.location?.name}
                  </p>
                </div>
                <Location />
              </div>
              <img
                src="./images/moon.png"
                alt=""
                className="h-[262px] w-[262px]"
              />
            </div>

            <div className="w-[100%] flex flex-col items-center">
              <div className="w-[85%]">
                <p className=" text-[144px] font-extrabold night-temp-color">
                  {weather?.forecast?.forecastday[0].hour[5].temp_c}°
                </p>
                <p className=" text-[#777CCE] font-[Manrope] text-[24px] font-extrabold">
                  {weather?.forecast?.forecastday[0].hour[5].condition.text}
                </p>
              </div>
              <div className="flex w-[80%] justify-between mt-[48px]">
                <HomeButton />
                <Locate />
                <Heart />
                <User />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
