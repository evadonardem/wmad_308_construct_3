import * as Sprite2 from "./Sprite2.js";
runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () =>{
	Sprite2.create(runtime,10);
	});
});
