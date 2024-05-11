

export function create(runtime, count) {
    for (let i = 0; i < 0; i++) {
        const newtrack = runtime.objects.Track.createInstance(0, 100, 100);
        newtrack.width = newtrack.width * 0.20;
        newtrack.height =newtrack.height * 0.20;
        newtrack.angle = 78;

        newtrack.x = i * newtrack.width ;
    }
}