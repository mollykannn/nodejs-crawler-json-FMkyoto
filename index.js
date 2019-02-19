const superagent= require('superagent');
const Throttle = require('superagent-throttle');
const fs = require("fs");
let throttle = new Throttle({
  active: true,
  rate: 40,
  ratePer: 40000,
  concurrent: 1
})

const startDate = "2018-01-01";
const endDate = "2019-01-01";
const weekly = 1; // 0->Sun, 1->Mon..... 6->Sat
const startTime = "21:00:00";
const endTime = "22:00:00";

var array = getDate(startDate,endDate,weekly);

array.forEach(element => {
  var s_date = element.toISOString().substring(0, 10);
  superagent.get('http://get.fm-kyoto.jp/nowonair?date=' + s_date).use(throttle.plugin()).then((res, err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Date: " + s_date)
      if(s_date == "2019-02-04") {
        endTime = "23:00:00";
      }
      var startDate = new Date(s_date + "T" + startTime + "Z");
      var endDate = new Date(s_date + "T" + endTime + "Z");
      var resultProductData = JSON.parse(res.text).filter(function (a) {
        var date = new Date(a.TimePlayed.replace(" ", "T") + ".000Z")
        return date >= startDate && date <= endDate
      });

      fs.readFile('./output/flag-radio.json', function (err, data) {
        if(typeof data != "undefined") {
          var json = JSON.parse(data)
        } else {
          var json = []
          fs.appendFile("./output/flag-radio.json",'',(err) => {if (err) throw err;})
        }
        json.push(resultProductData)
        fs.writeFile("./output/flag-radio.json", JSON.stringify(json), (err) => {if (err) throw err;})
      })
    }
  });
});

function getDate(startDate,endDate,week) {
  const endOfDate = new Date(endDate)
  const dateRange = new Date(startDate)
  var DateArray = [];

  while (dateRange.getDay() != week) {
    dateRange.setDate(dateRange.getDate() + 1);
  }

  while (dateRange <= endOfDate) {
      DateArray.push(new Date(dateRange.getTime()));
      dateRange.setDate(dateRange.getDate() + 7);
  }

  return DateArray;
}