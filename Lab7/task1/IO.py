import math



#  A
a = int(input("Enter the side:"))
b = int(input("Enter the side:"))
print("Hypothenus " + str(math.sqrt(a**2 + b**2)))



# B


a = int(input("Enter the number:"))
print(f"The next number for the number {a} is {a+1}")
print(f"The previous number for the number {a} is {a-1}")



# C

n = int(input("Enter the n:"))
apples = int(input("Enter the apples:"))
print(int(apples/n))


# D

n = int(input("Enter n:"))
k = int(input("Enter K:"))
print(k % n)


# E

k = 109
v = int(input("Enter v:"))
t = int(input("Enter t:"))
if(v < 0):
    print(109-abs(v)*t)
else:
    print(abs(v*t - 109))