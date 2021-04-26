arr = [0, 7, 2, 5, 3, 6, 4, 1, 8, 9]
length = len(arr)
i = 0
j = 0

def insertionSort(arr):
    for i in range(0, length, +1):
        for j in range(length-1, i, -1):
            if arr[j] < arr[j-1]:
                arr[j], arr[j-1] = arr[j-1], arr[j]
    return arr

print(insertionSort(arr))
