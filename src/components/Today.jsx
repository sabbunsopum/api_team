import React from "react";
import sblc from "../assets/img/weather/Sun behind large cloud.png";
import cwlr from "../assets/img/weather/Cloud with lightning and rain.png";
import sbc from "../assets/img/weather/Sun behind cloud.png";
import dog from "../assets/img/animal/Dog.png";
import cat from "../assets/img/animal/Black cat.png";
import wh from "../assets/img/exercise/Waving hand.png";
import oh from "../assets/img/exercise/OK hand.png";

const Today = ({ on }) => {
  //console.log(on);
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
                  <img src={sblc} alt="todayicon" />
                </div>
                <div class="temp">
                  <span class="high">5</span>
                  <span class="low">12</span>
                </div>
              </li>
              <li>
                <h3>THU</h3>
                <div class="icon">
                  <img src={sblc} alt="" />
                </div>
                <div class="temp">
                  <span class="high">4</span>
                  <span class="low">14</span>
                </div>
              </li>
              <li>
                <h3>FRI</h3>
                <div class="icon">
                  <img src="./assets/img/weather/Cloud.png" alt="" />
                </div>
                <div class="temp">
                  <span class="high">3</span>
                  <span class="low">15</span>
                </div>
              </li>
              <li>
                <h3>SAT</h3>
                <div class="icon">
                  <img src={cwlr} alt="" />
                </div>
                <div class="temp">
                  <span class="high">6</span>
                  <span class="low">14</span>
                </div>
              </li>
              <li>
                <h3>SUN</h3>
                <div class="icon">
                  <img
                    src="./assets/img/weather/Sun behind small cloud.png"
                    alt=""
                  />
                </div>
                <div class="temp">
                  <span class="high">8</span>
                  <span class="low">16</span>
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
              <img src="./assets/img/animal/Potted plant.png" alt="" />
            </span>
            <span class="cat">
              <img src={cat} alt="" />
            </span>
          </div>
        </div>
        <div class="right">
          <div class="weather card">
            <div class="date">22/11/16 &lt;수&gt;</div>
            <div class="wea">
              <img src={sbc} alt="" />
            </div>
            <tem class="tem">22℃</tem>
            <div class="more">
              <div class="wind">19km/h</div>
              <div class="hum">22%</div>
            </div>
          </div>
          <div class="clothes card">
            <img src="./assets/img/clothes/후드티.png" alt="" />
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
