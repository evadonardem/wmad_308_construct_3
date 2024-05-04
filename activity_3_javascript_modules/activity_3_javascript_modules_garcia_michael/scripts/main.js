import * as Monsters from "./Monsters.js";

runOnStartup(runtime => 
{
	runtime.addEventListener("beforeprojectstart", () => {
	Monsters.create(runtime, 10);
	});

});