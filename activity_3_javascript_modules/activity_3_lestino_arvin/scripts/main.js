
import * as tank from "./tank.js";

runOnStartup(runtime => {
	runtime.addEventListener("beforeprojectstart", () =>{
	tank.create(runtime, 10);
});
});