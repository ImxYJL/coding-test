#include <iostream>
#include <algorithm>
#include <string>
#include <queue>
#include <vector>
using namespace std;

#define X first
#define Y second

int bd[500][500] = {0};
bool vis[500][500];

int dx[4] = { 1,0,-1,0 };
int dy[4] = { 0,1,0,-1 };


int main() {
	ios::sync_with_stdio(0); cin.tie(0);

	int cnt = 0; int wid = 0; int max = 0;
	int n, m;
	cin >> n >> m;

	for (int i = 0; i < n; i++) {
		for (int k = 0; k < m; k++) {
			cin >> bd[i][k];
		}
	}

	queue<pair<int, int>> q;


	for (int i = 0; i < n; i++) {
		for (int k = 0; k < m; k++) {
			if (bd[i][k] ==1 && vis[i][k] != 1) {
				vis[i][k] = 1;
				q.push({ i,k });
				wid = 0;
				cnt++; //num of picture
			}
			while (!q.empty()) {
				pair<int, int> cur = q.front(); q.pop();
				wid++;
				for (int dir = 0; dir < 4; dir++) {
					int nx = cur.X + dx[dir];
					int ny = cur.Y + dy[dir];
					if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
					if (vis[nx][ny] || bd[nx][ny] != 1) continue;

					vis[nx][ny] = 1;
					q.push({ nx, ny });
				}
			}
			if (wid > max) max = wid;
		}
	}
	
	cout << cnt << '\n';
	cout << max;

	return 0;
}