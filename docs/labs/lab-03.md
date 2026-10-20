---
outline: deep
title : Lab 3 - Repetition
---

# Lab 03 : Repetition

Repetition runs the same statements many times. There are two types: **counter-controlled** and **sentinel-controlled**.

## Before You Begin

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

With one number, the count starts at `0` and goes up by `1`:

```python
for count in range(4):
    print(count)
```

**Output:** `0 1 2 3`. It starts at `0` and stops before `4`, so the loop runs 4 times.

### range(start, stop)

With two numbers, you choose where to start:

```python
for number in range(1, 6):
    print(number)
```

**Output:** `1 2 3 4 5`. It starts at `1` and stops before `6`.

### range(start, stop, step)

With three numbers, you also choose how much to jump each time:

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

When `step` is **negative**, the loop counts **down** instead of up. `start` must now be **bigger** than `stop`, and the loop stops **before** reaching `stop`, just like before.

```python
for number in range(5, 0, -1):
    print(number)
```

**Output:** `5 4 3 2 1`. It starts at `5`, subtracts `1` each time, and stops before `0`, so `0` is not printed.

```python
for number in range(10, 0, -2):
    print(number)
```

**Output:** `10 8 6 4 2`. It subtracts `2` each time and stops before `0`.

If the direction is wrong, the loop runs **zero** times and prints nothing:

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

The number of repetitions can come from the user:

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

Counting down works the same way, with a negative update:

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

An **accumulator** is a variable that builds up a total inside the loop. Give it a starting value **before** the loop.

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

**Test:** `80`, `70`, `90`, `-1` → **Expected:** `Count: 3` and `Average: 80.0`

## Finishing Up

Before you leave, make sure your `lab03` folder contains:

- `practice.py`
- `average-marks.py` from the task
