export const instances = new Set();
export function create(runtime, count)
{
	for(let i=0; i<2; i++){
		const newtruck=runtime.objects.
		truck.createInstance(0, 100, 100);
		
		newtruck.width = newtruck.width * 0.15;
		newtruck.height = newtruck.height * 0.15;
		newtruck.angle=90;
		
		newtruck.x=i * newtruck.width;
		
		instances.add(newtruck);
	}
}
