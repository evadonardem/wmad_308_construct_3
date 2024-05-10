export function create(runtime, count)
{
	for(let i = 0; i < 10; i++) {
		const newMonsters = runtime.objects.Monsters.createInstance(0, 100, 200);
		newMonsters.width = newMonsters.width * 0.40;
		newMonsters.height = newMonsters.height * 0.40;
		newMonsters.angle = Math.random() * 160;
		
		newMonsters.x = i * newMonsters.width + 100;
	}
}