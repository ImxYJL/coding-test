function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  
  let curTruckList = Array.from({length: bridge_length}).fill(0);
  let weightSum = 0;
  
  curTruckList.shift();
  weightSum += truck_weights[0];
  curTruckList.push(truck_weights.shift());
  count++;
  
  while (weightSum > 0) {
      weightSum -= curTruckList.shift();
      
      const isUnderWeight = weightSum + truck_weights[0] <= weight;
      if (truck_weights.length > 0 && isUnderWeight) {
          weightSum += truck_weights[0];
          curTruckList.push(truck_weights.shift());
        } else curTruckList.push(0); 
      
      count++
  }
  
  return count;
}