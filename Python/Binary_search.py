list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

target = 8
h = list[len(list) - 1]
l = list[0]

while True:
    m = l + (h - l)//2
    if list[m] > target:
        h = m
    elif list[m] < target:
        l = m
    else:
        print(list[m])
        break
