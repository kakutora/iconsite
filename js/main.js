//const icontitle = "アイコンのタイトル";
//const icontext = "アイコンの説明";
const libtn = document.querySelectorAll('li');

const icontitle = document.querySelector('#icontitle');
const designer = document.querySelector('#designer');
const icontext = document.querySelector('#overview');

const dlbtn = document.querySelector('#dlbtn');
const imgbox = document.querySelectorAll('h2');
//const navtag = document.querySelector('ul');
//const position = navtag.getBoundingClientRect();

libtn[0].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = '手書き風webアイコン'
    designer.innerHTML = 'kuroda'
    icontext.innerHTML = '元々絵が上手ではない製作者が<br>主にトラックパッドを使って、<br>手書き風にアイコンを仕上げました。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1259/手書き風アイコン.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1259/手書き風アイコン2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1259/手書き風アイコン.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1259/手書き風アイコン2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1259/dl.png" alt="">';
});
libtn[1].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = '図形多めなアイコン'
    designer.innerHTML = '月茶'
    icontext.innerHTML = '四角や三角などの図形を使って<br>それらを重ねたアイコンです。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1280/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1280/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1280/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1280/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1280/dl.png" alt="">';
});

libtn[2].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = 'キューブ型アイコン'
    designer.innerHTML = 'setuna@Another'
    icontext.innerHTML = 'シンプルなアイコンで<br>見かけないようなアイコンです。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1359/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1359/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1359/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1359/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1359/dl.png" alt="">';
});

libtn[3].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = 'ヒシガタ便利アイコン'
    designer.innerHTML = '玲♪'
    icontext.innerHTML = '菱形をベースに作成したPC,<br>スマホの便利アイコンです。<br>Webサイトだけでなく、<br>アプリやソフトなどの説明、<br>広告動画で使える<br>アイコンになっています。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1424/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1424/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1424/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1424/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1424/dl.png" alt="">';
});

libtn[4].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = 'クッキーアイコン'
    designer.innerHTML = 'kazu'
    icontext.innerHTML = 'クッキーをモチーフにして製作した<br>美味しいアイコンです。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1559/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1559/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1559/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1559/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1559/dl.png" alt="">';
});

libtn[5].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = '薔薇モチーフのアイコン'
    designer.innerHTML = '梁瀬拓斗'
    icontext.innerHTML = '薔薇を扱うサイトや<br>エレガントな雰囲気のサイトで<br>使用可能です。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1425/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1425/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1425/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1425/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1425/dl.png" alt="">';
});

libtn[6].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = '水墨画風アイコン'
    designer.innerHTML = '山上諒賀'
    icontext.innerHTML = '水墨画特有の白と黒の濃淡を<br>アイコンで表してみました。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1565/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1565/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1565/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1565/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1565/dl.png" alt="">';
});

libtn[7].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = 'ヴィンテージ風アイコン'
    designer.innerHTML = 'Tomo'
    icontext.innerHTML = '彫刻の印鑑の様な<br>ヴィンテージ風のアイコンです。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1277/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1277/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1277/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1277/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1277/dl.png" alt="">';
});
libtn[8].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = '手書き風アイコン'
    designer.innerHTML = '藤井優貴'
    icontext.innerHTML = '手書き風アイコンです。<br>全て白と黒で構成された<br>シンプルなデザインです。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1278/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1278/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1278/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1278/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1278/dl.png" alt="">';
});
libtn[9].addEventListener('click', function () {
    scrollTo({top:200,behavior: 'smooth'});
    icontitle.innerHTML = '手描きのゆるいアイコン'
    designer.innerHTML = 'Ikoan'
    icontext.innerHTML = 'ゆるいタッチで手描きの<br>Webアイコンを制作しました。'
    imgbox[0].innerHTML = '<img id="img1" src="img/1281/1.png" alt="iconimage" width="592" height="418"><img id="img2" src="img/1281/2.png" alt="iconimage" width="592" height="418">'
    imgbox[1].innerHTML = '<img id="img3" src="img/1281/1.png" alt="iconimage" width="592" height="418"><img id="img4" src="img/1281/2.png" alt="iconimage" width="592" height="418">'
    dlbtn.innerHTML = '<img src="img/1281/dl.png" alt="">';
});