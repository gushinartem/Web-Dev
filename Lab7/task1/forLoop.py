

# A

a = int(input("Etner a:"))
b = int(input("Enter b:"))
for i in range(a , b):
    if(i%2==0):
        print(i, end=" ")



# B

a = int(input("Etner a:"))
b = int(input("Enter b:"))
c = int(input("Enter c:"))
d = int(input("Enter d:"))
for i in range(a , b):
    if(i%d==c):
        print(i, end=" ")


# C

a = int(input("Enter a:"))
b = int(input("Enter b:"))

for i in range(a ,b ):
    if(i*i < b):
        print(i*i)


# D

x = int(input("Enter the x:"))
d = int(input("Enter the d:"))
k = 0
while(x > 0):
    k = k + (1 if x%10 == d else 0)
    x = x//10
print(k)


# E

x = int(input("Enter the x:"))
sum = 0
while(x > 0):
    sum += x%10
    x = x//10
print(sum)

# F

x = input()
x = x[::-1]
print(int(x))



# G

a = int(input())
for i in range(2 , a):
    if(a % i == 0):
        print(i)
        break


# H

a = int(input())
for i in range(1 , a+1):
    if(a % i == 0):
        print(i, end=" ")


# I


a = int(input())
sum = 0
for i in range(1 , a+1):
    if(a % i == 0):
        sum+=1
print(sum)


# J

sum  =0
for i in range(0,100):
    a = int(input())
    sum+=a
print(sum)



# K

n = int(input())
sum = 0
for i in range(0,n):
    a = int(input())
    sum += a
print(sum)


# L


bin = input()
l = len(bin)
dec = 0
for i in range(l-1,-1,-1):
    if(bin[i] == "1"):
        dec += 2**i
print(dec)



# M

n = int(input())
sum = 0
for i in range(0,n):
    x = int(input())
    while(x > 0):
        sum += 1 if x%10 == 0 else 0
        x = x//10
print(sum)