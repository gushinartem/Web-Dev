

# A
a = int(input("Enter a:"))
b = int(input("Enter b:"))
print( a if a > b else b )


# B

year = int(input("Enter the year:"))
if( ( year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)):
    print("YES")
else:
    print("NO")


# C

a = int(input("Enter the number:"))
answer = int(input("Enter the answer:"))
a = 1 if (int(str(a)[::-1]) if len(str(a)) >= 4 else None) == a else 0
if((a == 0 and answer != 1) or(a == 1 and answer == 1)):
    print("YES")
else:
    print("NO")


# D

a = int(input("Enter the number:"))
if(a > 0):
    print("1")
elif(a == 0):
    print("0")
else:
    print("-1")


# E

a = int(input("Enter the first number:"))
b = int(input ("Etner the second number:"))

print((1 if(a > b) else 0) if (a >= b) else 2)


