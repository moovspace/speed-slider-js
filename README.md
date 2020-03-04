# Speed slider javascript
Speed slider - RWD javascript slider with fadeIn/fadeOut transitions (ES6 Class without jquery)

## Working sample (download and double click)
https://github.com/moovspace/speed-slider-js/blob/master/index.html

### Geting started
```js
<html lang="pl">
<head>
	<title>Speed Slider Js rwd javascript slider (ES6)</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	
	<link rel="stylesheet" type="text/css" href="speed-slider.css">
	<script src="speed-slider.js"></script>
	<script>
	window.onload = function() {
		var slider = new SpeedSlider();
	};
	</script>
</head>
```

### Html
```html
<body>

<!-- Slider images -->
<div id="slider">
	<img src="https://c1.staticflickr.com/3/2825/34180471702_15fe2edf5c_b.jpg">
	<img src="https://i.pinimg.com/originals/65/0c/54/650c54f65108c0633a1dce926914821a.jpg">
	<img src="https://i.pinimg.com/originals/80/30/86/803086db2e6eb2f74525dd142c343096.jpg">
	<img src="https://i.pinimg.com/originals/8e/9c/9a/8e9c9a2ec922c107855c2c1d647f28d8.jpg">
</div>

<!-- Slider buttons -->
<div id="buttons">
	<span id="pushLeft"><img src="left.png"></span>
	<span id="pushRight"><img src="right.png"></span>
</div>

<!-- Slider pages -->
<div id="dots"></div>
	
</body>
```

### Slider image
<img src="https://github.com/moovspace/speed-slider-js/blob/master/speed-slider.jpg" style="width: 100%; height: auto">
