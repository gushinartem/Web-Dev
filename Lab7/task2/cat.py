from animal import Animal
class Cat(Animal):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.lives = 9
    def makeSound(self):
        print("Meow")
    def __str__(self):
        return self.name + " " + str(self.age)
