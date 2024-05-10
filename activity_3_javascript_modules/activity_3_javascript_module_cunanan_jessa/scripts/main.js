import * as TruckFactory from "./Truck.js";

runOnStartup(runtime => {
	runtime.addEventListener("beforeprojectstart", () => {
	TruckFactory.create(runtime, 5);
		});
	});