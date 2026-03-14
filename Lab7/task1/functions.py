
# A

def min(a,b,c,d):
    x1 = b if (a > b) else a
    x2 = d if( c > d) else c
    return x1 if x2 > x1 else x2
a = input()
b = input()
c = input()
d = input()
print(min(a,b,c,d))


# B

def power(a ,b):
    return a**b
a = int(input())
b = int(input())
print(power(a,b))


# C


def xor(x , y):
    if(x == y):
        return 0
    return 1
x = int(input())
y  =int(input())
print(xor(x,y))