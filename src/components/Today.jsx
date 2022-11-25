import React from "react";
import { useState, useEffect } from "react";
import { getVilageFcst } from "../utils/VilageFcst";
import { getMidTa } from "../utils/MidTa";
import Loader from "./Loader";

import sblc from "../assets/img/weather/Sun behind large cloud.png";
import cwlr from "../assets/img/weather/Cloud with lightning and rain.png";
import sbc from "../assets/img/weather/Sun behind cloud.png";
import dog from "../assets/img/animal/Dog.png";
import bcat from "../assets/img/animal/Black cat.png";
import wh from "../assets/img/exercise/Waving hand.png";
import oh from "../assets/img/exercise/OK hand.png";
import cld from "../assets/img/weather/Cloud.png";
import sbsc from "../assets/img/weather/Sun behind small cloud.png";
import pp from "../assets/img/animal/Potted plant.png";
import ht from "../assets/img/clothes/hoodie.png";

const Today = () => {
  const [fcst, setVilage] = useState([]);

  useEffect(() => {
    getVilageFcst().then((VilageFcst) => setVilage(VilageFcst));
  }, []);
  //단기예보 어제날짜23시
  //console.log(fcst);

  let tmn = [];
  for (let i = 0; i < fcst.length; i++) {
    if (fcst[i].category === "TMN") {
      tmn.push(fcst[i]);
    }
  }
  //console.log(tmn);
  //최저기온

  let tmx = [];
  for (let i = 0; i < fcst.length; i++) {
    if (fcst[i].category === "TMX") {
      tmx.push(fcst[i]);
    }
  }
  //console.log(tmx);
  //최고기온

  var today = new Date();

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var todaystring = year + month + day;
  //오늘날짜

  var weekday = new Array(7);
  weekday[0] = "일";
  weekday[1] = "월";
  weekday[2] = "화";
  weekday[3] = "수";
  weekday[4] = "목";
  weekday[5] = "금";
  weekday[6] = "토";

  let gd = today.getDay();

  var toDow = weekday[gd];
  var toDow1 = weekday[gd + (gd + 1 > 6 ? -gd + 1 : 1)];
  var toDow2 = weekday[gd + (gd + 2 > 6 ? -gd + 2 : 2)];
  var toDow3 = weekday[gd + (gd + 3 > 6 ? -gd + 3 : 3)];
  var toDow4 = weekday[gd + (gd + 4 > 6 ? -gd + 4 : 4)];

  console.log(toDow);
  console.log(toDow1);
  console.log(toDow2);
  console.log(toDow3);
  console.log(toDow4);
  //요일구하기

  const [mid, setMid] = useState([]);
  useEffect(() => {
    getMidTa().then((MidTa) => setMid(MidTa));
  }, []);
  //중기예보
  //console.log(mid);

  if (!fcst?.length && !mid?.length) return <Loader />;
  //로딩
  return (
    <main id="main">
      <div class="wrap gmark">
        <div class="left">
          <div class="title">
            <h1>OWATD</h1>
            <p>
              바쁜 일상 속 당신의 하루를
              <br />
              미리 준비해드립니다 :&gt;
            </p>
          </div>
          <div class="week card">
            <ul>
              <li>
                <h3>TODAY</h3>
                <div class="icon">
                  <img src={sbc} alt="todayicon" />
                </div>
                <div class="temp">
                  <span class="high">{tmn[0].fcstValue}</span>
                  <span class="low">{tmx[0].fcstValue}</span>
                </div>
              </li>
              <li>
                <h3>THU</h3>
                <div class="icon">
                  <img src={sblc} alt="" />
                </div>
                <div class="temp">
                  <span class="high">{tmn[1].fcstValue}</span>
                  <span class="low">{tmx[1].fcstValue}</span>
                </div>
              </li>
              <li>
                <h3>FRI</h3>
                <div class="icon">
                  <img src={cld} alt="" />
                </div>
                <div class="temp">
                  <span class="high">{tmn[2].fcstValue}</span>
                  <span class="low">{tmx[2].fcstValue}</span>
                </div>
              </li>
              <li>
                <h3>SAT</h3>
                <div class="icon">
                  <img src={cwlr} alt="" />
                </div>
                <div class="temp">
                  <span class="high">{mid.taMin3}</span>
                  <span class="low">{mid.taMax3}</span>
                </div>
              </li>
              <li>
                <h3>SUN</h3>
                <div class="icon">
                  <img src={sbsc} alt="" />
                </div>
                <div class="temp">
                  <span class="high">{mid.taMin4}</span>
                  <span class="low">{mid.taMax4}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="exercise card">
            <p>오늘 운동할 계획이 있으신가요?</p>
            <span class="yes">
              <img src={oh} alt="" />
            </span>
            <span class="no">
              <img src={wh} alt="" />
            </span>
          </div>
          <div class="saying card">
            <p>인생에서 가장 의미없이 보낸 날은 웃지 않고 보낸 날이다.</p>
            <span class="man">E. E. 커밍스</span>
          </div>
          <div class="animal card">
            <p>
              키우시는 반려동물을 선택해주세요 !<br />
              없다면 화분을 눌러주세요 !
            </p>
            <input class="gmark" type="text" placeholder="이름이 무엇인가요?" />
            <span class="dog">
              <img src={dog} alt="" />
            </span>
            <span class="plants">
              <img src={pp} alt="" />
            </span>
            <span class="cat">
              <img src={bcat} alt="" />
            </span>
          </div>
        </div>
        <div class="right">
          <div class="weather card">
            <div class="date">{todaystring} &lt;수&gt;</div>
            <div class="wea">
              <img src={sbc} alt="" />
            </div>
            <tem class="tem">{fcst[0].fcstValue}℃</tem>
            <div class="more">
              <div class="wind">{fcst[4].fcstValue}m/s</div>
              <div class="hum">{fcst[10].fcstValue}%</div>
            </div>
          </div>
          <div class="clothes card">
            <img src={ht} alt="" />
            <p>
              약간은 쌀쌀할 수 있어요 !<br />
              긴팔이나 가디건을 추천드립니다.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Today;
