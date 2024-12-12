function solution(today, terms, privacies) {
    const term = {};
    const ans = [];
    const todayStr = today.split('.').join('');
    
    terms.forEach(t =>{
        const [char, month] = t.split(' ');
        term[char] = Number(month);  
    })
    
    privacies.forEach((privacy, idx) =>{
        let [date, t] = privacy.split(' '); 
        let [y, m , d] = date.split('.').map(Number);
        
        m += term[t];  
        while(m > 12){
            m -= 12;
            y++;
        }
        
        y = String(y);
        m = String(m).padStart(2,'0');
        d = String(d).padStart(2,'0');
        
        const expireDate = y + m + d;
        if(Number(expireDate) <= Number(todayStr)) ans.push(idx+1);
    })
    
    return ans;
}