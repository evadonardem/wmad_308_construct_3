export function create(runtime, count)
{
	for(let i = 0; i < count; i++){
		const newEnemy = runtime.objects.Sprite2.createInstance("Layer 0", 100,100);
		
		newEnemy.width = newEnemy.width;
		newEnemy.height = newEnemy.height;
		newEnemy.angle = 90;
		newEnemy.x = i * newEnemy.width;
	}
}