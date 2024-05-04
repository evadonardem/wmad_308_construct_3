export function create(runtime, count)
{
	for (let i = 0; i < count; i++){
	const newCar = runtime.objects.Sprite2.createInstance(0, 100, 100);
	
	newCar.width = newCar.width * 0.25;
	newCar.height = newCar.height * 0.25;
	newCar.angle = Math.random() * 360;
	
	newCar.x = i * newCar.width;
	}	
}
