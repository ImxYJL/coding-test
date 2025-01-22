function solution(arr)
{
    const res = [];
    res.push(arr[0]);
    
    for(let i=1; i<arr.length; i++){
        if(arr[i-1] !== arr[i]) res.push(arr[i]);
    }
    
    return res;
}