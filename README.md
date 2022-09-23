# Cargo-Dropping-Ships
This repo contains a file that solve a DSA challenge

# Cargo-Dropping Ships
There is a cargo ship that contains an unlimited amount of cargo in it. The ship is ready to sail and you have a list of N non-negative integers that denote the water level in the sea at ith points. A Wave is defined as the continuously decreasing water level or continuously increasing water level.

Let A = [1,2,6,4,2,3,1,8,9,7], it has 6 waves in it [1,2,6],[6,4,2],[2,3],[3,1],[1,8,9],[9,7]
The amount of cargo that falls into the sea is equal to the product of the smallest height of the wave and length of the wave.
You have to find the total amount of cargo which falls into the sea.

Note: No Two adjacent values will be equal in the list.

## Input:
First-line contains T-number of TestCases. Then for every test case,

1st line contains a non-negative integer N.
The next line contains a List of N space-separated integer denoting the water level at the ith point.
## Output:
The total amount of cargo that falls into the sea.

## Constraints:

2 <= T <= 1e5
1<=N<=1e5
1 <= A[i] <=1e3
