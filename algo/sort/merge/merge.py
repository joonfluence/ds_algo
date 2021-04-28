import math

def Merge(arr, left, mid, right):
    #  sortArr = []
     sortArr = [None] * (right+1)
     LIdx = left
     RIdx = mid+1
     sIdx = left

     while LIdx <= mid and RIdx <= right:
         if arr[LIdx] < arr[RIdx]:
             sortArr[sIdx] = arr[LIdx]
             LIdx += 1
         else:
             sortArr[sIdx] = arr[RIdx]
             RIdx += 1
         sIdx += 1
    
     if LIdx > mid:
         while RIdx <= right:
             sortArr[sIdx] = arr[RIdx]
             RIdx += 1
             sIdx += 1
     else:
         while LIdx <= mid:
             sortArr[sIdx] = arr[LIdx]
             LIdx += 1
             sIdx += 1
    
     for i in range(left, right+1, +1):
         arr[i] = sortArr[i]

     sortArr = None

def MergeSort(arr, left, right):
    if left < right:
        mid = math.floor((left+right)/2)
        MergeSort(arr, left, mid)
        MergeSort(arr, mid+1, right)
        Merge(arr, left, mid, right)

arr = [8, 2, 3, 7, 1, 5, 4, 6]
MergeSort(arr, 0, 7)

for i in range(0, 8, +1):
    print(arr[i], end=" ")
