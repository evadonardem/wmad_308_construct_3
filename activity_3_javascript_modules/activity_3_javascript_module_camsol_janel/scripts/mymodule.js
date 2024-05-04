export const Player2 = new Set();

export function create(runtime, count) {
    for (let i = 0; i < count; i++) {    
        const newPlayer2 = runtime.objects.Player2.createInstance(0, 100, 100);
            
        newPlayer2.width = newPlayer2.width * 0.25;
        newPlayer2.height = newPlayer2.height * 0.25;
        newPlayer2.angle = Math.random() * 360;
        newPlayer2.x = i * newPlayer2.width + 100;

        Player2.add(newPlayer2);
    }
}