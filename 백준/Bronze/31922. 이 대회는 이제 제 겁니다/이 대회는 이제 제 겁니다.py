A, P, C = map(int, input().split())

# 두 경우의 상금을 계산합니다.
case1 = A + C
case2 = P

# 두 경우의 상금 중 최대값을 출력합니다.
print(max(case1, case2))