# Problem: Min Avg 2 Slice

Chapter 5
Preﬁx sums
There is a simple yet powerful technique that allows for the fast calculation of sums of
elements in given slice (contiguous segments of array). Its main idea uses preﬁx sums which
are deﬁned as the consecutive totals of the ﬁrst 0,1,2, . . . , nelements of an array.
a0 a1 a2 . . . an−1
p0= 0 p1=a0p2=a0+a1p3=a0+a1+a2. . . pn=a0+a1+. . .+an−1
We can easily calculate the preﬁx sums in O(n)time complexity. Notice that the total pk
equals pk−1+ak−1, so each consecutive value can be calculated in a constant time.
5.1: Counting preﬁx sums — O(n).
1def prefix_sums(A):
2 n = len(A)
3 P = [0] *(n + 1)
4 for kinxrange(1, n + 1):
5 P[k] = P[k - 1] + A[k - 1]
6 return P
Similarly, we can calculate suﬃx sums, which are the totals of the klast values. Using preﬁx
(or suﬃx) sums allows us to calculate the total of any slice of the array very quickly. For
example,assumethatyouareaskedaboutthetotalsof mslices [x..y]suchthat 0/lessorequalslantx/lessorequalslanty < n,
where the total is the sum ax+ax+1+. . .+ay−1+ay.
The simplest approach is to iterate through the whole array for each result separately;
however,thatrequires O(n·m)time.Thebetterapproachistousepreﬁxsums.Ifwecalculate
the preﬁx sums then we can answer each question directly in constant time. Let’s subtract px
from the value py+1.
py+1 a0a1. . . ax−1axax+1. . . ay−1ay
px a0a1. . . ax−1
py+1−px axax+1. . . ay−1ay
5.2: Total of one slice — O(1).
1def count_total(P, x, y):
2 return P[y + 1] - P[x]
We have calculated the total of ax+ax+1+. . .+ay−1+ayinO(1)time. Using this approach,
the total time complexity is O(n+m).
c/circlecopyrtCopyright 2015 by Codility Limited. All Rights Reserved. Unauthorized copying or publication pro-
hibited.
15.1. Exercise
Problem: You are given a non-empty, zero-indexed array Aofn(1/lessorequalslantn/lessorequalslant100 000) integers
a0, a1, . . . , a n−1(0/lessorequalslantai/lessorequalslant1 000). This array represents number of mushrooms growing on the
consecutive spots along a road. You are also given integers kandm(0/lessorequalslantk, m < n ).
A mushroom picker is at spot number kon the road and should perform mmoves. In
one move she moves to an adjacent spot. She collects all the mushrooms growing on spots
she visits. The goal is to calculate the maximum number of mushrooms that the mushroom
picker can collect in mmoves.
For example, consider array Asuch that:
2375139
0123456
The mushroom picker starts at spot k= 4and should perform m= 6moves. She might
move to spots 3,2,3,4,5,6and thereby collect 1 + 5 + 7 + 3 + 9 = 25 mushrooms. This is the
maximal number of mushrooms she can collect.
Solution O(m2):Note that the best strategy is to move in one direction optionally followed
by some moves in the opposite direction. In other words, the mushroom picker should not
change direction more than once. With this observation we can ﬁnd the simplest solution.
Make the ﬁrst p= 0,1,2, . . . , mmoves in one direction, then the next m−pmoves in the
opposite direction. This is just a simple simulation of the moves of the mushroom picker
which requires O(m2)time.
Solution O(n+m):A better approach is to use preﬁx sums. If we make pmoves in one direc-
tion, we can calculate the maximal opposite location of the mushroom picker. The mushroom
picker collects all mushrooms between these extremes. We can calculate the total number of
collected mushrooms in constant time by using preﬁx sums.
5.3: Mushroom picker — O(n+m)
1def mushrooms(A, k, m):
2 n = len(A)
3 result = 0
4 pref = prefix_sums(A)
5 for pinxrange(min(m, k) + 1):
6 left_pos = k - p
7 right_pos = min(n - 1, max(k, k + m - 2 *p))
8 result = max(result, count_total(pref, left_pos, right_pos))
9 for pinxrange(min(m + 1, n - k)):
10 right_pos = k + p
11 left_pos = max(0, min(k, k - (m - 2 *p)))
12 result = max(result, count_total(pref, left_pos, right_pos))
13 return result
The total time complexity of such a solution is O(n+m).
Every lesson will provide you with programming tasks at http://codility.com/programmers .
2