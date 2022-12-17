// xml을 json으로 변환해주는 xmlToJson함수 선언
function xmlToJson(xml) {
  // Create the return object
  var obj = {};

  if (xml.nodeType === 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
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

var today = new Date();

var year = today.getFullYear();
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var day = ("0" + (today.getDate())).slice(-2);
var hours = today.getHours()

if(hours <= 6 ){
  day = ("0" + (today.getDate()-1)).slice(-2);
  hours = "18";
}else{
  hours = "06";
}
var todaystring = year + month + day;
console.log(todaystring);


//함수선언
export const getVilageFcst = async () => {
  const url =
    "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
  const authKey =
    "WcttXLuCO1vJnUBediRRYQz7BP%2BhjkelbvTU0PH0D5tQmCkgRc3%2FQkw9HLvyKjZfJZZPJUJYlYvMBHZwWoBNTA%3D%3D";
  const reqURL =
    url +
    "?serviceKey=" +
    authKey +
    `&numOfRows=1000&base_date=${todaystring}&base_time=${hours}00&nx=61&ny=126`;

  // async와 await을 통해 바로 XML을 JSON으로 변환
  const response = await fetch(reqURL);
  const xmlString = await response.text();
  var XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
  const VilageFcst = xmlToJson(XmlNode).response.body.items.item;

  return VilageFcst;
};
