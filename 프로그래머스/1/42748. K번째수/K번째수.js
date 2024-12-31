function solution(array, commands) {
    const result = commands.map(command=> {
        const [i, j, k] = command;
        return (array.slice(i-1, j).sort((a, b) => a-b).at(k-1));
    });
    return result;
}