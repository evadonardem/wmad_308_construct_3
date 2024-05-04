
export const Trucks = new Map();
export function create(runtime, count)
{
 for (let i = 0; i<1; i++){
 const newTruck = runtime.objects.
  Truck.createInstance(0,100,100);

newTruck.width = newTruck.width * 0.25;
newTruck.height = newTruck.height * 0.25;
newTruck.angle = 90;

newTruck.x=i * newTruck.width;

 }
}