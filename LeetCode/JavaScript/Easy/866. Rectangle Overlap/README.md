# 📝 866. Rectangle Overlap (LeetCode)

🔗 [Problem Link](https://leetcode.com/problems/rectangle-overlap/)

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen) ![Language](https://img.shields.io/badge/Language-JavaScript-blue)

### 💡 Tags
Math, Geometry

### 🚀 Performance
- **Runtime:** 0 ms
- **Memory:** 55.7 MB

---

### 📜 Problem Description

An axis-aligned rectangle is represented as a list  `[x1, y1, x2, y2]` , where  `(x1, y1)`  is the coordinate of its bottom-left corner, and  `(x2, y2)`  is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is  **positive** . To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles  `rec1`  and  `rec2` , return  `true`  *if they overlap, otherwise return*  `false` .

**Example 1:**

**Input:**  rec1 = [0,0,2,2], rec2 = [1,1,3,3]

**Output:**  true

**Explanation:**

The rectangles overlap in the region with corners at  `(1,1)` ,  `(2,1)` ,  `(1,2)` , and  `(2,2)` .

This region has positive area, so the rectangles overlap.

**Example 2:**

**Input:**  rec1 = [0,0,1,1], rec2 = [1,0,2,1]

**Output:**  false

**Explanation:**

The rectangles share the vertical edge where  `x = 1` , but they do not have any common interior region.

Since their intersection has zero area, the rectangles do not overlap.

**Example 3:**

**Input:**  rec1 = [0,0,1,1], rec2 = [2,2,3,3]

**Output:**  false

**Explanation:**

The rectangles are completely separate. Rectangle  `rec1`  ends at  `x = 1`  and  `y = 1` , while  `rec2`  starts at  `x = 2`  and  `y = 2` .

Therefore, they have no common points and do not overlap.

**Constraints:**

	
- `rec1.length == 4`
	
- `rec2.length == 4`
	
- `-109 <= rec1[i], rec2[i] <= 109`
	
- `rec1`  and  `rec2`  represent a valid rectangle with a non-zero area.