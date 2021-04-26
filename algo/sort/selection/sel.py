arr = [0, 7, 2, 5, 3, 6, 4, 1, 8, 9]
length = len(arr)
i = 0
j = 0
min = None
minIdx = None

def insertionSort(arr):
    for i in range(0, length, +1):
        min = arr[i]
        minIdx = i
        for j in range(length-1, i, -1):
            if min > arr[j]:
                min = arr[j]
                minIdx = j
        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    return arr

print(insertionSort(arr))
