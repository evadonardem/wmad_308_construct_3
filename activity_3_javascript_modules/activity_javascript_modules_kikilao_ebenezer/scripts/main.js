import * as Car from './Car.js';

runOnStartup (runtime => { 
	runtime.addEventListener("beforeprojectstart", () => { 
	Car.create(runtime, 10);
	});

});