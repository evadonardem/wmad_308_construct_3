import * as truckfactory  from "./truck.js";

runOnStartup(runtime => {
	runtime.addEventListener("beforeprojectstart", () =>{
	truckfactory.create(runtime, 2);

	
	
	});
});