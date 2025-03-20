#include <iostream>
#include <string>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

int n, m;
//int arr[8];
vector<int> arr;
int print[8];
bool isUsed[8];

void func(int k) {
	if (k == m) {
		for (int i = 0; i < m; i++) {
			cout << print[i] << ' ';
		}
		cout << '\n';
		return;
	}

	for (int i = 0; i < arr.size(); i++) {
		if (!isUsed[i] && (k == 0 || print[k-1] < arr[i])) {
			print[k] = arr[i];
			isUsed[i] = true;

			func(k + 1);
			isUsed[i] = false;
		}
	}


}

int main() {

	int tmp;
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		cin >> tmp;
		arr.push_back(tmp);
		//mi = min(mi, arr[i]);
	}
	sort(arr.begin(), arr.end());
	func(0);

	return 0;
}