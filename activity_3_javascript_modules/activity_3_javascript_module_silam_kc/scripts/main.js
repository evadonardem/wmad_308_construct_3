import * as Sprite1Factory from './truck.js';
	import * as Sprite1 from "./truck.js";
	
	runOnStartup(runtime => {
		runtime.addEventListener("beforeprojectstart", () => {
			Sprite1Factory.create(runtime, 10);
			const sprite1 = Sprite1Factory.instances;
			setInterval(() => {
				sprite1.at(Math.floorMath.random())
			}, 1000);
			
	});
		
});