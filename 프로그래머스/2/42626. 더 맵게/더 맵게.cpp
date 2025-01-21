#include <string>
#include <vector>
#include <queue>
#include <iostream>

using namespace std;

int mix(int a, int b){
       
        return a + (b *2);
    }

int solution(vector<int> scoville, int K) {
    int answer = 0;
    
    priority_queue<int, vector<int>, greater<int>> pq;
    
    
    
    for(int i=0; i<scoville.size(); i++){
        pq.push(scoville[i]);
    }
    
    while(!pq.empty() && pq.size() >= 1){
        if(pq.top() >= K) return answer;
        if(pq.size() == 1) return -1;
        
        int a = pq.top(); pq.pop();
        int b= pq.top(); pq.pop();
        
        pq.push(mix(a, b));
        
        answer++;
    }
    
    
    return -1;
}