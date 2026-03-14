from animal import Animal

class Dog(Animal):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.isFriendly = False
    def makeSound(self):
        print("Bark!")
    def __str__(self):
        return self.name + " " + str(self.age)