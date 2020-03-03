class SpeedSlider
{
	constructor(div = "slider", dots = "dots", next = "pushRight", back = "pushLeft")
	{
		let slider = document.getElementById(div);
		let qty = document.getElementById(div).querySelectorAll("img").length;
		let doty = document.getElementById(dots);

		slider.dataset.current = 1;
		slider.dataset.qty = qty;

		// Pages
		this.AddDosts(doty, qty, div);
		// Events
		this.AddEvent(div, doty, next, back);
		// Curr page
		SpeedSlider.SetActiveDot(doty, 1);
	}

	AddDosts(dots, qty, div){
		for (let index = 1; index <= qty; index++)
		{
			let sp = document.createElement("span");
			sp.dataset.nr = index;
			// Event here
			sp.addEventListener("click", (e) => {
				// Get current
				let curr = SpeedSlider.GetCurrent(div);
				let qty = SpeedSlider.GetQuantity(div);
				let page = e.target.dataset.nr;

				if(curr > page){
					// Get page
					console.log("Miniej: ", page);

					while(curr > page){
						let el = document.getElementById(div);
						let img = el.querySelector("img:nth-child("+curr+")");
						SpeedSlider.AnimateOpacityHide(img);
						curr--;
						SpeedSlider.SetActiveDot(dots, curr);
					}
					SpeedSlider.SetCurrent(div, curr);
				}else{
					console.log("Więcej: ", page);

					while(curr < page){
						curr++;
						let el = document.getElementById(div);
						let img = el.querySelector("img:nth-child("+curr+")");
						SpeedSlider.AnimateOpacity(img);
						SpeedSlider.SetActiveDot(dots, curr);
					}
					SpeedSlider.SetCurrent(div, curr);
				}
			})
			// Add span
			dots.appendChild(sp);
		}
	}

	AddEvent(div, dots, next, back)
	{
			document.getElementById(next).addEventListener("click", () => {

				let curr = SpeedSlider.GetCurrent(div);
				let qty = SpeedSlider.GetQuantity(div);

				curr++;
				if(curr <= qty)
				{
					SpeedSlider.SetCurrent(div, curr);
					let el = document.getElementById(div);
					let img = el.querySelector("img:nth-child("+curr+")");
					SpeedSlider.AnimateOpacity(img);
					SpeedSlider.SetActiveDot(dots, curr);
				}
			})

			document.getElementById(back).addEventListener("click", () => {

				let curr = SpeedSlider.GetCurrent(div);
				let qty = SpeedSlider.GetQuantity(div);

				console.log(curr);

				if(curr > 1)
				{
					let el = document.getElementById(div);
					let img = el.querySelector("img:nth-child("+curr+")");
					SpeedSlider.AnimateOpacityHide(img);
					curr--;
					SpeedSlider.SetCurrent(div, curr);
					SpeedSlider.SetActiveDot(dots, curr);
				}
			})

	}

	static GetCurrent(div){
		let el = document.getElementById(div);
		return el.dataset.current;
	}

	static SetCurrent(div, val){
		let el = document.getElementById(div);
		return el.dataset.current = val;
	}

	static GetQuantity(div){
		let el = document.getElementById(div);
		return el.dataset.qty;
	}

	static async AnimateOpacity(ele){
		let i = 0;

		while(i < 1){
			await new Promise(resolve => setTimeout(resolve, 50));
			i = i + 0.1;
			ele.style.opacity = i;
		}
	}

	static async AnimateOpacityHide(ele){
		let i = 1;

		while(i > 0){
			await new Promise(resolve => setTimeout(resolve, 50));
			i = i - 0.1;
			ele.style.opacity = i;
		}
	}

	static SetActiveDot(dots, id){
		let span = dots.querySelector("span:nth-child("+id+")");
		SpeedSlider.ClearDots(dots);
		span.classList.add("btn-active");
		console.log(span);
	}

	static ClearDots(div){
		let spany = div.querySelectorAll("span");
		spany.forEach((i) => {
			i.classList.remove("btn-active");
		});
	}
}