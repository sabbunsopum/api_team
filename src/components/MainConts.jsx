import React from "react";
import { useState, useEffect } from "react";

import sblc from "../assets/img/weather/Sun behind large cloud.png";
import sbc from "../assets/img/weather/Sun behind cloud.png";
import dog from "../assets/img/animal/Dog.png";
import cat from "../assets/img/animal/Black cat.png";

// xml을 json으로 변환해주는 xmlToJson함수 선언
function xmlToJson(xml) {
  // Create the return object
  var obj = {};

  if (xml.nodeType == 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If all text nodes inside, get concatenated text from them.
  var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
    return node.nodeType === 3;
  });
  if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
    obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
      return text + node.nodeValue;
    }, "");
  } else if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}

//함수선언
export const getXMLfromAPI = async () => {
  const url =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
  const authKey =
    "WcttXLuCO1vJnUBediRRYQz7BP%2BhjkelbvTU0PH0D5tQmCkgRc3%2FQkw9HLvyKjZfJZZPJUJYlYvMBHZwWoBNTA%3D%3D";
  const reqURL =
    url +
    "?serviceKey=" +
    authKey +
    "&numOfRows=809&pageNo=1&base_date=20221123&base_time=0500&nx=55&ny=127";

  // async와 await을 통해 바로 XML을 JSON으로 변환
  const response = await fetch(reqURL);
  const xmlString = await response.text();
  var XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
  //console.log(xmlToJson(XmlNode));
  const data = xmlToJson(XmlNode).response.body.items.item;

  return data;
};

//함수호출
//getXMLfromAPI();

const MainConts = () => {
  const [on, setOn] = useState([]);

  useEffect(() => {
    getXMLfromAPI()
      .then((data) => console.log(data))
      .then((data) => setOn(data));
  }, []);
  return (
    <main id="main">
      <div class="wrap gmark">
        <div class="left">
          <div class="title">
            <h1>OWATD</h1>
            <p>
              바쁜 일상 속 당신의 하루를
              <br />
              미리 준비해드립니다 :
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
                  <img
                    src="./assets/img/weather/Sun behind large cloud.png"
                    alt=""
                  />
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
                  <img
                    src="./assets/img/weather/Cloud with lightning and rain.png"
                    alt=""
                  />
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
              <img src="./assets/img/exercise/OK hand.png" alt="" />
            </span>
            <span class="no">
              <img src="./assets/img/exercise/Waving hand.png" alt="" />
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
            <div class="date">22/11/16수</div>
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

export default MainConts;
