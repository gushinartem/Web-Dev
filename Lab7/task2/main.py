from cat import Cat
from dog import Dog




d = Dog("Barsik" , 20)
c = Cat("Murzik" , 40)

arr = [d,c]

for i in arr:
    print(i)
    i.makeSound()

