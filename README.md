#jq.gmap
Google Maps API Version3を利用したjQueryのプラグインです。  

##利用できるオプション

1. 緯度・経度

2. 尺度

3. 左上のコントローラーの表示・非表示

4. 右上地図タイプを切り替えるセレクターの表示・非表示

5. 左下の地図のスケールの表示・非表示

6. 最初に表示される地図の種類

7. マーカーの画像

8. ふきだしのテキスト

9. 最初に表示した時のふきだしの表示・非表示

##使い方
jqueryとGoogle Maps APIとこのプラグインを読み込み、必要に応じてオプションを指定して利用します。  
Google Mapsを表示したい場所に空のdivにIDをつけて下さい。
###Sample Code

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
    <script src="//maps.google.com/maps/api/js?sensor=false"></script>
    <script src="./jquery.gmap.js"></script>
    <script>
    $(function() {
        $('div#map_canvas').gmap({
		    centerLat: 35.697128,
		    centerLng: 139.702563,
		    zoom: 16,
		    navCtr: true,
		    mapTypeCtr: true,
		    scaleCtr: false,
		    mapType: google.maps.MapTypeId.ROADMAP, //SATELLITE,HYBRID,TERRAIN
		    mkImg: './img/icon_map01.png',
		    popup: '新宿ロフト<br />東京都新宿区歌舞伎町1-12-9 タテハナビル',
		    popupState: true
	    });
    });
    </script>

ブログの記事にも使い方を紹介しています。[Google Maps API jQuery Pluginを書いてみた](http://www.nk0206.com/life/2010/02/google-maps-api-jquery-plugin.html)