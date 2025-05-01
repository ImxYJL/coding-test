def solution(players, m, k):
    answer = 0
    cur_server = 0
    server_off = [0] * 50

    for t, n in enumerate(players):
        # 1. t 시점에서, 반납할 서버가 있으면 먼저 반납
        cur_server -= server_off[t]

        # 2. 현재 서버로 커버 가능한 수 계산
        available = cur_server * m

        # 3. 부족하면 서버 추가
        required_server = n // m
        alive_server = cur_server

        if required_server > alive_server:
            add = required_server - alive_server
            cur_server += add
            answer += add

            # 4. 추가 서버는 t+k 시점에 반납
            server_off[t + k] += add

    return answer
