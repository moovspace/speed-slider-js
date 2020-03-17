class SpeedSlider
{
	constructor(time = 50, div = "slider", dots = "dots", next = "pushRight", back = "pushLeft")
	{
		var div = '#' + div;
		var dots = "#" + dots;
		let slider = document.querySelector(div);
		if(slider != null)
		{
			let qty = slider.querySelectorAll("img").length;
			let doty = document.querySelector(dots);

			slider.dataset.current = 1;
			slider.dataset.qty = qty;

			// Pages
			this.AddDosts(doty, qty, div, time);
			// Events
			this.AddEvent(div, doty, next, back, time);
			// Curr page
			SpeedSlider.SetActiveDot(doty, 1);
		}
	}

	AddDosts(dots, qty, div, time = 50)
	{
		for (let index = 1; index <= qty; index++)
		{
			// Create new span
			let sp = document.createElement("span");
			// Add data-nr attr
			sp.dataset.nr = index;

			sp.addEventListener("click", (e) => {
				// Get current
				let curr = SpeedSlider.GetCurrent(div);
				let qty = SpeedSlider.GetQuantity(div);
				let page = e.target.dataset.nr;

				// console.log("Pager: ", page);

				if(curr > page)
				{
					while(curr > page){
						let el = document.querySelector(div);
						let img = el.querySelector("img:nth-child("+curr+")");
						SpeedSlider.AnimateOpacityHide(img, time);
						curr--;
						SpeedSlider.SetActiveDot(dots, curr);
					}
					SpeedSlider.SetCurrent(div, curr);
				}
				else
				{
					while(curr < page){
						curr++;
						let el = document.querySelector(div);
						let img = el.querySelector("img:nth-child("+curr+")");
						SpeedSlider.AnimateOpacity(img, time);
						SpeedSlider.SetActiveDot(dots, curr);
					}
					SpeedSlider.SetCurrent(div, curr);
				}
			})
			// Add span
			dots.appendChild(sp);
		}
	}

	AddEvent(div, dots, next, back, time = 50)
	{
			document.getElementById(next).addEventListener("click", () => {

				let curr = SpeedSlider.GetCurrent(div);
				let qty = SpeedSlider.GetQuantity(div);

				if(curr < qty)
				{
					curr++;
					SpeedSlider.SetCurrent(div, curr);
					let el = document.querySelector(div);
					let img = el.querySelector("img:nth-child("+curr+")");
					SpeedSlider.AnimateOpacity(img, time);
					SpeedSlider.SetActiveDot(dots, curr);
				}
			})

			document.getElementById(back).addEventListener("click", () => {

				let curr = SpeedSlider.GetCurrent(div);
				let qty = SpeedSlider.GetQuantity(div);

				if(curr > 1)
				{
					let el = document.querySelector(div);
					let img = el.querySelector("img:nth-child("+curr+")");
					SpeedSlider.AnimateOpacityHide(img,time);
					curr--;
					SpeedSlider.SetCurrent(div, curr);
					SpeedSlider.SetActiveDot(dots, curr);
				}
			})

	}

	static GetCurrent(div){
		let el = document.querySelector(div);
		return el.dataset.current;
	}

	static SetCurrent(div, val){
		let el = document.querySelector(div);
		return el.dataset.current = val;
	}

	static GetQuantity(div){
		let el = document.querySelector(div);
		return el.dataset.qty;
	}

	static async AnimateOpacity(ele, time = 50){
		let i = 0;

		while(i < 1){
			await new Promise(resolve => setTimeout(resolve, time));
			i = i + 0.1;
			ele.style.opacity = i;
		}
	}

	static async AnimateOpacityHide(ele, time = 50){
		let i = 1;

		while(i > 0){
			await new Promise(resolve => setTimeout(resolve, time));
			i = i - 0.1;
			ele.style.opacity = i;
		}
	}

	static SetActiveDot(dots, id){
		let span = dots.querySelector("span:nth-child("+id+")");
		SpeedSlider.ClearDots(dots);
		span.classList.add("btn-active");
		// console.log(span);
	}

	static ClearDots(div){
		let spany = div.querySelectorAll("span");
		spany.forEach((i) => {
			i.classList.remove("btn-active");
		});
	}
}
