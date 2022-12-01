import React from "react";

import { useState, useEffect } from "react";
import { getVilageFcst } from "../utils/VilageFcst";
import { getMidTa } from "../utils/MidTa";
import { getUltraSrtFcst } from "../utils/UltraSrtFcst";

import Loader from "./Loader";

import Sblc from "../assets/img/weather/Sun behind large cloud.png";
import Cwlr from "../assets/img/weather/Cloud with lightning and rain.png";
import Dog from "../assets/img/animal/Dog.png";
import Bcat from "../assets/img/animal/Black cat.png";
import Wh from "../assets/img/exercise/Waving hand.png";
import Oh from "../assets/img/exercise/OK hand.png";
import Hh from "../assets/img/exercise/Heart hands.png";
import Ex1 from "../assets/img/exercise/Badminton.png";
import Sbsc from "../assets/img/weather/Sun behind small cloud.png";
import Pp from "../assets/img/animal/Potted plant.png";
import Tree from "../assets/img/animal/tree.png";
import Blossom from "../assets/img/animal/Blossom.png";
import Dog2 from "../assets/img/animal/Guide dog.png";
import Ht from "../assets/img/clothes/hoodie.png";

import Sun from "../assets/img/weather/Sun.png";
import Sbc from "../assets/img/weather/Sun behind cloud.png";
import Cld from "../assets/img/weather/Cloud.png";
import Sbrc from "../assets/img/weather/Sun behind rain cloud.png";
import Sbsnc from "../assets/img/weather/Sun behind snow cloud.png";

import { say } from "../utils/say";

let saya = Math.floor(Math.random() * 10);
// console.log(saya);

const Today = () => {
  // function exerciseFilp() {
  //   const exerciseFront = document.querySelector(".exercise .front");
  //   const exerciseBackOk = document.querySelector(".exercise .back.yes");
  //   const exerciseBackWaving = document.querySelector(".exercise .back.no");
  //   const exBtn1 = document.querySelector(".exercise .front .ok");
  //   const exBtn2 = document.querySelector(".exercise .front .waving");

  //   exBtn1.addEventListener("click", () => {
  //     exerciseFront.style.display = "none";
  //     exerciseBackOk.style.display = "flex";
  //   });

  //   exBtn2.addEventListener("click", () => {
  //     exerciseFront.style.display = "none";
  //     exerciseBackWaving.style.display = "flex";
  //   });
  // }
  // exerciseFilp();
  // const exerciseFront = document.querySelector(".exercise .front");
  // const exerciseBackOk = document.querySelector(".exercise .back.yes");

  // function exerciseFilp() {
  //   exerciseFront.style.display = "none";
  //   exerciseBackOk.style.display = "flex";
  // }

  const [ultra, setUltra] = useState([]);

  useEffect(() => {
    getUltraSrtFcst().then((UltraSrtFcst) => setUltra(UltraSrtFcst));
  }, []);
  //console.log(ultra);
  //초단기예보

  let t1h = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "T1H") {
      t1h.push(ultra[i]);
    }
  }
  //console.log(t1h);
  //현재기온

  let sky = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "SKY") {
      sky.push(ultra[i]);
    }
  }
  console.log(sky);
  //하늘

  let pty = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "PTY") {
      pty.push(ultra[i]);
    }
  }
  console.log(pty);
  //대기

  let reh = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "REH") {
      reh.push(ultra[i]);
    }
  }
  //console.log(REH);
  //습도

  let wsd = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "WSD") {
      wsd.push(ultra[i]);
    }
  }
  //console.log(WSD);
  //풍속

  const [fcst, setVilage] = useState([]);
  useEffect(() => {
    getVilageFcst().then((VilageFcst) => setVilage(VilageFcst));
  }, []);
  //단기예보 어제 23시기준
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
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  weekday[7] = "Sun";
  weekday[8] = "Mon";
  weekday[9] = "Tue";
  weekday[10] = "Wed";
  let gd = today.getDay();
  //console.log(weekday[gd]);
  //요일로 바꾸기

  const [mid, setMid] = useState([]);
  useEffect(() => {
    getMidTa().then((MidTa) => setMid(MidTa));
  }, []);
  //중기예보
  //console.log(mid);

  function doAction() {
    alert("이름을 알려주세요");
  }

  if (!ultra?.length) return <Loader />;
  if (!fcst?.length && !mid?.length) return <Loader />;
  //로딩

  let tdi = 0;
  sky[0].fcstValue === "1"
    ? (tdi = Sun)
    : sky[0].fcstValue === "3"
    ? (tdi = Sbc)
    : sky[0].fcstValue === "3" && pty[0].fcstValue === "1"
    ? (tdi = Sbrc)
    : sky[0].fcstValue === "3" && pty[0].fcstValue === "2"
    ? (tdi = Sbrc)
    : sky[0].fcstValue === "3" && pty[0].fcstValue === "3"
    ? (tdi = Sbsnc)
    : sky[0].fcstValue === "3" && pty[0].fcstValue === "5"
    ? (tdi = Sbrc)
    : sky[0].fcstValue === "3" && pty[0].fcstValue === "6"
    ? (tdi = Sbsnc)
    : sky[0].fcstValue === "3" && pty[0].fcstValue === "7"
    ? (tdi = Sbsnc)
    : sky[0].fcstValue === "4"
    ? (tdi = Cld)
    : sky[0].fcstValue === "4" && pty[0].fcstValue === "1"
    ? (tdi = Sbrc)
    : sky[0].fcstValue === "4" && pty[0].fcstValue === "2"
    ? (tdi = Sbrc)
    : sky[0].fcstValue === "4" && pty[0].fcstValue === "3"
    ? (tdi = Sbsnc)
    : sky[0].fcstValue === "4" && pty[0].fcstValue === "5"
    ? (tdi = Sbrc)
    : sky[0].fcstValue === "4" && pty[0].fcstValue === "6"
    ? (tdi = Sbsnc)
    : sky[0].fcstValue === "4" && pty[0].fcstValue === "7"
    ? (tdi = Sbsnc)
    : console.log(tdi);
  //투데이아이콘

  return (
    <main id="main">
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self'; style-src 'self'; "
      ></meta>
      <div className="wrap gmark">
        <div className="left">
          <div className="title">
            <h1>OWATD</h1>
            <p>
              바쁜 일상 속 당신의 하루를
              <br />
              미리 준비해드립니다 :&gt;
            </p>
          </div>
          <div className="week card">
            <ul>
              <li>
                <h3>TODAY</h3>
                <div className="icon">
                  <img src={Sbc} alt="todayicon" />
                </div>

                <div className="temp">
                  <span className="high">{tmn[0].fcstValue.slice(0, -2)}</span>
                  <span className="low">{tmx[0].fcstValue.slice(0, -2)}</span>
                </div>
              </li>
              <li>
                <h3>{weekday[gd + 1]}</h3>
                <div className="icon">
                  <img src={Sblc} alt="" />
                </div>

                <div className="temp">
                  <span className="high">{tmn[1].fcstValue.slice(0, -2)}</span>
                  <span className="low">{tmx[1].fcstValue.slice(0, -2)}</span>
                </div>
              </li>
              <li>
                <h3>{weekday[gd + 2]}</h3>
                <div className="icon">
                  <img src={Cld} alt="" />
                </div>

                <div className="temp">
                  <span className="high">{tmn[2].fcstValue.slice(0, -2)}</span>
                  <span className="low">{tmx[2].fcstValue.slice(0, -2)}</span>
                </div>
              </li>
              <li>
                <h3>{weekday[gd + 3]}</h3>
                <div className="icon">
                  <img src={Cwlr} alt="" />
                </div>

                <div className="temp">
                  <span className="high">{mid.taMin3}</span>
                  <span className="low">{mid.taMax3}</span>
                </div>
              </li>
              <li>
                <h3>{weekday[gd + 4]}</h3>
                <div className="icon">
                  <img src={Sbsc} alt="" />
                </div>

                <div className="temp">
                  <span className="high">{mid.taMin4}</span>
                  <span className="low">{mid.taMax4}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="exercise card">
            <div className="exercise__inner">
              <div className="front">
                <p>오늘 운동할 계획이 있으신가요?</p>
                <span className="ok">
                  <img src={Oh} alt="" />
                </span>
                <span className="waving">
                  <img src={Wh} alt="" />
                </span>
              </div>
              <div className="back no">
                <img src={Hh} alt="" />
                <p>
                  건강한 삶에서 휴식은 필수 !<br /> 중간중간 스트레칭도 잊지
                  말아주세요 :D
                </p>
              </div>
              <div className="back yes">
                <img src={Ex1} alt="" />
                <p>
                  햇빛이 강하지 않은 하루에요 !<br /> 집 앞 공원에서 배드민턴
                  어때요 ?
                </p>
              </div>
            </div>
          </div>
          <div className="saying card">
            <p>{say[saya].cont}</p>
            <span className="man">{say[saya].name}</span>
          </div>
          <div className="animal card">
            <div className="front">
              <p>
                키우시는 반려동물을 선택해주세요 !<br />
                없다면 화분을 눌러주세요 !
              </p>
              <input
                className="gmark"
                type="text"
                placeholder="이름이 무엇인가요?"
              />
              <span className="dog">
                <button type="submit" onClick={doAction} className="tipBtn">
                  <img src={Dog} alt="강아지" />
                </button>
              </span>
              <span className="plants">
                <button type="submit" onClick={doAction} className="tipBtn">
                  <img src={Pp} alt="화분" />
                </button>
              </span>
              <span className="cat">
                <button type="submit" onClick={doAction} className="tipBtn">
                  <img src={Bcat} alt="고양이" />
                </button>
              </span>
            </div>
            <div className="back dog">
              <div className="bg">
                <img className="i1" src={Tree} alt="나무" />
                <img className="i2" src={Blossom} alt="꽃" />
                <img className="i3" src={Tree} alt="나무" />
                <img className="i4" src={Dog2} alt="산책하는 강아지" />
                <img className="i5" src={Tree} alt="나무" />
              </div>
              <p>
                ‘ㅇㅇ’와 산책하기 좋은 날이에요 :D <br />
                다만, 늦은 시간에는 긴팔이나 가디건을 챙기는 것을 추천드려요 !
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="weather card">
            <div className="date">
              {todaystring} &lt;{weekday[gd]}&gt;
            </div>
            <div className="wea">
              <img src={tdi} alt="" />
            </div>
            <div className="tem">{t1h[0].fcstValue}℃</div>
            <div className="more">
              <div className="wind">{wsd[0].fcstValue}m/s</div>
              <div className="hum">{reh[0].fcstValue}%</div>
            </div>
          </div>
          <div className="clothes card">
            <img src={Ht} alt="" />
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
