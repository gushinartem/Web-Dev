
# A

n = int(input())
arr = list()
for i in range(0,n):
    x = int(input())
    arr.append(x)
for i in range(0,n,2):
    print(arr[i], end=" ")



# B


n = int(input())
arr = list()
for i in range(0,n):
    x = int(input())
    arr.append(x)
for i in range(1,n,2):
    print(arr[i], end=" ")


# C


n = int(input())
sum = 0
for i in range(0,n):
    x = int(input())
    if(x > 0):
        sum+=1
print(sum)



# D

n = int(input())
arr = list()
sum = 0
for i in range(0,n):
    x = int(input())
    arr.append(x)
last = arr[0]
for i in range(1,n):
    if(last < arr[i]):
        sum+=1
    last = arr[i]
print(sum)



# E

def sign(x):
    return 1 if x > 0 else -1


n = int(input())
arr = list()
sum = 0
for i in range(0,n):
    x = int(input())
    arr.append(x)
last = arr[0]
for i in range(1,n):
    if(sign(last) == sign(arr[i])):
        print("YES")
        break
    last = arr[i]
print("NO")


# F

n = int(input())
arr = list()
sum = 0
for i in range(0,n):
    x = int(input())
    arr.append(x)
for i in range(1,n-1):
    if(arr[i-1] + arr[i+1] < arr[i]):
        sum+=1
print(sum)



# G


n = int(input())
arr = list()
sum = 0
for i in range(0,n):
    x = int(input())
    arr.append(x)
arr = arr[::-1]
for i in range(0,n):
    print(arr[i],end=" ")