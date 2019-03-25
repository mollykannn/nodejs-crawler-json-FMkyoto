# nodejs-crawler-json-FMkyoto

This program can set the date and time to crawl the song list [On Air Song List | FM京都 89.4 FM](http://fm-kyoto.jp/nowonair/) to json format.

一個十分普通的爬蟲程式，就是為了爬回近幾年每個星期一Flag radio (くるり) 的歌單。


## Install

```shell
npm install
```

## Usage

Edit index.js

```shell
const startDate = "2019-01-01";
const endDate = "2019-02-01";
const weekly = 1; // 0->Sun, 1->Mon..... 6->Sat
const startTime = "21:00:00";
const endTime = "22:00:00";
```

Run
```shell
node index.js
```

Output - In songList.json
```shell
[
    [{
        "TimePlayed": "2019-01-07 21:55:54",
        "SongTitle": "THERE IS (ALWAYS LIGHT)",
        "Artist": "くるり",
        "SKU": "VICL-64167",
        "iTunesUrl": "https://itunes.apple.com/jp/album/there-is-always-light/913872769?i=913874997&uo=4&partnerId=11&at=1010lJ2r",
        "AmazonUrl": "https://www.amazon.co.jp/gp/search?keywords=THERE+IS+%28ALWAYS+LIGHT%29+%E3%81%8F%E3%82%8B%E3%82%8A&index=music&creative=1211&camp=247&ie=UTF8&tag=alphastation-22&linkCode=ur2"
    }, ....]
] 
```
