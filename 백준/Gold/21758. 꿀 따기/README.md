# [Gold V] 꿀 따기 - 21758 

[문제 링크](https://www.acmicpc.net/problem/21758) 

### 성능 요약

메모리: 20064 KB, 시간: 200 ms

### 분류

그리디 알고리즘, 누적 합

### 제출 일자

2025년 7월 9일 23:04:11

### 문제 설명

<p>아래와 같이 좌우로 $N$개의 장소가 있다.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/7eac9e04-f000-482d-9ad5-05cc2363df05/-/preview/" style="width: 353px; height: 56px;"></p>

<p>장소들 중 서로 다른 두 곳을 골라서 벌을 한 마리씩 둔다. 또, 다른 한 장소를 골라서 벌통을 둔다. 아래 그림에서 연한 회색의 장소는 벌이 있는 장소이고 진한 회색의 장소는 벌통이 있는 장소이다.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/8ca82402-c379-40cd-902d-9ecc24c35d1f/-/preview/" style="width: 353px; height: 56px;"></p>

<p>두 마리 벌은 벌통으로 똑바로 날아가면서 지나가는 모든 칸에서 꿀을 딴다. 각 장소에 적힌 숫자는 벌이 지나가면서 꿀을 딸 수 있는 양이다.</p>

<ol>
	<li>두 마리가 모두 지나간 장소에서는 두 마리 모두 표시된 양 만큼의 꿀을 딴다. (벌통이 있는 장소에서도 같다.)</li>
	<li>벌이 시작한 장소에서는 어떤 벌도 꿀을 딸 수 없다.</li>
</ol>

<p>위의 그림과 같이 배치된 경우 두 마리의 벌 모두 $4 + 1 + 4 + 9 + 9 = 27$의 꿀을 따서, 전체 꿀의 양은 54가 된다.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/a9794fde-7a1b-4c4d-82b5-f1b8e7daaa73/-/preview/" style="width: 353px; height: 56px;"></p>

<p>위의 그림과 같이 배치된 경우 왼쪽 장소에서 출발한 벌은 $9 + 4 + 4 + 9 + 9 = 35$의 꿀을 따고 오른쪽 장소에서 출발한 벌은 $4 + 9 + 9 = 22$의 꿀을 따므로, 전체 꿀의 양은 $57$이 된다.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/5b264635-fc6b-498a-af76-bbe08197ab32/-/preview/" style="width: 353px; height: 56px;"></p>

<p>위의 그림과 같은 경우는 전체 꿀의 양이 31이 된다.</p>

<p>장소들의 꿀 양을 입력으로 받아 벌들이 딸 수 있는 가능한 최대의 꿀의 양을 계산하는 프로그램을 작성하라.</p>

### 입력 

 <p>첫 번째 줄에 장소의 수 $N$이 주어진다.</p>

<p>다음 줄에 왼쪽부터 각 장소에서 꿀을 딸 수 있는 양이 공백 하나씩을 사이에 두고 주어진다.</p>

### 출력 

 <p>첫 번째 줄에 가능한 최대의 꿀의 양을 출력한다.</p>

