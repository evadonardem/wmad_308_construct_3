export function create(runtime, count)
{
for(let i=0; i<1; i++){

	const newtruck=runtime.objects.
	truck.createInstance(150,150, 150);
	
	newtruck.width = newtruck.width * 0.30;
	newtruck.height = newtruck.height * 0.30;
	newtruck.angle = 90;
	
	newtruck.x=i * newtruck.width;
}
}