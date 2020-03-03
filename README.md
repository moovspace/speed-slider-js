# speed-slider-js
Speed slider - javascript slider with fadeIn/fadeOut transitions (ES6 Class without jquery)

## Working sample (download and double click)
https://github.com/moovspace/speed-slider-js/blob/master/speed-slider-js.html

### Geting started
```js
<script>
import SpeedSlider from ./speed-slider.js

let slider = new SpeedSlider();
</script>
```

### Html
```html
<body>

<!-- Slider images -->
<div id="slider">
	<div id="slider">
	<img src="https://store-images.s-microsoft.com/image/apps.18650.66262159861864182.afc15b89-5a5a-4784-8fff-e827eb9cb460.77327680-ff47-4889-aace-b49a1740ea02?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF">
	<img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/starwars-tros-stormtroopers-700x322.jpg">
	<img src="https://cdn.vox-cdn.com/thumbor/E93ooXh1Zqwn_dkrpHo_K77lHys=/0x0:1200x503/1200x800/filters:focal(504x156:696x348)/cdn.vox-cdn.com/uploads/chorus_image/image/65503343/1637461.7.jpg">
	<img src="https://news.sagacom.com/wp-content/blogs.dir/3/files/2019/12/AP_19351055448240.jpg">
</div>
</div>

<!-- Slider pages -->
<div id="dots"></div>

<!-- Slider buttons -->
<div id="buttons">
	<span id="pushLeft"><img src="left.png"></span>
	<span id="pushRight"><img src="right.png"></span>
</div>

</body>
```
### Css
```css
<style>
	html, body{float: left; width: 100%;margin: 0px; padding: 0px;}
	#slider{float: left; width: 100%; height: 70vh; overflow: hidden; position: relative; box-sizing: border-box}
	#slider *{box-sizing: border-box}
	#slider img{position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; opacity: 0}
	#slider img:nth-child(1){ opacity: 1; }
	#dots{position: relative; margin-top: -40px; float: left; width: 100%; overflow: hidden; display: flex; align-items: center; justify-content: center;}
	#dots span{float: left; width: 9px; height: 9px; border: 1px solid #5c5; margin-right: 10px;}
	#dots span:hover{border: 1px solid #5c5; background: #5c5; cursor: pointer}
	#dots span.btn-active{border: 1px solid #5c5; background: #5c5; cursor: pointer}
	#buttons{position: relative; margin-top: -50px; float: left; width: 100%; overflow: hidden;}
	#buttons span{float: left; width: auto; border: 1px solid #5c5; background: #5c5; padding: 5px 10px; margin-right: 10px; cursor: pointer; transition: all .6s}
	#buttons span img{width: 20px;}
	#buttons span:hover{background: cadetblue; border: 1px solid cadetblue}
	#buttons #pushLeft{float: left;}
	#buttons #pushRight{float: right; margin-right: 0px;}
</style>
 ```
