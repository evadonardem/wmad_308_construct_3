import { create } from "./mymodule.js";

runOnStartup(runtime => {
    runtime.addEventListener("beforeprojectstart", () => {
        create(runtime, 10);
    });
});