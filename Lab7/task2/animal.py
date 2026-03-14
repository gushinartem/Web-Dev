class Animal:
    def __init__(self, name , age):
        self.name = name
        self.age = age
    def __str__(self):
        return self.name + " " + self.age
    def makeSound(self):
        print("Making some sound !")
    def changeName(self, name):
        self.name = name