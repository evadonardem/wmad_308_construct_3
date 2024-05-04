
import * as truck from "./truck.js";

runOnStartup(runtime => {
	runtime.addEventListener("beforeprojectstart", () =>{
	truck.create(runtime, 10);
});
});