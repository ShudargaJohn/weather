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

export default function Home() {
  const [weather, setWeather] = useState({});
  const [input, setInput] = useState("London");
  const [city, setCity] = useState("London");
  const weatherApiKey = "b48e5f3c5d9a9ebf1feecc556a34a659";
  useEffect(() => {
    let url = ` https://api.openweathermap.org/data/2.5/weather?q=London&appid=${weatherApiKey}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data.list[0].main));
  }, [city]);
  const changeCity = (e) => {
    e.preventDefault();
    setCity(input);
  };
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

        <div className="z-10 flex justify-center  items-center h-[100%] ">
          <form
            onSubmit={(e) => changeCity(e)}
            className=" flex z-10 absolute bg-[#FFFFFF] rounded-[48px] search-shadow border-none h-[80px] items-center justify-center top-[48px] left-[5%]"
          >
            <div className=" h-[44px] flex justify-center gap-[16px] ">
              <Search />
              <input
                type="text"
                placeholder="Search"
                className=" font-bold text-[32px] text-black outline-0 opacity-[0.2] w-[75%]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Enter</button>
            </div>
          </form>
          <div className="day-time h-[832px] w-[414px] bg-[#FFFFFFBF] rounded-[48px] flex flex-col z-50 absolute justify-center  items-center  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ">
            <div className="w-[100%] flex justify-center flex-col items-center p-[56px]">
              <div className="location flex justify-between w-[90%]">
                <div>
                  <p className=" font-[Manrope] text-[18px] font-medium text-[#9CA3AF]">
                    Date
                  </p>
                  <p className=" font-[Manrope] text-[48px] font-extrabold text-[#111827]">
                    City
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
                  {weather.temp}°
                </p>
                <p className=" text-[#FF8E27] font-[Manrope] text-[24px] font-extrabold">
                  Status
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
              <div className="location flex justify-between w-[90%]">
                <div>
                  <p className=" font-[Manrope] text-[18px] font-medium text-[#9CA3AF]">
                    Date
                  </p>
                  <p className=" font-[Manrope] text-[48px] font-extrabold text-white">
                    City
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
              <div className="w-[80%]">
                <p className=" text-[144px] font-extrabold night-temp-color">
                  26°
                </p>
                <p className=" text-[#777CCE] font-[Manrope] text-[24px] font-extrabold">
                  Status
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
