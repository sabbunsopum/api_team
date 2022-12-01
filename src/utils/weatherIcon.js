//하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
//강수형태(PTY) 코드 :
//(초단) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
//(단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)

export const WeatherIcon = [
  {
    name: "맑음",
    from: "./assets/img/weather/Sun.png",
  },
  {
    name: "구름",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
  {
    name: "흐림",
    from: "./assets/img/weather/Cloud.png",
  },
  {
    name: "구름비",
    from: "./assets/img/weather/Sun behind rain cloud.png",
  },
  {
    name: "구름눈",
    from: "./assets/img/weather/Sun behind snow cloud.png",
  },
  {
    name: "흐림비",
    from: "./assets/img/weather/Cloud with rain.png",
  },
  {
    name: "흐림눈",
    from: "./assets/img/weather/Cloud with snow.png",
  },
];
