
import * as track from "./track.js";

runOnStartup(runtime => {
    runtime.addEventListener("beforeprojectstart", () =>{
        track.create(runtime, 5);
    });
});