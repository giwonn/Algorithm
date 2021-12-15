def fibo(num):
    if num < 2:
        return num

    if num in fibo_memo:
        return fibo_memo[num]

    fibo_memo[num] = fibo(num - 1) + fibo(num - 2)
    return fibo_memo[num]


n = int(input())
fibo_memo = {}

print(fibo(n))
