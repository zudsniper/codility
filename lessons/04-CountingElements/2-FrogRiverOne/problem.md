# Problem: Frog River One

Chapter 4
Counting elements
A numerical sequence can be stored in an array in various ways. In the standard approach,
the consecutive numbers a0, a1, . . . , a n−1are usually put into the corresponding consecutive
indices of the array:
A[0] = a0A[1] = a1. . . A [n−1] =an−1
We can also store the data in a slightly diﬀerent way, by making an array of counters. Each
number may be counted in the array by using an index that corresponds to the value of the
given number.
a0a1a2a3a4a5
004245
201021 count []
012345
Notice that we do not place elements directly into a cell; rather, we simply count their
occurrences. It is important that the array in which we count elements is suﬃciently large.
If we know that all the elements are in the set {0,1, . . . , m}, then the array used for counting
should be of size m+ 1.
4.1: Counting elements — O(n+m).
1def counting(A, m):
2 n = len(A)
3 count = [0] *(m + 1)
4 for kinxrange(n):
5 count[A[k]] += 1
6 return count
The limitation here may be available memory. Usually, we are not able to create arrays of
109integers, because this would require more than one gigabyte of available memory.
Counting the number of negative integers can be done in two ways. The ﬁrst method is
to add some big number to each value: so that, all values would be greater than or equal to
zero. That is, we shift the representation of zero by some arbitrary amount to accommodate
all the negative numbers we need. In the second method, we simply create a second array for
counting negative numbers.
c/circlecopyrtCopyright 2015 by Codility Limited. All Rights Reserved. Unauthorized copying or publication pro-
hibited.
14.1. Exercise
Problem: You are given an integer m(1/lessorequalslantm/lessorequalslant1 000 000 ) and two non-empty, zero-indexed
arrays AandBofnintegers, a0, a1, . . . , a n−1andb0, b1, . . . , b n−1respectively( 0/lessorequalslantai, bi/lessorequalslantm).
The goal is to check whether there is a swap operation which can be performed on these
arrays in such a way that the sum of elements in array Aequals the sum of elements in
array Bafter the swap. By swap operation we mean picking one element from array Aand
one element from array Band exchanging them.
Solution O(n2):The simplest method is to swap every pair of elements and calculate the
totals. Using that approach gives us O(n3)time complexity. A better approach is to calculate
the sums of elements at the beginning, and check only how the totals change during the swap
operation.
4.2: Swap the elements — O(n2).
1def slow_solution(A, B, m):
2 n = len(A)
3 sum_a = sum(A)
4 sum_b = sum(B)
5 for iinxrange(n):
6 for jinxrange(n):
7 change = B[j] - A[i]
8 sum_a += change
9 sum_b -= change
10 ifsum_a == sum_b:
11 return True
12 sum_a -= change
13 sum_b += change
14 return False
Solution O(n+m):The best approach is to count the elements of array Aand calculate
the diﬀerence dbetween the sums of the elements of array AandB.
For every element of array B, we assume that we will swap it with some element from
array A. The diﬀerence dtells us the value from array Athat we are interested in swapping,
because only one value will cause the two totals to be equal. The occurrence of this value can
be found in constant time from the array used for counting.
4.3: Swap the elements — O(n+m).
1def fast_solution(A, B, m):
2 n = len(A)
3 sum_a = sum(A)
4 sum_b = sum(B)
5 d = sum_b - sum_a
6 ifd % 2 == 1:
7 return False
8 d //= 2
9 count = counting(A, m)
10 for iinxrange(n):
11 if0 <= B[i] - d and B[i] - d <= m and count[B[i] - d] > 0:
12 return True
13 return False
Every lesson will provide you with programming tasks at http://codility.com/programmers .
2