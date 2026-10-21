---
outline: deep
title: "Lab 4 - List"
---

# Lab 04 : List

## Overview

A **list** is a data structure that stores a collection of values in a single variable, kept in order. Where an ordinary variable holds one value, a list holds many, and provides operations to access, modify, and process those values as a group. Lists are one of the most widely used structures in **Python**.

### Learning Outcomes

- **6.1** Identify the concept and basic structure of lists in Python.
- **6.2** Explain element indexing and basic list operations in Python.
- **6.3** Apply lists with indexing, assignment statements, and for loops to solve simple problems.
- **6.4** Identify pre-defined list functions (len( ), min( ), max( ), sum( ) and a method (append( )).
- **6.5** Apply pre-defined list functions (len(), min(), max(), sum()) and the method append() to process list data.
- **6.6** Construct programs that perform list method (sort( )) to sort list data. *(Assignment)*
- **6.7** Determine output from list data using control structures.
- **6.8** Construct Python programs using len( ), min( ), max( ), sum( ) and append( ).
- **6.9** Apply lists with control structures to develop simple Python programs.

### Before You Begin

Open a file called `exercise.py`. In each section, type the example code, run it, and confirm your output matches the expected output shown before attempting the exercises.

## What Is a List?

A list is a collection of items stored in a single variable. It allows the storage of multiple values, which may be of different data types.

A list is written using **square brackets** `[ ]`. The values inside are called **elements**, and they are separated by commas.

Run it. What does it print? <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "kiwi"]
print(fruits)
```

The list is printed back exactly as you wrote it. Its name is `fruits`, and there are three elements, so the size of the list is three.

### List vs Primitive Data Type

A primitive data type, such as an integer or a string, holds a single value. A list holds many values, which may be of different types.

| Feature | List | Primitive data type |
|---------|------|---------------------|
| Stores | multiple values | a single value |
| Data type | can hold different data types | holds only one data type |
| Structure | uses `[ ]` brackets | no brackets |
| Example | `numbers = [1, 3, 5, 7]` | `number = 10` |

### What Data Can Be Stored in a List?

Any data type can be stored in a list.

**Integers.**

Run it and confirm the list prints back the way you wrote it. <Badge type="run" text="Run the below code" />

```python
numbers = [10, 20, 30, 40, 50]
print(numbers)
```

**Floats.**

Run it and confirm the list prints back the way you wrote it. <Badge type="run" text="Run the below code" />

```python
decimal_numbers = [1.5, 2.3, 3.7, 4.1]
print(decimal_numbers)
```

**Strings.**

Run it and confirm the list prints back the way you wrote it. <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "cherry", "date"]
print(fruits)
```

**Booleans.**

Run it and confirm the list prints back the way you wrote it. <Badge type="run" text="Run the below code" />

```python
status = [True, False, True, False]
print(status)
```

**Mixed data types**: a single list can hold values of different types at the same time.

Run it and notice all four types sit together in one list. <Badge type="run" text="Run the below code" />

```python
mixed_list = [25, "hello", 3.14, True]
print(mixed_list)
```

A list can also be created **empty**, ready to be filled later.

Run it. What does an empty list look like when printed? <Badge type="run" text="Run the below code" />

```python
cart = []
print(cart)
```

### Characteristics of a List

A list has five key characteristics:

- **Ordered**: elements are stored in a specific sequence.
- **Mutable**: elements can be added, removed, or changed after the list is created.
- **Allows Duplicates**: the same value may appear more than once.
- **Supports Different Data Types**: a single list can store integers, strings, floats, or booleans together.
- **Dynamic Size**: a list can grow or shrink as needed.

::: tip
Being **mutable** and **dynamic** is what makes a list so useful: you can start with an empty list and keep adding to it as your program runs, which you will do with the `append()` method later in this session.
:::

### Exercises <Badge type="warning" text="Task" />

1. Create a list called `colours` containing four colours of your choice, then print it.
2. Create a list called `temperatures` containing the values `36.5, 37.2, 36.8, 37.0`, then print it.
3. Create a list called `profile` that holds a name (text), an age (number), and whether the person is a student (`True` or `False`). Print it.
4. Create an empty list called `wishlist` and print it.

## List Indexing

Each element in a list has a position, called its **index**.

### Positive Index

Indexing starts at **0**, not 1. The first element is at index `0`, the second at index `1`, and so on, counting from left to right.

Run it. Which two fruits print, and why not the middle one? <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "kiwi"]
print(fruits[0])
print(fruits[2])
```

| element | "apple" | "banana" | "kiwi" |
|---------|---------|----------|--------|
| positive index | 0 | 1 | 2 |

Because indexing starts at `0`, the last element of this three-element list is at index `2`, not `3`. Using an index that does not exist produces an error.

Run it. Instead of a fruit, **Python** stops with an error, read the message it gives. <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "kiwi"]
print(fruits[5])
```

The error tells you the index does not exist in the list.

### Negative Index

Elements can also be accessed from the **end** of the list using negative indexes. The last element is at index `-1`, the second-to-last at `-2`, counting from right to left.

Run it. Which two cities print? Count from the right to check the negative indexes match. <Badge type="run" text="Run the below code" />

```python
cities = ["Kuala Lumpur", "Tokyo", "New York", "Paris", "Dubai"]
print(cities[-1])
print(cities[-3])
```

| element | "apple" | "banana" | "kiwi" | "durian" | "guava" | "orange" |
|---------|---------|----------|--------|----------|---------|----------|
| positive index | 0 | 1 | 2 | 3 | 4 | 5 |
| negative index | -6 | -5 | -4 | -3 | -2 | -1 |

### Exercises: Basic <Badge type="warning" text="Task" />

Use the list `subjects = ["Math", "Science", "History", "English", "Computer Science"]` for these.

1. Print the first subject using a positive index.
2. Print the first subject again using a negative index.
3. Print the last subject using a positive index, then again using a negative index.
4. Print `"History"` using both a positive and a negative index.

### Exercises: Problem Solving <Badge type="warning" text="Task" />

6. A shop displays a chosen product together with the ones on either side of it on the shelf. Using the price list `prices = [45, 88, 62, 91, 77]`, ask the user to enter a position between `1` and `3`. Using indexing only, display the price at that position, the price **before** it, and the price **after** it.

**Sample Input** (the position the user types):
```
2
```

**Sample Output:**
```
Chosen: 62
Before: 88
After: 91
```

## Looping Through a List

Reaching one element at a time with an index works, but most of the time you want to visit **every** element in a list. A loop does this for you. There are two common ways to loop through a list: a `for` loop with an index, and a `while` loop.

### For Loop with Index

To visit every element, loop over the positions. Combine `range()` and `len()`, then use the index to reach each element with `fruits[i]`.

Run it. Each line should now show an index next to its fruit. <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "kiwi"]
for i in range(len(fruits)):
    print(i, fruits[i])
```

`len(fruits)` is `3`, so `range(len(fruits))` produces `0, 1, 2`, and `fruits[i]` reaches each element by its index. Because the loop uses `len()`, it works for a list of any size.

This adds up every number in a list.

Run it, then add the four numbers by hand and check the printed total matches. <Badge type="run" text="Run the below code" />

```python
numbers = [10, 20, 30, 40]
total = 0
for i in range(len(numbers)):
    total = total + numbers[i]
print("Total:", total)
```

Each pass takes the next number and adds it to `total`, so after the loop `total` holds the sum of the whole list.

Because you know each element's position, you can also decide what to do based on the position itself, for example, printing only the elements at **even index positions** (`0`, `2`, `4`, ...).

Run it. Which names are skipped, and why? <Badge type="run" text="Run the below code" />

```python
names = ["Ali", "Sara", "Kumar", "Lee", "Wong"]
for i in range(len(names)):
    if i % 2 == 0:
        print(i, names[i])
```

Only the names at even index positions print.

The index also lets you compare an element with its **neighbour**, the element just before it, at index `i - 1`. This example prints a message whenever a temperature is higher than the day before it.

Run it, then compare each temperature with the one before it to check the days it reports. <Badge type="run" text="Run the below code" />

```python
temps = [25, 27, 26, 30]
for i in range(len(temps)):
    if i > 0 and temps[i] > temps[i - 1]:
        print("Day", i, "was warmer than the day before")
```

The check `i > 0` is important: the very first element (index `0`) has no element before it, so there is nothing to compare it against.

### While Loop

A `while` loop keeps its own counter and repeats as long as a condition is true. To visit a list, the counter starts at `0` and increases each pass, stopping when it reaches the length of the list.

Run it. It should print the same three fruits as the `for` loop did. <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "kiwi"]
i = 0
while i < len(fruits):
    print(fruits[i])
    i = i + 1
```

For simply walking through a whole list, a `while` loop offers no advantage over the `for` loop above. Its usefulness is the **flexibility of its condition**: you control exactly when it stops, so it can end early. For example, this stops as soon as it finds a number above `100`.

Run it. How many numbers print, and why does it stop before the end of the list? <Badge type="run" text="Run the below code" />

```python
numbers = [20, 45, 130, 60, 200]
i = 0
while i < len(numbers) and numbers[i] <= 100:
    print(numbers[i])
    i = i + 1
```

The loop stops at `130` because the condition `numbers[i] <= 100` becomes false, so the remaining elements are never visited.

::: tip
- **For with index**: visit every element, or use its position to compare with neighbours or skip positions.
- **While**: when the stopping point is a condition, not simply the end of the list.
:::

### Exercises: Basic <Badge type="warning" text="Task" />

Use the list `numbers = [4, 8, 15, 16, 23]` for these.

1. Use a `for` loop with an index to print every number in the list.
2. Use a `for` loop with an index to print each number together with its index position.
3. Use a `while` loop to print every number in the list.

### Exercises: Problem Solving <Badge type="warning" text="Task" />

4. An image processing app analyses a row of pixels stored as grayscale values (0 is black, 255 is white). It needs to count the **bright spots**, pixels that are brighter than **both** their left and right neighbours. Given `pixels = [100, 120, 200, 150, 180, 160, 140]`, use a loop to count the bright spots and display the total. (The first and last pixels have only one neighbour, so they can never be a bright spot.)

**Sample Output:**
```
Bright spots: 2
```

5. A school converts marks into grades. Given `marks = [85, 62, 47, 90, 73, 38]`, use a loop to build a **new list** of grades, where each mark becomes `"A"` (75 and above), `"P"` (50 to 74), or `"F"` (below 50). Print the resulting list of grades.

**Sample Output:**
```
Grades: ['A', 'P', 'F', 'A', 'P', 'F']
```

6. A teacher wants to know how many students passed an exam. A pass is a score of `60` or above. Given `scores = [85, 45, 72, 60, 38, 90]`, use a loop to count how many students passed, and display the count.

**Sample Output:**
```
Students who passed: 4
```

7. A cinema row is stored as `seats = [1, 0, 0, 1, 0, 1, 0, 0]`, where `0` is an empty seat and `1` is taken. A couple needs **two empty seats next to each other**. Use a loop to check whether any two adjacent seats are both empty, and print `True` or `False`.

**Sample Output:**
```
True
```

## List Operations

Basic list operations include creating a list and updating its elements.

### Creating a List

A list can be created empty, or with elements already inside it.

```python
shopping = []
numbers = [10, 20, 30, 40, 50]
temperatures = [36.5, 37.2, 36.8, 37.0]
```

### Updating a List

A list is **mutable**: its elements can be changed after it is created. To change an element, assign a new value to it through its index.

Run it, then compare the two printed lines: which element changed, and which stayed the same? <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "kiwi"]
print(fruits)

fruits[1] = "orange"
print(fruits)
```

Updating also works with negative indexes.

Run it. Which two cities were replaced? Count from the right to confirm `-1` and `-3` landed where you expected. <Badge type="run" text="Run the below code" />

```python
cities = ["KL", "Penang", "JB", "Malacca"]
cities[-1] = "Ipoh"
cities[-3] = "Shah Alam"
print(cities)
```

### Exercises: Basic <Badge type="warning" text="Task" />

Use the list `scores = [70, 65, 80, 75, 85]` for these.

1. Print the original list.
2. Change the first score to `75` using a positive index.
3. Change the third score to `90` using a positive index.
4. Change the last score to `95` using a negative index.
5. Print the final list after all three changes.

### Exercises: Problem Solving <Badge type="warning" text="Task" />

6. A warehouse restocks any product whose stock has run low. Given the stock list `stock = [12, 25, 8, 30, 15]`, add `5` units to every item that is **below 20**, leaving the others unchanged. Print the updated list.

**Sample Output:**
```
Updated stock: [17, 25, 13, 30, 20]
```

7. A school records exam marks and applies a rule: any **failing mark** (below 40) is recorded as `0`. Given `marks = [55, 38, 72, 41, 29, 90]`, replace every failing mark with `0`, then print the updated list.

**Sample Output:**
```
Updated marks: [55, 0, 72, 41, 0, 90]
```

## Pre-defined List Functions

**Python** provides several built-in **functions** that give information about a list. A function is used by writing its name and placing the list inside the brackets.

### The len() Function

`len()` returns the number of elements in a list.

Run it. Does the reported length match the number of cars you can count in the list? <Badge type="run" text="Run the below code" />

```python
carlist = ["Saga", "Waja", "Wira", "Persona"]
print("Length of the list:", len(carlist))
```

### The min() and max() Functions

`min()` returns the smallest element and `max()` returns the largest.

Run it. Do the smallest and largest values reported match what you see in the list? <Badge type="run" text="Run the below code" />

```python
numbers = [5, 2, 8, 1, 6]
print("Minimum value:", min(numbers))
print("Maximum value:", max(numbers))
```

With strings, `min()` and `max()` compare alphabetically. `min()` returns the word first in alphabetical order, `max()` the word last.

Run it and check the minimum and maximum words against alphabetical order. <Badge type="run" text="Run the below code" />

```python
string_list = ["apple", "banana", "cherry", "date"]
print("Minimum string:", min(string_list))
print("Maximum string:", max(string_list))
```

These functions require the elements to be of a comparable type. A list that mixes numbers and text causes an error.

Run it. **Python** stops with an error instead of a result, read what the message says. <Badge type="run" text="Run the below code" />

```python
list1 = ['a', 'b', 'c', 50]
print(min(list1))
```

The message explains that it cannot compare a number against text.

::: danger ATTENTION
`min()`, `max()`, and `sum()` must compare or add the elements, and **Python** cannot decide whether a number is smaller or larger than a piece of text. To use these functions, the list must contain values of a **single comparable type**, all numbers, or all strings.
:::

### The sum() Function

`sum()` adds up all the numeric values in a list and returns the total.

Run it, then add the five numbers by hand and check the total matches. <Badge type="run" text="Run the below code" />

```python
numbers = [1, 2, 3, 4, 5]
print("Sum of all elements:", sum(numbers))
```

### Exercises: Basic <Badge type="warning" text="Task" />

1. Create the list `ages = [21, 34, 18, 45, 27]`. Print how many ages there are, the youngest age, and the oldest age.
2. Using the same list, print the total of all the ages.
3. Create the list `words = ["mango", "apple", "durian", "banana"]`. Print the word that comes first alphabetically and the word that comes last.

### Exercises: Problem Solving <Badge type="warning" text="Task" />

4. A teacher enters five students' marks and wants a summary. Ask the user to enter five marks into a list, then use the built-in functions to display the total, the average, the highest, and the lowest mark.

**Sample Input** (five marks):
```
60
85
47
90
73
```

**Sample Output:**
```
Total: 355
Average: 71.0
Highest: 90
Lowest: 47
```

5. A teacher records exam scores and needs a summary report showing the class average, how many students **passed** (scored 60 or above), and how many **failed**. Given `scores = [85, 92, 58, 74, 66, 91]`, use `sum()` and `len()` for the average, then a loop to count the passes and fails. Display all three.

**Sample Output:**
```
Average: 77.7
Passing: 5
Failed: 1
```

### Function vs Method

So far in this section you have used **functions**. The next two sections use **methods**.

A **method** is a function that **belongs to an object**. In **Python**, the values you store in variables are **objects**: the list `marks` is an object, and so is the string `"Aina"`. Each type of object comes with its own methods. A list object comes with `append()` and `sort()`.

- **Function:** not attached to any object. You pass the data **inside the brackets**, for example `len(marks)`.
- **Method:** attached to an object. You write the **object**, a **dot**, then the method, and the method works on that object, for example `marks.append(60)`.

```python
marks = [80, 70, 90]

print(len(marks))   # function: marks goes inside the brackets
marks.append(60)    # method: marks comes before the dot
```

#### Not Every Dot Means a Method

`math.sqrt(25)` also has a dot, but it is a **function**. What matters is **what comes before the dot**:

| Code | Before the dot | Type | The data it works on |
|---|---|---|---|
| `len(marks)` | nothing | Function | `marks`, inside the brackets |
| `math.sqrt(25)` | `math`, a **module** | Function | `25`, inside the brackets |
| `marks.append(60)` | `marks`, a list **object** | Method | `marks` itself, the object before the dot |

`math` is a **module**, only the place where `sqrt()` is kept, so the data still goes inside the brackets. `marks` is an **object**, and `append()` belongs to it, so it works on `marks` directly.

::: tip RULE
- Before the dot is a **module** → it is a **function**.
- Before the dot is an **object**, such as a list → it is a **method**, and it works on that object.
:::

Use `type()` to check what comes before the dot. Run it. <Badge type="run" text="Run the below code" />

```python
import math
marks = [80, 70, 90]
print(type(math))
print(type(marks))
```

**Output:**

```
<class 'module'>
<class 'list'>
```

Because a method belongs to its type of object, it only works on that type. `append()` belongs to list objects, so a string object cannot use it. Run it. <Badge type="run" text="Run the below code" />

```python
name = "Aina"
name.append("!")
```

**Output:**

```
AttributeError: 'str' object has no attribute 'append'
```

## The append() Method

The `append()` method adds a single element to the **end** of a list. It modifies the list in place.

Run it. Where in the list does `"orange"` appear, at the start or the end? <Badge type="run" text="Run the below code" />

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)
```

This is useful together with an empty list: a list can be built up one element at a time, often inside a loop.

Run it. The list starts empty and ends up filled. What values does it hold, and how many? <Badge type="run" text="Run the below code" />

```python
number_list = []
for i in range(5):
    number_list.append(i)
print(number_list)
```

An element can also be appended only when it meets a condition.

Run it. Which numbers `0` to `9` end up in the list, and why were the rest left out? <Badge type="run" text="Run the below code" />

```python
even_numbers = []
for i in range(10):
    if i % 2 == 0:
        even_numbers.append(i)
print(even_numbers)
```

### Exercises: Basic <Badge type="warning" text="Task" />

1. Create an empty list `shopping`. Append four items to it, then print the list.
2. Create the list `basket = ["bread", "milk"]`. Append `"eggs"`, then append `"butter"`, printing the list after each append.

### Exercises: Problem Solving <Badge type="warning" text="Task" />

3. A weather station logs six daily temperatures and wants to collect only the **hot** days (30 and above) into a separate list. Ask the user to enter six temperatures, one at a time. Append only the hot ones to a `hot` list, then print it.

**Sample Input** (six temperatures):
```
28
32
29
35
31
27
```

**Sample Output:**
```
Hot days: [32, 35, 31]
```

4. A shop only accepts items priced RM50 or below. Ask the user to enter six prices, one at a time. Append the accepted ones (RM50 or below) to a list, and count how many were **rejected** (above RM50). Print the accepted list and the number rejected.

**Sample Input** (six prices):
```
30
75
45
90
20
60
```

**Sample Output:**
```
Accepted: [30, 45, 20]
Rejected: 3
```

## The sort() Method

The `sort()` method rearranges the elements of a list into order. By default it sorts in **ascending** order, from smallest to largest.

Run it. In what order do the numbers come out, smallest first or largest first? <Badge type="run" text="Run the below code" />

```python
numbers = [5, 2, 9, 1, 5, 6]
numbers.sort()
print(numbers)
```

Passing `reverse=True` sorts in **descending** order, from largest to smallest.

Run it. How is the order different from the previous run without `reverse=True`? <Badge type="run" text="Run the below code" />

```python
numbers = [5, 2, 9, 1, 5, 6]
numbers.sort(reverse=True)
print(numbers)
```

`sort()` also orders strings alphabetically.

Run it, then compare the two printed lines, one is alphabetical, the other its reverse. <Badge type="run" text="Run the below code" />

```python
fruits = ["banana", "apple", "cherry", "date"]
fruits.sort()
print(fruits)

fruits.sort(reverse=True)
print(fruits)
```

### append() and sort() Return Nothing

`append()` and `sort()` **change the list itself**. They do not give back a new list. Like a function with no `return`, they give back `None`. Storing their result is a common mistake. Run it. <Badge type="run" text="Run the below code" />

```python{2,6}
marks = [80, 70, 90]
result = marks.append(60)
print(result)
print(marks)

sorted_marks = marks.sort()
print(sorted_marks)
print(marks)
```

**Output:**

```
None
[80, 70, 90, 60]
None
[60, 70, 80, 90]
```

There is no error, but `result` and `sorted_marks` hold `None`. The work was done on `marks` itself. Writing `marks = marks.sort()` is worse: it replaces your whole list with `None`.

**Correct:** call the method on its own line, then use the list.

```python
marks = [80, 70, 90]
marks.append(60)
marks.sort()
print(marks)
```

::: info NOTE
This is **not** true for every method. Some list methods do give back a value. For example, `marks.count(80)` returns how many times `80` appears. These methods are not covered in this course. For `append()` and `sort()`, remember: they change the list and return `None`.
:::

### Exercises: Basic <Badge type="warning" text="Task" />

1. Create the list `marks = [88, 42, 91, 67, 73, 55]`. Sort it in ascending order and print it, then sort it in descending order and print it.
2. Create the list `cities = ["Tokyo", "Berlin", "Amman", "Cairo"]`. Sort it alphabetically and print it, then sort it in reverse alphabetical order and print it.

### Exercises: Problem Solving <Badge type="warning" text="Task" />

3. A race records finishing times. Given `times = [45, 32, 58, 29, 41, 37]`, sort the times, then display the **fastest three** times (the first three after sorting) and the winner (the fastest of all).

**Sample Output:**
```
Fastest three times: [29, 32, 37]
Winner's time: 29
```

::: tip
This combines two ideas: `sort()` puts the list in order, and indexing lets you pick out the first few positions once it is sorted.
:::

4. **Combined exercise: Test Scores.** Ask the user to enter five test scores, appending each into a list. Then display the full list, the number of scores, the highest and lowest score, the total, the average, and finally the scores sorted from highest to lowest.

**Sample Input** (the five scores the user types):
```
55
90
72
48
83
```

**Sample Output:**
```
Scores: [55, 90, 72, 48, 83]
Number of scores: 5
Highest: 90
Lowest: 48
Total: 348
Average: 69.6
Sorted (highest to lowest): [90, 83, 72, 55, 48]
```

5. **Combined exercise: Price Check.** Ask the user to enter six prices into a list. Then display the number of prices, the cheapest and most expensive price, the total cost, and the prices sorted from lowest to highest. Finally, append a seventh price entered by the user, sort the list again, and display the updated list with its new total.

**Sample Input** (six prices, then one more to add):
```
12.90
4.50
25.00
8.75
15.60
3.20
9.99
```

**Sample Output:**
```
Number of prices: 6
Cheapest: 3.2
Most expensive: 25.0
Total: 69.95
Sorted: [3.2, 4.5, 8.75, 12.9, 15.6, 25.0]
Updated list: [3.2, 4.5, 8.75, 9.99, 12.9, 15.6, 25.0]
New total: 79.94
```

## Predict the Output <Badge type="tip" text="Trace" />

Read each program carefully and write down what it prints, **without running it**. Then run it to check your answer.

1.
```python
nums = [3, 6, 9, 12]
for i in range(len(nums)):
    print(nums[i] * 2)
```

::: details Click to check your answer
```
6
12
18
24
```
:::

2.
```python
data = [5, 10, 15, 20, 25]
total = 0
for i in range(len(data)):
    if data[i] > 10:
        total = total + data[i]
print(total)
```

::: details Click to check your answer
```
60
```
Only `15`, `20`, and `25` are greater than `10`, and `15 + 20 + 25 = 60`.
:::

3.
```python
values = [7, 2, 9, 4, 11, 6]
count = 0
for i in range(len(values)):
    if values[i] % 2 == 0:
        count = count + 1
print("Even count:", count)
```

::: details Click to check your answer
```
Even count: 3
```
The even numbers are `2`, `4`, and `6`.
:::

4.
```python
items = ["a", "b", "c", "d"]
for i in range(len(items)):
    if i % 2 == 0:
        print(i, items[i])
```

::: details Click to check your answer
```
0 a
2 c
```
Only the even indexes `0` and `2` pass the condition.
:::
