class DynamicArray():
    def __init__(self, initial_capacity = 1):
        self._size = 0
        self._capacity = initial_capacity
        self._array = [None] * self._capacity

    def _double_size(self):
        old_array = self._array
        self._capacity *= 2
        self._array = [None] *  (self._capacity)

        for i in range(self._size):
            self._array[i] = old_array[i]

    def _halve_size(self):
        old_array = self._array
        self._capacity //= 2
        self._array = [None] * (self._capacity)

        for i in range(self._size):
            self._array[i] = old_array[i]
    
    def insert(self, value):
        if self._size == self._capacity:
            self._double_size()

        self._array[self._size] = value
        self._size += 1

    def find(self, target):
        for index in range(self._size):
            if self._array[index] == target:
                return index

        return -1
    
    def delete(self, target):
        index = self.find(target)

        if index == -1:
            raise Exception("Value not found in array")
        
        for i in range(index, self._size - 1):
            self._array[i] = self._array[i + 1]    

        self._size -= 1

        if self._size < self._capacity // 4 and self._capacity > 1:
            self._halve_size()

def testDynamicArray():
    array = DynamicArray()

    array.insert(10)
    array.insert(20)
    array.insert(30)

    print("Starting array:")  

    for index in range(array._size):
        print(array._array[index])

    print("Index of 20:", array.find(20))
    array.delete(20)
    print("Index of 20 after deletion:", array.find(20))

    array.insert(40)
    array.insert(50)

    print("Final array:")
    for index in range(array._size):
        print(array._array[index])

testDynamicArray()