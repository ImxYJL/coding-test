function solution(priorities, location) {
    let count = 1;
    let queue = priorities.map((p, idx) => [p, idx === location]);

    while (queue.length > 0) {
        const max = Math.max(...queue.map(item => item[0]));

        const tmp = queue.shift();

        if (tmp[0] === max) {
            if (tmp[1]) return count; 
            count++;
        } else {
            queue.push(tmp);
        }
    }

    return count;
}
