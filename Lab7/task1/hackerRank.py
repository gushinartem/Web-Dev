# Say "HELLO"


print("Hello, World!")



# If - Else


n = int(input())

if(n % 2 != 0):
    print("Weird")
elif( 2 <= n <=5):
    print("Not Weird")
elif(6 <= n <= 20):
    print("Weird")
elif(n >= 20):
    print("Not Weird")




# Arithmetic 



a = int(input())
b = int(input())

print(a + b)
print(a -b )
print(a * b)


# Division


a = int(input())
b = int(input())

print(int(a/b))
print(a/b)



# Loops


n = int(input())
for i in range(0,n):
    print(i*i)




# Print function

n = int(input())

for i in range(0,n):
    print(i)



# Tuples


n = input()
t = map(int , n.split())
print(hash(t))






# Capitalize


n = input().split()
for i in range(0,len(n)):
    n[i][0].upper()
print



#  Lists Comprehension

x = int(input())
y = int(input())
z = int(input())
n = int(input())
print("[",end="")
for i in range(x):
    for j in range(y):
        for k in range(z):
            if(i + j + k != n):
                print(f"[{x},{y},{z}],")
print("]")




# Find a substr


pos = 0
count = 0
s = input()
sub = input()
while True:
    pos = s.slice[pos:].find(sub)
    if(pos == -1):
        break
    else:
        pos +=1
    count+=1
print(count)



def make_tags(tag, word):
  return f"<{tag}>{word}</{tag}>"


print(make_tags("i" , "Yay"))