# speed-slider-js
Speed slider - javascript slider with fadeIn/fadeOut transitions (ES6 Class without jquery)

## Working sample (download and double click)
https://github.com/moovspace/speed-slider-js/blob/master/speed-slider-js.html

### Geting started
```js
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">

	<link rel="stylesheet" type="text/css" href="speed-slider.css">
	
	<script src="speed-slider.js"></script>

	<script>
		let slider = new SpeedSlider();
	</script>
</head>
```

### Html
```html
<body>

<!-- Slider images -->
<div id="slider">
	<img src="https://store-images.s-microsoft.com/image/apps.18650.66262159861864182.afc15b89-5a5a-4784-8fff-e827eb9cb460.77327680-ff47-4889-aace-b49a1740ea02?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF">
	<img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/starwars-tros-stormtroopers-700x322.jpg">
	<img src="https://cdn.vox-cdn.com/thumbor/E93ooXh1Zqwn_dkrpHo_K77lHys=/0x0:1200x503/1200x800/filters:focal(504x156:696x348)/cdn.vox-cdn.com/uploads/chorus_image/image/65503343/1637461.7.jpg">
	<img src="https://news.sagacom.com/wp-content/blogs.dir/3/files/2019/12/AP_19351055448240.jpg">
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
