class StaticArray:
    def __init__(self, size):
        self.values = [None] * size
        self.length = 0

    def insert(self, value):
        if self.length == len(self.values):
            raise Exception("array is full")

        new_values = [None] * len(self.values)

        for index in range(self.length):
            new_values[index] = self.values[index]

        new_values[self.length] = value
        self.values = new_values
        self.length += 1

    def delete(self, chosen_index):
        if self.length == 0:
            raise Exception("array is empty")

        if chosen_index < 0 or chosen_index >= self.length:
            raise Exception("invalid index")

        new_values = [None] * len(self.values)
        new_index = 0

        for index in range(self.length):
            if index != chosen_index:
                new_values[new_index] = self.values[index]
                new_index += 1

        self.values = new_values
        self.length -= 1

    def find(self, chosen_value):
        for index in range(self.length):
            if self.values[index] == chosen_value:
                return index

        return -1

def testStaticArray():
    array = StaticArray(3)
    
    array.insert(10)
    array.insert(20)
    array.insert(30)
    
    print("Index of 20:", array.find(20))
    
    array.delete(1)
    
    for index in range(array.length):
        print(array.values[index])

testStaticArray()
