const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [p, m] = input[0].split(' ').map(Number); // 인원수, 방 정원
const arr = [];
for(let i=1; i<input.length; i++){
    const [level, name] = input[i].split(' ');
    arr.push([Number(level), name]);
}

const rooms = [];

const isMatchable = (myLevel) => {
  let possible = false;
  let idx = null;

  for (let i = 0; i < rooms.length; i++) {
    const room = rooms[i];
    const [_, level] = room[0];

    const isProper = level - 10 <= myLevel && myLevel <= level + 10;
    const isFull = room.length >= m;

    if (isProper && !isFull) {
      idx = i;
      possible = true;
      break; 
    }
  }

  return [possible, idx];
};

for(let i=0; i<p; i++){
    const [level, name] = arr[i];
    const [matched, matchedIdx] = isMatchable(level);

    // 매칭 불가능하거나 방이 없으면 방 생성
    if(rooms.length === 0 || !matched){
        rooms.push([[name,level]]);
    }
    // 매칭 가능한 방이 있는 경우
    if(rooms.length > 0 && matched){
        rooms[matchedIdx].push([name,level]);
    }
}

for(let i=0; i<rooms.length; i++){
    const room = rooms[i];
   room.sort((a, b) => a[0].localeCompare(b[0]));
    
    if(room.length === m) console.log("Started!");
    else console.log("Waiting!");

    room.forEach(([name, level]) => console.log(`${level} ${name}`));
}