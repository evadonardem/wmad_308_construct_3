export const instances = new Set();

export function create(runtime, count)
{
	for(let i= 0; i < 10; i++) {
		const newSprite1 = runtime.objects. 
			Sprite1.createInstance(0, 100, 100);
			
			
		newSprite1.width = newSprite1.width * 0.18;
		newSprite1.height = newSprite1.height * 0.18;
		newSprite1.angle = Math.random() * 360;
		
		newSprite1.x = i * newSprite1.width + 100;
		
		instances.add(newSprite1);
	}	
}