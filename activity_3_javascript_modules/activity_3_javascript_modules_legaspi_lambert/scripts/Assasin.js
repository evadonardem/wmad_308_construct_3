export function create(runtime,count)
{
	for (let i = 0; i < count; i++) {
		const newAssasin = runtime.objects.Sprite2.createInstance(0, 100, 100);
		
		newAssasin.width = newAssasin.width * 0.25;
		newAssasin.height = newAssasin.height * 0.25;
		newAssasin.angle = Math.random() * 360;
		
		newAssasin.x = i * newAssasin.width;
	}
}