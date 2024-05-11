export function create(runtime,count)
{
	for (let i = 0; i < count; i++) {
	const newSanta = runtime.objects.Santa.createInstance(0, 100, 100);
	
	newSanta.width = newSanta.width * 0.25;
	newSanta.height = newSanta.height * 0.25;
	newSanta.angle = Math.random() * 360;
	
	newSanta.x = i * newSanta.width;
	}
}