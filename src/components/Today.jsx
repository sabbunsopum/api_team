import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { getVilageFcst } from "../utils/VilageFcst";
import { getMidTa } from "../utils/MidTa";
import { getUltraSrtFcst } from "../utils/UltraSrtFcst";

import Loader from "./Loader";

import Sblc from "../assets/img/weather/Sun behind large cloud.png";
import Cwlr from "../assets/img/weather/Cloud with lightning and rain.png";
import Cwr from "../assets/img/weather/Cloud with rain.png";
import Cws from "../assets/img/weather/Cloud with snow.png";

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

  const exercise = useRef(null);
  const exerciseFront = useRef(null);
  const exerciseBackOk = useRef(null);
  const exerciseBackWaving = useRef(null);
  const animalFront = useRef(null);
  const animalBackdog = useRef(null);
  const animalBackcat = useRef(null);
  const animalBackPlant = useRef(null);

    const exBtn1 = () => {
      exerciseFront.current.style.display = 'none';
      exerciseBackOk.current.style.display = 'flex';
    }

    const exBtn2 = () => {
      exerciseFront.current.style.display = 'none';
      exerciseBackWaving.current.style.display = 'flex';
    }

    const onPlant = () => {
      animalFront.current.style.display = 'none';
      animalBackPlant.current.style.display = 'flex';
    }

    const onDog = () => {
      animalFront.current.style.display = 'none';
      animalBackdog.current.style.display = 'flex';
    }

    const onCat = () => {
      animalFront.current.style.display = 'none';
      animalBackcat.current.style.display = 'flex';
    }

    

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
  const [mid, setMid] = useState([]);
  const [fcst, setVilage] = useState([]);

  let t1h = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "T1H") {
      t1h.push(ultra[i]);
    }
  }
  //console.log(t1h);
  //????????????

  let sky = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "SKY") {
      sky.push(ultra[i]);
    }
  }
  //console.log(sky);
  //??????

  let pty = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "PTY") {
      pty.push(ultra[i]);
    }
  }
  //console.log(pty);
  //??????

  let reh = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "REH") {
      reh.push(ultra[i]);
    }
  }
  //console.log(REH);
  //??????

  let wsd = [];
  for (let i = 0; i < ultra.length; i++) {
    if (ultra[i].category === "WSD") {
      wsd.push(ultra[i]);
    }
  }
  //console.log(WSD);
  //??????

  useEffect(() => {
    getVilageFcst().then((VilageFcst) => setVilage(VilageFcst));
  }, []);
  //???????????? ?????? 23?????????
  //console.log(fcst);

  let tmn = [];
  for (let i = 0; i < fcst.length; i++) {
    if (fcst[i].category === "TMN") {
      tmn.push(fcst[i]);
    }
  }
  //console.log(tmn);
  //????????????

  let tmx = [];
  for (let i = 0; i < fcst.length; i++) {
    if (fcst[i].category === "TMX") {
      tmx.push(fcst[i]);
    }
  }
  //console.log(tmx);
  //????????????

  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var todaystring = year + month + day;
  //????????????

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
  //????????? ?????????

  useEffect(() => {
    getUltraSrtFcst().then((UltraSrtFcst) => setUltra(UltraSrtFcst));
  }, []);
  //console.log(ultra);
  //???????????????

  useEffect(() => {
    getMidTa().then((MidTa) => setMid(MidTa));
  }, []);
  //????????????
  //console.log(mid);


  if (!ultra?.length) return <Loader />;
  if (!fcst?.length && !mid?.length) return <Loader />;
  //??????

  let tdi = 0;
  if(sky[0].fcstValue === "1")
  {tdi = Sun}
  if(sky[0].fcstValue === "3")
  {tdi = Sbc}
  if(sky[0].fcstValue === "3" && pty[0].fcstValue === "1")
  {tdi = Sbrc}
  if(sky[0].fcstValue === "3" && pty[0].fcstValue === "2")
  {tdi = Sbrc}
  if(sky[0].fcstValue === "3" && pty[0].fcstValue === "3")
  {tdi = Sbsnc}
  if(sky[0].fcstValue === "3" && pty[0].fcstValue === "5")
  {tdi = Sbrc}
  if(sky[0].fcstValue === "3" && pty[0].fcstValue === "6")
  {tdi = Sbsnc}
  if(sky[0].fcstValue === "3" && pty[0].fcstValue === "7")
  {tdi = Sbsnc}
  if(sky[0].fcstValue === "4")
  {tdi = Cld}
  if(sky[0].fcstValue === "4" && pty[0].fcstValue === "1")
  {tdi = Cwr}
  if(sky[0].fcstValue === "4" && pty[0].fcstValue === "2")
  {tdi = Cwr}
  if(sky[0].fcstValue === "4" && pty[0].fcstValue === "3")
  {tdi = Cws}
  if(sky[0].fcstValue === "4" && pty[0].fcstValue === "5")
  {tdi = Cwr}
  if(sky[0].fcstValue === "4" && pty[0].fcstValue === "6")
  {tdi = Cws}
  if(sky[0].fcstValue === "4" && pty[0].fcstValue === "7")
  {tdi = Cws}
  //??????????????????
  //console.log(tdi);
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
              ?????? ?????? ??? ????????? ?????????
              <br />
              ?????? ????????????????????? :&gt;
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
                  <span className="high">{mid.taMin4}</span>
                  <span className="low">{mid.taMax4}</span>
                </div>
              </li>
              <li>
                <h3>{weekday[gd + 4]}</h3>
                <div className="icon">
                  <img src={Sbsc} alt="" />
                </div>

                <div className="temp">
                  <span className="high">{mid.taMin5}</span>
                  <span className="low">{mid.taMax5}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="exercise card"  ref={exercise}>
            <div className="exercise__inner">
              <div className="front" ref={exerciseFront}>
                <p>?????? ????????? ????????? ????????????????</p>
                <span className="ok"  >
                  <img src={Oh} alt="" onClick={() => {exBtn1();}}/>
                </span>
                <span className="waving">
                  <img src={Wh} alt="" onClick={() => {exBtn2();}}/>
                </span>
              </div>
              <div className="back no" ref={exerciseBackWaving}>
                <img src={Hh} alt="" />
                <p>
                  ????????? ????????? ????????? ?????? !<br /> ???????????? ??????????????? ??????
                  ??????????????? :D
                </p>
              </div>
              <div className="back yes" ref={exerciseBackOk}>
                <img src={Ex1} alt="" />
                <p>
                  ????????? ????????? ?????? ???????????? !<br /> ??? ??? ???????????? ????????????
                  ????????? ?
                </p>
              </div>
            </div>
          </div>
          <div className="saying card">
            <p>{say[saya].cont}</p>
            <span className="man">{say[saya].name}</span>
          </div>

          <div className="animal card">
            <div className="front" ref={animalFront}>
              <p>
                ???????????? ??????????????? ?????????????????? !<br />
                ????????? ????????? ??????????????? !
              </p>
              {/* <input
                className="gmark"
                type="text"
                placeholder="????????? ????????????????"
              /> */}
              <span className="dog">
                <button type="submit" onClick={() => {onDog();}}>
                  <img src={Dog} alt="?????????" />
                </button>
              </span>
              <span className="plants">
                <button type="submit" onClick={() => {onPlant();}}>
                  <img src={Pp} alt="??????" />
                </button>
              </span>
              <span className="cat">
                <button type="submit" onClick={() => {onCat();}}>
                  <img src={Bcat} alt="?????????" />
                </button>
              </span>
            </div>
            <div className="back dog" ref={animalBackdog}>
              <div className="bg">
                <img className="i1" src={Tree} alt="??????" />
                <img className="i2" src={Blossom} alt="???" />
                <img className="i3" src={Tree} alt="??????" />
                <img className="i4" src={Dog2} alt="???????????? ?????????" />
                <img className="i5" src={Tree} alt="??????" />
              </div>
              <p>
                ???????????? ???????????? ?????? ???????????? :D <br />
                ??????, ?????? ???????????? ???????????? ???????????? ????????? ?????? ??????????????? !
              </p>
            </div>
            <div className="back cat" ref={animalBackcat}>
              <div className="bg">
                <img className="i1" src={Tree} alt="??????" />
                <img className="i2" src={Blossom} alt="???" />
                <img className="i3" src={Tree} alt="??????" />
                <img className="i4" src={Bcat} alt="???????????? ?????????" />
                <img className="i5" src={Tree} alt="??????" />
              </div>
              <p>
                ???????????? ???????????? ?????? ???????????? :D <br />
                ??????, ?????? ???????????? ???????????? ???????????? ????????? ?????? ??????????????? !
              </p>
            </div>
            <div className="back plant" ref={animalBackPlant}>
              <div className="bg">
                <img className="i1" src={Tree} alt="??????" />
                <img className="i2" src={Blossom} alt="???" />
                <img className="i3" src={Tree} alt="??????" />
                <img className="i4" src={Pp} alt="???????????? ??????" />
                <img className="i5" src={Tree} alt="??????" />
              </div>
              <p>
              ??????????????? ?????? ??? ??? ?????? ??????????????? ???????????? ??????????????? ?????????????" <br/>
              * ?????? ????????? ???????????? ???????????? ????????? ????????? ?????? ????????? ????????? ??????????????????.
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
            <div className="tem">{t1h[0].fcstValue}???</div>
            <div className="more">
              <div className="wind">{wsd[0].fcstValue}m/s</div>
              <div className="hum">{reh[0].fcstValue}%</div>
            </div>
          </div>
          <div className="clothes card">
            <img src={Ht} alt="" />
            <p>
              ????????? ????????? ??? ????????? !<br />
              ???????????? ???????????? ??????????????????.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Today;
