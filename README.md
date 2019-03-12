# nodejs-crawler-json-FMkyoto

This program can set the date and time to crawl the song list [On Air Song List | FM京都 89.4 FM](http://fm-kyoto.jp/nowonair/) to json format.

一個十分普通的爬蟲程式，就是為了爬回近幾年每個星期一Flag radio (くるり) 的歌單。


## Install (安裝)

```shell
npm install
```

## Usage (使用方法)

Edit index.js
編輯 index.js
```shell
const startDate = "2018-01-01";
const endDate = "2019-01-01";
const weekly = 1; // 0->Sun, 1->Mon..... 6->Sat
const startTime = "21:00:00";
const endTime = "22:00:00";
```

運行 (Run)
```shell
node index.js
```


