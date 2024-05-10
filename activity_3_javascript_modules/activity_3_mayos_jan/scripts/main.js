
import * as sprite from "./Truck.js";

	runOnStartup(runtime => {
	
	runtime.addEventListener("beforeprojectstart", () => {
	sprite.create(runtime, 7);
	});
});
