import * as Santa from './santa.js';

runOnStartup(runtime => {
	runtime.addEventListener("beforeprojectstart", () => {
	Santa.create(runtime, 10);
	});
});