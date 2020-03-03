# speed-slider-js
Speed slider - javascript slider with fadeIn/fadeOut transitions (ES6 Class without jquery)

## Working sample (download and double click)
https://github.com/moovspace/speed-slider-js/blob/master/speed-slider-js.html

### Geting started
```bash
<script>
import SpeedSlider from ./speed-slider.js

let slider = new SpeedSlider();
</script>
```

### Html
```bash
<body>

	<!-- Slider images -->
	<div id="slider">
		<img src="https://media-cdn.tripadvisor.com/media/photo-s/07/ab/22/e1/restaurant-zur-weinsteige.jpg">
		<img src="https://i.pinimg.com/originals/42/cc/e7/42cce74da4c084b85f18d8f28640f9ef.jpg">
		<img src="https://tesco.pl/imgglobal/content_platform/recipes/main/e6/sized/756x426-100-fff-700-0/e69e446c6f8e29d6dc71131108131db7.jpg">
		<img src="https://d1doqjmisr497k.cloudfront.net/-/media/kamispl-2016/franks-pl/recipes_img/2000x1125/big_0003_pikantny_teksanski_burger.png?vd=20190329T115046Z&ir=1&width=885&height=498&crop=auto&quality=75&speed=0&hash=0F58CC5398890A3F5F025E28274253E286F5D3AC">
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
```bash
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
