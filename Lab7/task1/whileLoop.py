import math

# A


n = int(input())

i  =1
while( i*i < n):
    print(i*i)
    i+=1



# B

n = int(input())
for i in range(2,n):
    if(n % i == 0):
        print(i)
        break


# C


i = 0
n = int(input())
while( 2**i < n):
    print(2**i)
    i+=1




# D

a = int(input())
print("YES" if (a & (a-1) == 0) else "NO")



# E

n = int(input())
while(True):
    if( (n & (n-1) == 0)):
        print(int(math.log(n  ,2)))
        break
    n+=1
