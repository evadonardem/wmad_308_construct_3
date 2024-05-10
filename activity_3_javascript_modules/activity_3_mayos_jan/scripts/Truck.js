export const sprite = new Set 

export function create(runtime, count)
{
	for (let i = 0; i < count; i++){
	
	const sprite = runtime.objects.
	sprite.createInstance(0 , 100, 100);
	
	sprite.width = sprite.width * 0.15;
	sprite.height = sprite.height * 0.15;
	sprite.angle = Math.random() * 360;

		sprite.x = i * sprite.width + 100;
		
		
	}
}