def Partition(arr, left, right):
    pivot = left
    low = left+1
    high = right

    while True:
        while arr[pivot] > arr[low]:
            low += 1
        while arr[pivot] < arr[high]:
            high -= 1
        
        if low > high:
            break
        
        arr[low], arr[high] = arr[high], arr[low]
    
    arr[left], arr[high] = arr[high], arr[left]
    return high

def QuickSort(arr, left, right):
    if left > right:
        return
    
    pivot = Partition(arr, left, right)
    QuickSort(arr, left, pivot-1)
    QuickSort(arr, pivot+1, right)

array = [5, 1, 3, 7, 9, 2, 4, 6, 8]
QuickSort(array, 0, len(array)-1)

for i in range(0, len(array), +1):
    print(array[i], end=" ")