# Problem: Min Perimeter Rectangle

Chapter 10
Prime and composite numbers
People have been analyzing prime numbers since time immemorial, but still we continue to
search for fast new algorithms that can check the primality of numbers. A prime number is
a natural number greater than 1 that has exactly two divisors (1 and itself). A composite
number has more than two divisors.
234567891011121314
In the above picture the primes are highlighted in white and composite numbers are shown
in gray.
10.1. Counting divisors
Let’s count the number of divisors of n. The easiest approach is to iterate through all the
numbers from 1tonand check whether or not each one is a divisor. The time complexity of
this solution is O(n).
There is a simple way to improve the above solution. Based on one divisor, we can ﬁnd
the symmetric divisor. More precisely, if number ais a divisor of n, thenn
ais also a divisor.
One of these two divisors is less than or equal to√n. (If that were not the case, nwould be
a product of two numbers greater than√n, which is impossible.)
1 2 3 4 6 9 12 18 36
Thus, iterating through all the numbers from 1to√nallows us to ﬁnd all the divisors. If
number nis of the form k2, then the symmetric divisor of kis also k. This divisor should be
counted just once.
10.1: Counting the number of divisors — O(√n).
1def divisors(n):
c/circlecopyrtCopyright 2015 by Codility Limited. All Rights Reserved. Unauthorized copying or publication pro-
hibited.
c/circlecopyrtCopyright 2015 by Codility Limited. All Rights Reserved. Unauthorized copying or publication pro-
hibited.
12 i = 1
3 result = 0
4 while (i*i < n):
5 if(n % i == 0):
6 result += 2
7 i += 1
8 if(i*i == n):
9 result += 1
10 return result
10.2. Primality test
The primality test of ncan be performed in an analogous way to counting the divisors. If we
ﬁnd a number between 2andn−1that divides nthennis a composite number. Otherwise,
nis a prime number.
10.2: Primality test — O(√n).
1def primality(n):
2 i = 2
3 while (i*i <= n):
4 if(n % i == 0):
5 return False
6 i += 1
7 return True
We assume that 1 is neither a prime nor a composite number, so the above algorithm works
only for n/greaterorequalslant2.
10.3. Exercises
Problem: Consider ncoins aligned in a row. Each coin is showing heads at the beginning.
1 2 3 4 5 6 7 8 9 10
Then, npeople turn over corresponding coins as follows. Person ireverses coins with numbers
that are multiples of i. That is, person iﬂips coins i,2·i,3·i, . . .until no more appropriate
coins remain. The goal is to count the number of coins showing tails. In the above example,
the ﬁnal conﬁguration is:
1 2 3 4 5 6 7 8 9 10
Solution O(nlogn): We can simulate the results of each person reversing coins.
10.3: Reversing coins — O(nlogn).
1def coins(n):
2 result = 0
3 coin = [0] *(n + 1)
4 for iinxrange(1, n + 1):
5 k = i
6 while (k <= n):
7 coin[k] = (coin[k] + 1) % 2
28 k += i
9 result += coin[i]
10 return result
The number of operation can be estimated byn
1+n
2+. . .+n
n, what equals n·(1
1+1
2+. . .+1
n).
The sums of multiplicative inverses (reciprocals) of the ﬁrst nnumbers are called harmonic
numbers, which asymptotically equal O(logn). In summary, the total time complexity is
O(nlogn).
Solution O(logn): Notice that each coin will be turned over exactly as many times as the
numberofitsdivisors.Thecoinsthatarereversedanoddnumberoftimesshowtails,meaning
that it is suﬃcient to ﬁnd the coins with an odd number of divisors.
We know that almost every number has a symmetric divisor (apart from divisors of the
form√n). Thus, every number of the form k2has an odd number of divisors. There are
exactly⌊√n⌋such numbers between 1 and n. Finding the value of ⌊√n⌋takes logarithmic
time (or constant time if we use operations on ﬂoating point numbers).
Every lesson will provide you with programming tasks at http://codility.com/programmers .
3