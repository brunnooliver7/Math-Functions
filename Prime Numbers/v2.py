import math

# Choose de number you want to check
N = 10_000

# Create a list to populate the prime numbers
PList = [2]

for i in range(2,N+1):

    counter = 0

    for j in range(0,len(PList)):

        if(i % PList[j] == 0):
            counter = counter + 1

    # Verify if i is prime
    if(counter <= 1):
        PList.append(i)

# Print the list
for i in range(1,len(PList)):
    print(PList[i])
    
