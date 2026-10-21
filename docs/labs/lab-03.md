---
outline: deep
title : Lab 3 - Repetition
---

# Lab 03 : Repetition

## Overview

Repetition runs the same statements many times. There are two types: **counter-controlled** and **sentinel-controlled**.

### Learning Outcomes

- **5.5** Apply counter-controlled and sentinel-controlled repetition structures to solve given problems using Python.
- **5.6** Construct Python programs using counter-controlled and sentinel-controlled repetition structures to solve given problems.

### Before You Begin

Inside your `yourname-cs125` folder, create a new folder named `lab03`. You will save every file for this lab inside `lab03`.

Create a file named `practice.py` in your `lab03` folder. Throughout this lab, type each example into `practice.py`, replacing the previous example, and press the **Run** button to run it.

## Counter-Controlled: for...in range()

Use a `for` loop when you know how many times to repeat. The `for` loop takes its values one by one from `range()`, and `range()` is controlled by three numbers:

```python
range(start, stop, step)
```

| Part | Meaning | If you leave it out |
|---|---|---|
| `start` | The first value | Starts at `0` |
| `stop` | The loop stops **before** this value. `stop` itself is never included | Must always be given |
| `step` | How much to add each time | Adds `1` |

::: info NOTE
`start` is **included**, but `stop` is **not**. `range(1, 6)` gives `1` to `5`, never `6`.
:::

### range(stop)

With one number, the count starts at `0` and goes up by `1`. <Badge type="run" text="Run the below code" />

```python
for count in range(4):
    print(count)
```

**Output:** `0 1 2 3`. It starts at `0` and stops before `4`, so the loop runs 4 times.

### range(start, stop)

With two numbers, you choose where to start. <Badge type="run" text="Run the below code" />

```python
for number in range(1, 6):
    print(number)
```

**Output:** `1 2 3 4 5`. It starts at `1` and stops before `6`.

### range(start, stop, step)

With three numbers, you also choose how much to jump each time. <Badge type="run" text="Run the below code" />

```python
for number in range(1, 10, 2):
    print(number)
```

**Output:** `1 3 5 7 9`.

| Value | Next value | Inside the range? |
|---|---|---|
| `1` | `1 + 2 = 3` | ✓ |
| `3` | `3 + 2 = 5` | ✓ |
| `5` | `5 + 2 = 7` | ✓ |
| `7` | `7 + 2 = 9` | ✓ |
| `9` | `9 + 2 = 11` | ✗ `11` is not before `10`, so the loop ends |

### Negative Step: Counting Down

When `step` is **negative**, the loop counts **down** instead of up. `start` must now be **bigger** than `stop`, and the loop stops **before** reaching `stop`, just like before. <Badge type="run" text="Run the below code" />

```python
for number in range(5, 0, -1):
    print(number)
```

**Output:** `5 4 3 2 1`. It starts at `5`, subtracts `1` each time, and stops before `0`, so `0` is not printed. <Badge type="run" text="Run the below code" />

```python
for number in range(10, 0, -2):
    print(number)
```

**Output:** `10 8 6 4 2`. It subtracts `2` each time and stops before `0`.

If the direction is wrong, the loop runs **zero** times and prints nothing. <Badge type="run" text="Run the below code" />

```python
for number in range(1, 5, -1):
    print(number)
```

Starting at `1` and counting **down** can never get closer to `5`, so there is nothing to print. The same happens with `range(5, 1)`, because the default step `1` counts **up** but `5` is already past `1`.

::: tip
- Counting **up**: `start` smaller than `stop`, positive `step`.
- Counting **down**: `start` bigger than `stop`, negative `step`.
- Either way, `stop` is never included.
:::

### Number of Repetitions from the User

The number of repetitions can come from the user. <Badge type="run" text="Run the below code" />

```python
times = int(input("How many times? "))
for count in range(1, times + 1):
    print("Hello", count)
```

## Counter-Controlled: while

A counter-controlled loop can also be written with `while`. With `for`, `range()` handles the counter for you. With `while`, you control the counter yourself using **three components**:

| Component | What it does | Where it goes |
|---|---|---|
| 1. **Initial counter** | Gives the counter its starting value | **Before** the loop |
| 2. **Condition** | Checks whether the loop should continue | In the `while` line |
| 3. **Update counter** | Changes the counter each time | At the **end** of the loop body |

Run it. <Badge type="run" text="Run the below code" />

```python
count = 1                 # 1. initial counter

while count <= 5:         # 2. condition
    print(count)
    count = count + 1     # 3. update counter
```

**Output:** `1 2 3 4 5`. This does the same job as `for count in range(1, 6)`.

The three components match the three parts of `range()`:

| `range(1, 6)` | `while` loop |
|---|---|
| `start` = `1` | Initial counter: `count = 1` |
| `stop` = `6` | Condition: `count <= 5` (or `count < 6`) |
| `step` = `1` | Update counter: `count = count + 1` |

Counting down works the same way, with a negative update. <Badge type="run" text="Run the below code" />

```python
count = 5                 # 1. initial counter

while count >= 1:         # 2. condition
    print(count)
    count = count - 1     # 3. update counter
```

**Output:** `5 4 3 2 1`, the same as `for count in range(5, 0, -1)`.

::: warning REMINDER
If you forget the **update counter**, `count` never changes, the condition stays `True`, and the loop runs forever.
:::

## Converting Between for and while <Badge type="warning" text="Task" />

Rewrite each loop using the other type of loop. Run both versions and check that they print the same output.

**Convert `for` to `while`:**

**Loop 1**

```python
for count in range(1, 11):
    print(count)
```

**Loop 2**

```python
for number in range(0, 21, 5):
    print(number)
```

**Loop 3**

```python
for number in range(10, 0, -2):
    print(number)
```

**Convert `while` to `for`:**

**Loop 4**

```python
count = 3
while count <= 7:
    print(count)
    count = count + 1
```

**Loop 5**

```python
count = 1
while count < 20:
    print(count)
    count = count + 3
```

**Loop 6**

```python
count = 9
while count >= 1:
    print(count)
    count = count - 2
```

::: details Click for the expected output
- **Loop 1:** `1 2 3 4 5 6 7 8 9 10`
- **Loop 2:** `0 5 10 15 20`
- **Loop 3:** `10 8 6 4 2`
- **Loop 4:** `3 4 5 6 7`
- **Loop 5:** `1 4 7 10 13 16 19`
- **Loop 6:** `9 7 5 3 1`
:::

## Counter and Accumulator

An **accumulator** is a variable that builds up a total inside the loop. Give it a starting value **before** the loop. <Badge type="run" text="Run the below code" />

```python
total = 0
pass_count = 0

for student in range(1, 4):
    mark = int(input("Enter mark: "))
    total = total + mark
    if mark >= 50:
        pass_count = pass_count + 1

average = total / 3
print("Total:", total)
print("Average:", average)
print("Passed:", pass_count)
```

**Test:** enter `80`, `45`, `70` → **Total:** `195`, **Average:** `65.0`, **Passed:** `2`.

## Sentinel-Controlled: while

Use a **sentinel-controlled** loop when you do not know how many values the user will enter. The user types a special value, the **sentinel**, to stop. The sentinel must be a value that can never be real data, such as `-1` for marks.

A sentinel-controlled loop also has **three components**. They match the counter-controlled `while` loop, but use **input** instead of a counter:

| Component | What it does | Where it goes |
|---|---|---|
| 1. **Initial input** | Reads the first value, so the condition has something to check | **Before** the loop |
| 2. **Condition** | Checks whether the value is the sentinel | In the `while` line |
| 3. **Update input** | Reads the next value, so the loop can stop | At the **end** of the loop body |

Run it. <Badge type="run" text="Run the below code" />

```python
total = 0
count = 0

mark = int(input("Enter mark (-1 to stop): "))      # 1. initial input

while mark != -1:                                    # 2. condition
    total = total + mark
    count = count + 1
    mark = int(input("Enter mark (-1 to stop): "))  # 3. update input

print("Count:", count)
print("Total:", total)
```

| Counter-controlled `while` | Sentinel-controlled `while` |
|---|---|
| Initial counter: `count = 1` | Initial input: `mark = int(input(...))` |
| Condition: `count <= 5` | Condition: `mark != -1` |
| Update counter: `count = count + 1` | Update input: `mark = int(input(...))` |

**Test:** enter `80`, `70`, `90`, then `-1` → **Count:** `3`, **Total:** `240`. The `-1` is not added to the total. It only stops the loop.

::: warning REMINDER
If you forget the **update input**, `mark` never changes and the loop runs forever.
:::

## Average Marks <Badge type="warning" text="Task" />

Save a new file named `average-marks.py` in your `lab03` folder. Using a sentinel-controlled loop with `-1` as the sentinel, keep asking for marks. When the user enters `-1`, display how many marks were entered and their average.

**Sample Input:**
```
80
70
90
-1
```

**Sample Output:**
```
Count: 3
Average: 80.0
```

## Exercises

### Exercise 1: Score Accumulator <Badge type="warning" text="Task" />

Save a new file named `score-accumulator.py` in your `lab03` folder. A game adds up a player's score over several rounds. The number of rounds is given first. Using a `for` loop, ask for each round's score and add it to a running total. If a round's score is above 100, that round earns a 20% bonus, so add the score plus the bonus for that round.

At the end, display the final total score and the number of rounds played.

**Sample Input:**
```
2
80
120
```

**Sample Output:**
```
Total: 224.0
Rounds: 2
```

A score of `80` adds 80 (no bonus), and a score of `120` adds `120 + 24 = 144`.

### Exercise 2: Temperature Monitor <Badge type="warning" text="Task" />

Save a new file named `temperature-monitor.py` in your `lab03` folder. A weather station records temperatures over several days. The number of days and a danger threshold are given first. Using a `for` loop, ask for each day's temperature. Count how many days are **above** the threshold (danger days), and keep a running total so you can work out the average temperature across all the days.

At the end, display the number of danger days and the average temperature.

**Sample Input:**
```
4
35
32
37
34
39
```

**Sample Output:**
```
Danger days: 2
Average: 35.5
```

### Exercise 3: Point Accumulator <Badge type="warning" text="Task" />

Save a new file named `point-accumulator.py` in your `lab03` folder. A player collects points to reach a target. The target is given first. Starting from a total of 0, use a `while` loop that keeps asking for points and adding them to the total, and count how many times you asked. The loop stops once the total reaches or passes the target.

At the end, display the final total and the number of rounds played.

**Sample Input:**
```
100
30
45
35
```

**Sample Output:**
```
Total: 110
Rounds: 3
```

The totals are 30, 75, then 110. Since 110 reaches the target, the loop stops.

### Exercise 4: Winning Margin <Badge type="warning" text="Task" />

Save a new file named `winning-margin.py` in your `lab03` folder. Two players take turns scoring. Scores are entered one at a time until `-1` ends the game. The 1st, 3rd, 5th and other odd-numbered scores belong to Player A, and the 2nd, 4th, 6th and other even-numbered scores belong to Player B.

At the end, display Player A's total, Player B's total, and the winner (`A`, `B`, or `Tie`).

**Sample Input:**
```
10
8
5
12
7
-1
```

**Sample Output:**
```
Player A: 22
Player B: 20
Winner: A
```

Player A gets `10 + 5 + 7 = 22` and Player B gets `8 + 12 = 20`.

## Finishing Up

Before you leave, make sure your `lab03` folder contains:

- `practice.py`
- `average-marks.py` from the task
- `score-accumulator.py`, `temperature-monitor.py`, `point-accumulator.py` and `winning-margin.py` from the exercises
