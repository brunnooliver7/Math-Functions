import math

# Choose de number you want to check
N = 2_000

for i in range(2,N+1):

    counter = 0

    for j in range(2,N+1):

        if(i % j == 0):
            counter = counter + 1

    # Verify if i is prime
    if(counter <= 1):
        print(i)
