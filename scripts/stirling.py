# Author: Andrew Kim
# Version: 1.0.0, 13 October 2023
# Tester to find accuracy of Stirling's approximation


# import libraries
import random
import math


def random_number(n: int) -> int:
    return random.randint(10 ** (n - 1), 10 ** n - 1)


def stirling(n: int) -> float:
    return math.sqrt(2 * math.pi * n) * ((n / math.e) ** n)

def factorial(n: int) -> int:
    product = 1
    for i in range(1, n + 1):
        product *= i
    return product



for i in range(100, 120):
    print(f"Number: {i}\t Factorial: {factorial(i)}\t Stirling approximation: {stirling(i)}")