export default class SpeedSlider
{
	constructor(options = [], div = "slider", dots = "dots"){
		this.Options = options;
		this.Slider = document.getElementById(div);
		this.Current = 1;
		// Events
		this.AddEvent(div, dots);
	}

	AddEvent(div, dots)
	{
		let curr = this.Current;

		window.onload = function() {
			let ele = document.getElementById(div);
			let quantity = document.getElementById(div).querySelectorAll("img").length;
			let doty = document.getElementById(dots);

			for (let index = 0; index < quantity; index++)
			{
				doty.appendChild(document.createElement("span"));
				SpeedSlider.SetActiveDot(dots, curr);
			}

			document.getElementById("pushRight").addEventListener("click", () => {

				if(curr >= quantity){
					curr = quantity;
				}else{
					this.Current = curr++;
					let img = ele.querySelector("img:nth-child("+curr+")");
					SpeedSlider.AnimateOpacity(img);
				}
				SpeedSlider.SetActiveDot(dots, curr);
			})

			document.getElementById("pushLeft").addEventListener("click", () => {
				if(curr <= 1){
					curr = 1;
				}else{
					let img = ele.querySelector("img:nth-child("+curr+")");
					console.log(ele);
					SpeedSlider.AnimateOpacityHide(img);
					this.Current = curr--;
				}
				SpeedSlider.SetActiveDot(dots, curr);
			})
		}
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
		let ele = document.getElementById(dots);
		let span = ele.querySelector("span:nth-child("+id+")");

		SpeedSlider.ClearDots(ele);

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
