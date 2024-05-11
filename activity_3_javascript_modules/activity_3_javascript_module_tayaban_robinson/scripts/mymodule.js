export function create(runtime,count)
{
	for(let i = 0; i < count; i++) {
		const newSprite2 = runtime.objects.Sprite2.createInstance(0, 100, 100);
		
		newSprite2.width = newSprite2.width * 5;
		newSprite2.height = newSprite2.height * 5;
		newSprite2.angle = Math.random() * 360;
		
		newSprite2.x = i * newSprite2.width;
		}
	
	}