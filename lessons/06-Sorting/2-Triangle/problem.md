# Problem: Triangle

Chapter 6
Sorting
Sorting is the process of arranging data in a certain order. Usually, we sort by the value of the
elements. We can sort numbers, words, pairs or objects. For example, we can sort students
by their height, and we can sort cities in alphabetical order or by their numbers of citizens.
The most-used orders are numerical order and alphabetical order. Let’s consider the simplest
set, an array consisting of integers:
A[i]52814 116
i 012345
We want to sort this array into numerical order to obtain the following array:
A[i]125814 16
i 01234 5
There are many sorting algorithms, and they diﬀer considerably in terms of their time com-
plexity and use of memory. Here we describe some of them.
6.1. Selection sort
The idea: Find the minimal element and swap it with the ﬁrst element of an array. Next,
just sort the rest of the array, without the ﬁrst element, in the same way.
Notice that after kiterations the ﬁrst kelements will be sorted in the right order (this
property is called the invariant ).
6.1: Selection sort — O(n2).
1def selectionSort(A):
2 n = len(A)
3 for kinxrange(n):
4 minimal = k
5 for jinxrange(k + 1, n):
6 if(A[minimal] > A[j]):
7 minimal = j
8 A[k], A[minimal] = A[minimal], A[k]
9 return A
The time complexity is quadratic.
c/circlecopyrtCopyright 2015 by Codility Limited. All Rights Reserved. Unauthorized copying or publication pro-
hibited.
16.2. Counting sort
The idea: First, count the elements in the array of counters (see chapter 2). Next, just iterate
through the array of counters in increasing order.
Notice that we have to know the range of the sorted values. If all the elements are in the
set{0,1, . . . , k }, then the array used for counting should be of size k+ 1. The limitation here
may be available memory.
6.2: Counting sort — O(n+k)
1def countingSort(A, k):
2 n = len(A)
3 count = [0] *(k + 1)
4 for iinxrange(n):
5 count[A[i]] += 1
6 p = 0
7 for iinxrange(k + 1):
8 for jinxrange(count[i]):
9 A[p] = i;
10 p += 1;
11 return A
The time complexity here is O(n+k). We need additional memory O(k)to count all the
elements. At ﬁrst sight, the time complexity of the above implementation may appear greater.
However, all the operations in lines 9and10are performed not more than O(n)times.
6.3. Merge sort
The idea: Divide the unsorted array into two halves, sort each half separately and then just
merge them.
After the split, each part is halved again. We repeat this algorithm until we end up
with individual elements, which are sorted by deﬁnition. The merging of two sorted arrays
consisting of nelements takes O(n)time; just repeatedly choose the lower of the ﬁrst elements
of the two merged parts.
Thenumberofdivisionswillbe O(n),becausethelengthofthearrayishalvedoneachiter-
ation.Inthisway,wegetconsecutivelevelswith 1,2,4,8, . . .slices.Foreachlevel,themerging
oftheallconsecutivepairsofslicesrequires O(n)time.Thenumberoflevelsis O(logn),sothe
total time complexity is O(nlogn)(read more at http://en.wikipedia.org/wiki/Merge_sort).
6.4. Sorting functions
A big advantage of many programming languages are their built-in sorting functions. If you
want to sort a list in Python, you can do it with only one line of code.
6.3: Built-in sort — O(nlogn)
1A.sort()
The time complexity of this sorting function is O(nlogn). Generally, sorting algorithms use
very interesting ideas which can be used in other problems. It is worth knowing how they
work, and it is also worth implementing them yourself at least once. In the future you can
use the built-in sorting functions, because their implementations will be faster and they make
your code shorter and more readable.
Every lesson will provide you with programming tasks at http://codility.com/programmers .
2