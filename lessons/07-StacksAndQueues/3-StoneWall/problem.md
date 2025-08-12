# Problem: Stonewall

Chapter 7
Stacks and Queues
7.1. Stack
The stack is a basic data structure in which the insertion of new elements takes place at
the top and deletion of elements also takes place from the top. The idea of the stack can be
illustrated by plates stacked on top of one another. Each new plate is placed on top of the
stack of plates, and plates can only be taken oﬀ the top of the stack.
6
8
4
78
4
74
73
4
7pop pop push(3)
The stack can be represented by an array in which we should also remember the size of
the stack and we must be sure to declare suﬃcient space for the array (in the following
implementation we can store Nelements).
7.1: Push / pop operations — O(1).
1stack = [0] *N
2size = 0
3def push(x):
4 global size
5 stack[size] = x
6 size += 1
7def pop():
8 global size
9 size -= 1
10 return stack[size]
The push function adds an element to the stack. The pop function returns and removes the
most recently pushed element from the stack. We shouldn’t perform a pop operation on an
empty stack.
c/circlecopyrtCopyright 2015 by Codility Limited. All Rights Reserved. Unauthorized copying or publication pro-
hibited.
17.2. Queue
The queue is a basic data structure in which new elements are inserted at the back but old
elements are removed from the front. The idea of the queue can be illustrated by a line of
customers in a grocery store. New people join the back of the queue and the next person to
be served is the ﬁrst one in the line.
7486
headtail
486
headtail
86
headtail
863
headtail
pop pop push(3)
The queue can be represented by an array in which we should also remember the front (head)
and back (tail) of the queue. we must be sure to declare suﬃcient space for the array (in the
following implementation we can store N−1elements).
7.2: Push / pop / size / empty operations — O(1).
1queue = [0] *N
2head, tail = 0, 0
3def push(x):
4 global tail
5 tail = (tail + 1) % N
6 queue[tail] = x
7def pop():
8 global head
9 head = (head + 1) % N
10 return queue[head]
11def size():
12 return (tail - head + N) % N
13def empty():
14 return head == tail
Notice that in the above implementation we used cyclic buﬀer (you can read about it more
at http://en.wikipedia.org/wiki/Circular_buﬀer).
The push function adds an element to the queue. The pop function returns and removes
an element from the front of the queue. We shouldn’t perform a pop operation on an empty
queue (the empty function or the size function can be used to check whether the queue is
empty).
7.3. Exercises
Problem: You are given a zero-indexed array Aconsisting of nintegers: a0, a1, . . . , a n−1.
Array Arepresents a scenario in a grocery store, and contains only 0s and/or 1s:
•0represents the action of a new person joining the line in the grocery store,
•1represents the action of the person at the front of the queue being served and leaving
the line.
The goal is to count the minimum number of people who should have been in the line before
the above scenario, so that the scenario is possible (it is not possible to serve a person if the
line is empty).
2Solution: We should remember the size of the queue and carry out a simulation of people
arriving at and leaving the grocery store. If the size of the queue becomes a negative number
then that sets the lower limit for the number of people who had to stand in the line previously.
We should ﬁnd the smallest negative number to determine the size of the queue during the
whole simulation.
7.3: Golden solution — O(n).
1def groceryStore(A):
2 n = len(A)
3 size, result = 0, 0
4 for iinxrange(n):
5 if(A[i] == 0):
6 size += 1
7 else :
8 size -= 1
9 result = max(result, -size);
10 return result
The total time complexity of the above algorithm is O(n). The space complexity is O(1)
because we don’t store people in the array, but only remember the size of the queue.
Every lesson will provide you with programming tasks at http://codility.com/programmers .
3