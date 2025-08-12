# Problem: Tie Ropes

Chapter 16
Greedy algorithms
We consider problems in which a result comprises a sequence of steps or choices that have
to be made to achieve the optimal solution. Greedy programming is a method by which
a solution is determined based on making the locally optimal choice at any given moment.
In other words, we choose the best decision from the viewpoint of the current stage of the
solution.
Depending on the problem, the greedy method of solving a task may or may not be
the best approach. If it is not the best approach, then it often returns a result which is
approximately correct but suboptimal. In such cases dynamic programming or brute-force
can be the optimal approach. On the other hand, if it works correctly, its running time is
usually faster than those of dynamic programming or brute-force.
16.1. The Coin Changing problem
For a given set of denominations, you are asked to ﬁnd the minimum number of coins with
which a given amount of money can be paid. That problem can be approached by a greedy
algorithm that always selects the largest denomination not exceeding the remaining amount
of money to be paid. As long as the remaining amount is greater than zero, the process is
repeated.
A correct algorithm should always return the minimum number of coins. It turns out
that the greedy algorithm is correct for only some denomination selections, but not for all.
For example, for coins of values 1, 2 and 5 the algorithm returns the optimal number of
coins for each amount of money, but for coins of values 1, 3 and 4 the algorithm may return
a suboptimal result. An amount of 6 will be paid with three coins: 4, 1 and 1 by using the
greedy algorithm. The optimal number of coins is actually only two: 3 and 3.
Consider ndenominations 0< m 0/lessorequalslantm1/lessorequalslant. . ./lessorequalslantmn−1and the amount kto be paid.
16.1: The greedy algorithm for ﬁnding change.
1def greedyCoinChanging(M, k):
2 n = len(M)
3 result = []
4 for iinxrange(n - 1, -1, -1):
5 result += [(M[i], k // M[i])]
6 k %= M[i]
7 return result
c/circlecopyrtCopyright 2015 by Codility Limited. All Rights Reserved. Unauthorized copying or publication pro-
hibited.
1The function returns the list of pairs: denomination, number of coins. The time complexity
of the above algorithm is O(n)as the number of coins is added once for every denomination.
216.2. Proving correctness
If we construct an optimal solution by making consecutive choices, then such a property can
be proved by induction: if there exists an optimal solution consistent with the choices that
have been made so far, then there also has to exist an optimal solution consistent with the
next choice (including the situation when the ﬁrst choice is made).
16.3. Exercise
Problem: There are n > 0canoeists weighing respectively 1/lessorequalslantw0/lessorequalslantw1/lessorequalslant. . ./lessorequalslantwn−1/lessorequalslant109.
The goal is to seat them in the minimum number of double canoes whose displacement (the
maximum load) equals k. You may assume that wi/lessorequalslantk.
Solution A O(n):The task can be solved by using a greedy algorithm. The heaviest canoeist
is called fatso. Other canoeists who can be seated with fatso in the canoe are called skinny.
All the other remaining canoeists are also called fatsos.
The idea is that, for the heaviest fatso, we should ﬁnd the heaviest skinny who can be
seated with him. So, we seat together the heaviest fatso and the heaviest skinny. Let us note
that the thinner the heaviest fatso is, the fatter skinny can be. Thus, the division between
fatso and skinny will change over time — as the heaviest fatso gets closer to the pool of
skinnies.
16.2: Canoeist in O(n)solution.
1def greedyCanoeistA(W, k):
2 N = len(W)
3 skinny = deque()
4 fatso = deque()
5 for iinxrange(N - 1):
6 ifW[i] + W[-1] <= k:
7 skinny.append(W[i])
8 else :
9 fatso.append(W[i])
10 fatso.append(W[-1])
11 canoes = 0
12 while (skinny orfatso):
13 iflen(skinny) > 0:
14 skinny.pop()
15 fatso.pop()
16 canoes += 1
17 if(not fatso and skinny):
18 fatso.append(skinny.pop())
19 while (len(fatso) > 1 and fatso[-1] + fatso[0] <= k):
20 skinny.append(fatso.popleft())
21 return canoes
Proof of correctness: There exists an optimal solution in which the heaviest fatso fand
the heaviest skinny sare seated together. If there were a better solution in which fsat alone
thenscould be seated with him anyway. If fatso fwere seated with some skinny x/lessorequalslants, then
xandscould just be swapped. If shas any companion y,xandywould ﬁt together, as
y/lessorequalslantf.
The solution for the ﬁrst canoe is optimal, so the problem can be reduced to seat the
remaining canoeists in the minimum number of canoes.
The total time complexity of this solution is O(n). The outer whileloop performs O(n)steps
since in each step one or two canoeists are seated in a canoe. The inner whileloop in each
3