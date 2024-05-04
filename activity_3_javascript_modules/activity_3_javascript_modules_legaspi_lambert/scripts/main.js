import * as Assasin from './Assasin.js';

runOnStartup(runtime => {
	runtime.addEventListener("beforeprojectstart", () => {
		Assasin.create(runtime, 10);
	});

});