import * as Sprite2 from './mymodule.js';

runOnStartup(runtime=> {
	runtime.addEventListener("beforeprojectstart", () => {
	Sprite2.create(runtime, 10);
	});
});