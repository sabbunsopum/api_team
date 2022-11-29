//하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
//강수형태(PTY) 코드 :
//(초단) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
//(단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)

export const weatherSky = [
  {
    name: "하늘1맑음",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
  {
    name: "하늘3구름많음",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
  {
    name: "하늘4흐림",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
];

export const weatherPty = [
  {
    name: "강수1비",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
  {
    name: "강수2비눈",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
  {
    name: "강수3눈",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
  {
    name: "강수5빗방울",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
  {
    name: "강수7눈날림",
    from: "./assets/img/weather/Sun behind cloud.png",
  },
];
