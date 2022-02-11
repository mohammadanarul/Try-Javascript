list = [1,2,1,2,2,5,8,6,'learn with anarul', 'anarul', False, True]

# new_list = []
# for l in list:
#     if type(l) == int:
#         list.append(l)

# print(list)

def fib(n):
    if n==0 or n==1:
        return n
    return fib(n-1) + fib(n-2)

num = fib(55)
print(num)

