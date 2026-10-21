---
outline: deep
title : Lab 2 - Python Programming and Selection
---

# Lab 02 : Python Programming and Selection

## Overview

In this lab you will write and run real **Python** programs. You will start with the basic components of a program, then use operators, learn to recognise the three types of programming errors, and finish with selection.

### Learning Outcomes

**Topic 4: Introduction to Python Programming**

- **4.3** Identify components in a Python program: identifiers, variables, reserved words / keywords, data types, output statements, input statements, import statements, comments and indentation.
- **4.4** Construct Python programs based on components: identifiers, variables, reserved words / keywords, data types, output statements, input statements, import statements, comments and indentation.
- **4.5** Identify the use of assignment, arithmetic, relational, and logical operators.
- **4.6** Convert algebraic expression into Python statement.
- **4.7** Explain types of programming errors: syntax, run-time and logic.
- **4.8** (ii) Compile and run simple Python programs.

**Topic 5: Use of Control Structures in Python**

- **5.1** Apply the sequence control structure to solve given problems using Python.
- **5.2** Construct Python program by using sequence control structure to solve given problems.
- **5.3** Apply single, dual, and multiple selection control structures to solve given problems using Python.
- **5.4** Construct Python programs using single, dual, and multiple selection control structures to solve given problems.

### Before You Begin

Inside your `yourname-cs125` folder, create a new folder named `lab02`. You will save every file for this lab inside `lab02`.

Create a file named `practice.py` in your `lab02` folder. Throughout this lab, type each example into `practice.py`, replacing the previous example, and press the **Run** button to run it.

## Components of a Python Program

### Identifiers and Variables

An **identifier** is a name for something in your program, such as a variable. A **variable** is a named storage location that holds a value.

```python
student_name = "Aina"
age = 18
height = 1.65
```

The `=` sign stores the value on the right into the variable on the left. **Python** works out the data type from the value, so you do not declare it like you did in **Flowgorithm**.

**Rules for naming identifiers:**

1. Can contain letters, digits and underscores (`_`): `speed1`, `total_marks`
2. Cannot contain special characters such as `-`, `@`, `$` or spaces: `my-var` ✗
3. Cannot start with a number: `1variable` ✗
4. Are **case-sensitive**: `age` and `Age` are two different variables
5. Cannot be a reserved word: `class`, `if`, `while` ✗

Use **meaningful** names in **snake_case**: lowercase words joined with an underscore. `total_marks` tells you what the value is, `tm` or `x` does not.

Type this in and run it. <Badge type="run" text="Run the below code" />

```python
age = 25
Age = 30
print(age)
print(Age)
```

The output is `25` then `30`. **Python** treats `age` and `Age` as two separate variables.

A variable can be **reassigned**. The new value replaces the old one. <Badge type="run" text="Run the below code" />

```python
score = 70
score = 85
print(score)
```

The output is `85`.

### Reserved Words

A **reserved word** (keyword) has a special meaning in **Python**, such as `if`, `else`, `elif`, `for`, `while`, `import`, `True`, `False` and `None`. You cannot use them as names. Try it. <Badge type="run" text="Run the below code" />

```python
class = 10
print(class)
```

**Python** refuses to run it and shows `SyntaxError: invalid syntax`. Change `class` to `class_size` and it runs.

Keywords are case-sensitive too. `True` is a keyword, but `true` is not, so writing `is_student = true` gives an error.

### Data Types

| Data type | Python name | Example |
|---|---|---|
| Integer | `int` | `age = 18` |
| Float | `float` | `price = 12.50` |
| Boolean | `bool` | `is_student = True` |
| String | `str` | `name = "Aina"` |
| List | `list` | `marks = [80, 75, 90]` |

A **list** stores several values in one variable using square brackets. For now you only need to recognise it. Lists are covered in Topic 6.

Use `type()` to check the data type of a variable or a value. <Badge type="run" text="Run the below code" />

```python
age = 18
print(type(age))
print(type(12.50))
print(type("Aina"))
print(type(True))
```

**Output:**

```
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

Now predict the answer before you run this. <Badge type="run" text="Run the below code" />

```python
print(type(25))
print(type("25"))
```

The first is `int`, the second is `str`. The quotation marks make `"25"` a piece of text, not a number.

### Strings: len() and Concatenation

`len()` counts the characters in a string. Spaces and symbols count too. <Badge type="run" text="Run the below code" />

```python
name = "Aina Ali"
print(len(name))
```

The output is `8`, because the space is counted.

**Concatenation** joins strings with `+`. <Badge type="run" text="Run the below code" />

```python
first_name = "Aina"
last_name = "Ali"
print(first_name + " " + last_name)
```

The output is `Aina Ali`. Without the `" "` in the middle you would get `AinaAli`.

### Output Statements

`print()` displays information on the screen. <Badge type="run" text="Run the below code" />

```python
student_name = "Aina"
mark = 85

print("Welcome to Python")
print(student_name)
print("Student name:", student_name)
print("Name:", student_name, "Mark:", mark)
```

Use commas to display several items in one `print()`. **Python** puts a space between each item automatically.

Do not put quotation marks around a variable name. Compare the two lines. <Badge type="run" text="Run the below code" />

```python
student_name = "Aina"
print("student_name")
print(student_name)
```

The first line prints the text `student_name`. The second prints the value `Aina`.

### Input Statements

`input()` waits for the user to type something and returns it. Store it in a variable, and use a prompt message so the user knows what to enter. <Badge type="run" text="Run the below code" />

```python
name = input("Enter your name: ")
print("Hello", name)
```

`input()` **always** returns a string, even if the user types a number. Try this and enter `5`, then `3`. <Badge type="run" text="Run the below code" />

```python
first = input("First number: ")
second = input("Second number: ")
print(first + second)
print(type(first))
```

The result is `53`, not `8`, and the type is `str`. `"5" + "3"` joins two pieces of text.

### Type Casting

**Casting** converts a value from one data type to another.

| Function | Converts to | Example | Result |
|---|---|---|---|
| `int()` | integer | `int("25")` | `25` |
| `float()` | float | `float("3.5")` | `3.5` |
| `str()` | string | `str(100)` | `"100"` |
| `bool()` | Boolean | `bool(1)` | `True` |

Fix the previous program by casting each input as you read it. <Badge type="run" text="Run the below code" />

```python
first = int(input("First number: "))
second = int(input("Second number: "))
print(first + second)
```

Run it again with `5` and `3`, and this time you get `8`.

::: warning COMMON MISTAKES
- **Forgetting to store the input.** `input("Enter name: ")` reads the value but throws it away. Use `name = input("Enter name: ")`.
- **Forgetting to cast.** Numbers from `input()` are strings until you use `int()` or `float()`.
- **Using the wrong cast.** `int("3.5")` gives a `ValueError`. Use `float()` for numbers with a decimal point.
:::

### Import Statements

The `import` statement brings in a **module** so you can use its functions. The `math` module provides `math.pi`, `math.pow()` and `math.sqrt()`. <Badge type="run" text="Run the below code" />

```python
import math

radius = 7
circumference = 2 * math.pi * radius
print("Circumference:", circumference)

result = math.pow(3, 4)
print("3 to the power of 4 is", result)

square_root = math.sqrt(64)
print("Square root of 64 is", square_root)
```

`math.pow()` and `math.sqrt()` always return a float, so the results are `81.0` and `8.0`. Put `import` statements at the top of the file.

### Comments

A **comment** explains the code and is ignored when the program runs. <Badge type="run" text="Run the below code" />

```python
# This program calculates the area of a rectangle
length = 5       # in metres
width = 3        # in metres
print(length * width)

"""
This is a multi-line comment.
It uses triple quotes.
"""
```

- `#` starts a single-line comment. It can be on its own line or at the end of a line of code.
- Triple quotes `"""` write a comment over several lines.
- Putting `#` in front of a line of code stops it from running, which is useful when testing.

### Indentation

**Python** uses indentation (spaces at the start of a line) to group statements into a block, such as the statements inside an `if`. Try this. <Badge type="run" text="Run the below code" />

```python
age = 18
if age >= 18:
print("You are allowed to vote")
```

It fails with `IndentationError: expected an indented block`. The `print()` belongs to the `if`, so it must be indented. Fix it. <Badge type="run" text="Run the below code" />

```python
age = 18
if age >= 18:
    print("You are allowed to vote")
```

**Indentation rules:**

1. Use **4 spaces** per level.
2. Do not mix spaces and tabs.
3. All statements in the same block must have the same indentation.

### Student Information <Badge type="warning" text="Task" />

Save a new file named `student-info.py` in your `lab02` folder. Write a program that:

1. Asks for the student's name, age and height in metres
2. Stores each value in a variable with the correct data type
3. Displays each value with a label, and the number of characters in the name

**Sample Input:**
```
Aina
18
1.65
```

**Sample Output:**
```
Name: Aina
Age: 18
Height: 1.65
Name length: 4
```

## Operators

An **operator** is a symbol that performs an operation on values. The values are called **operands**. In `5 + 3`, `+` is the operator and `5` and `3` are the operands.

An **expression** is a combination of values, variables and operators that produces one result, such as `10 + 5 * 2`.

### Assignment Operator

The assignment operator `=` stores a value in a variable. **Python** works out the right side first, then stores the result. <Badge type="run" text="Run the below code" />

```python
total = 3 + 4 * 2
print(total)
```

`4 * 2` gives `8`, then `3 + 8` gives `11`, then `11` is stored in `total`.

You can also assign several variables in one line. <Badge type="run" text="Run the below code" />

```python
a = b = c = 0
x, y, z = 1, 2, 3
print(a, b, c)
print(x, y, z)
```

**Output:** `0 0 0` and `1 2 3`.

**`=` is not the same as `==`.** One `=` **stores** a value. Two `==` **compares** two values and gives `True` or `False`. <Badge type="run" text="Run the below code" />

```python
floor = 13          # store 13 in floor
print(floor == 13)  # compare: True
print(floor == 10)  # compare: False
```

::: warning COMMON MISTAKES
- Value on the left: `10 = x` ✗. The variable always goes on the left.
- Using `==` to assign: `x == 10` does not store anything.
- Using a variable before giving it a value.
- Writing `true` or `false` in lowercase. They must be `True` and `False`.
:::

### Arithmetic Operators

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | Addition | `5 + 2` | `7` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `5 * 2` | `10` |
| `/` | Division | `5 / 2` | `2.5` |
| `//` | Floor division | `5 // 2` | `2` |
| `%` | Remainder (modulus) | `5 % 2` | `1` |
| `**` | Exponentiation | `5 ** 2` | `25` |

Try each one. <Badge type="run" text="Run the below code" />

```python
print(7 / 2)
print(7 // 2)
print(7 % 2)
print(2 ** 3)
```

**Output:** `3.5`, `3`, `1`, `8`.

- `/` always gives a float. `//` gives only the whole-number part.
- `%` gives the remainder: 7 divided by 2 is 3, remainder **1**.
- Use `**` for power. `2 ^ 3` is **not** a power in **Python**.

If an expression mixes `int` and `float`, the result is a `float`. <Badge type="run" text="Run the below code" />

```python
a = 5
b = 2.0
print(a + b)
print(a * b)
```

**Output:** `7.0` and `10.0`.

### Strings and Arithmetic Operators

Strings do not support normal arithmetic. `+` joins strings and `*` repeats a string. <Badge type="run" text="Run the below code" />

```python
print("Hi" + "Mira")
print("Hi" * 3)
print("Hi" - "Mira")
```

The first two print `HiMira` and `HiHiHi`. The third gives a `TypeError`, because you cannot subtract strings.

### Relational Operators

Relational operators compare two values and give `True` or `False`.

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `8 != 8` | `False` |
| `>` | Greater than | `7 > 3` | `True` |
| `<` | Less than | `7 < 3` | `False` |
| `>=` | Greater than or equal to | `5 >= 5` | `True` |
| `<=` | Less than or equal to | `4 <= 3` | `False` |

Run it. <Badge type="run" text="Run the below code" />

```python
mark = 75
print(mark >= 50)
print(mark == 100)
print(mark != 100)
```

**Output:** `True`, `False`, `True`.

### Logical Operators

Logical operators combine conditions.

| Operator | Result | Example | Result |
|---|---|---|---|
| `and` | `True` if both are true | `(5 > 3) and (3 < 7)` | `True` |
| `or` | `True` if at least one is true | `(5 > 3) or (3 > 7)` | `True` |
| `not` | Reverses the result | `not (5 > 3)` | `False` |

Run it. <Badge type="run" text="Run the below code" />

```python
age = 20
has_licence = True
print(age >= 18 and has_licence)
print(age < 18 or has_licence)
print(not has_licence)
```

**Output:** `True`, `True`, `False`.

### Converting Formulas into Python

To turn an algebraic formula into a **Python** statement, replace each part with the matching operator and use brackets to keep the correct order.

| Formula | Python statement |
|---|---|
| Area of a circle: A = πr² | `area = math.pi * radius ** 2` |
| Average of 3 marks: (a + b + c) ÷ 3 | `average = (mark1 + mark2 + mark3) / 3` |
| Hypotenuse: c = √(a² + b²) | `c = math.sqrt(a ** 2 + b ** 2)` |
| Celsius to Fahrenheit: F = (9/5)C + 32 | `fahrenheit = (9 / 5) * celsius + 32` |

Brackets matter. `mark1 + mark2 + mark3 / 3` only divides `mark3` by 3, which gives the wrong answer.

### Operator Precedence

When an expression mixes different operators, **Python** works them out in this order, from highest to lowest:

| Order | Type | Operators |
|---|---|---|
| 1 (highest) | Brackets | `()` |
| 2 | Arithmetic | `**` |
| 3 | Arithmetic | `*`, `/`, `//`, `%` (left to right) |
| 4 | Arithmetic | `+`, `-` (left to right) |
| 5 | Relational | `==`, `!=`, `>`, `<`, `>=`, `<=` |
| 6 | Logical | `not` |
| 7 | Logical | `and` |
| 8 (lowest) | Logical | `or` |

Run it. <Badge type="run" text="Run the below code" />

```python
print(10 + 3 * 2)
print((10 + 3) * 2)
print(2 ** 3 ** 2)
```

**Output:** `16`, `26`, `512`.

The last one is worked out **right to left**: `3 ** 2` is `9` first, then `2 ** 9` is `512`.

Arithmetic comes before relational, and relational comes before logical. <Badge type="run" text="Run the below code" />

```python
print(5 + 3 > 7 and not False)
```

1. Arithmetic: `5 + 3` → `8`
2. Relational: `8 > 7` → `True`
3. `not`: `not False` → `True`
4. `and`: `True and True` → `True`

**Output:** `True`. When in doubt, use brackets to make the order clear.

### Try This <Badge type="warning" text="Task" />

Work out the output on paper first, then run it to check:

```python
print(9 % 6 % 2)
print(2 ** 4, 2 * 4.0, 2 * 4)
print(2 / 4, 2 // 4)
```

### Cylinder Volume <Badge type="warning" text="Task" />

Save a new file named `cylinder.py` in your `lab02` folder. Write a program that asks for the radius and height of a cylinder, then calculates and displays its volume using V = πr²h. Use `math.pi` and `math.pow()`.

**Sample Input:**
```
7
10
```

**Sample Output:**
```
Volume: 1539.3804002589986
```

## Programming Errors

A **programming error** is any mistake that stops a program from running correctly or from giving the correct output. There are three types.

| Type | When it is found | What happens |
|---|---|---|
| **Syntax error** | Before the program runs | The program does not start |
| **Run-time error** | While the program runs | The program starts, then crashes |
| **Logic error** | When you check the output | The program runs, but the answer is wrong |

### Syntax Errors

A **syntax error** breaks the grammar rules of **Python**. Run each one, read the error, then fix it. <Badge type="run" text="Run the below code" />

```python
print("Hello, World)
```

```python
print "Hello, World"
```

```python
age = 18
if age >= 18
    print("Adult")
```

The first is missing a closing quotation mark, the second is missing brackets, and the third is missing the colon `:` after the condition. Using a reserved word as a name, like `class = 10`, is also a syntax error.

### Run-time Errors

A **run-time error** happens while the program is running, even though the syntax is correct. <Badge type="run" text="Run the below code" />

```python
print(10 / 0)
```

```python
num1 = 10
print(Num1)
```

```python
age = "20"
print(age + 5)
```

| Code | Error | Reason |
|---|---|---|
| `10 / 0` | `ZeroDivisionError` | You cannot divide by zero |
| `print(Num1)` | `NameError` | `Num1` is not `num1`. Python is case-sensitive |
| `"20" + 5` | `TypeError` | You cannot add a string and a number |

### Logic Errors

A **logic error** gives no error message at all. The program runs, but the result is wrong. You only find it by checking the output. <Badge type="run" text="Run the below code" />

```python
mark1 = 80
mark2 = 70
mark3 = 90
average = mark1 + mark2 + mark3 / 3
print("Average:", average)
```

This prints `180.0`, but the correct average is `80.0`. The brackets are missing, so only `mark3` is divided by 3. <Badge type="run" text="Run the below code" />

```python
age = 16
if age > 16:
    print("You are allowed to drive")
else:
    print("You are not allowed to drive")
```

If 16-year-olds should be allowed, this is wrong. The condition should be `age >= 16`.

::: tip
The `"5" + "3"` giving `53` earlier in this lab was also a logic error. The program ran, but the answer was wrong.
:::

### Find the Errors <Badge type="warning" text="Task" />

Each program below has **one** error. For each one, say whether it is a syntax, run-time or logic error, then fix it.

```python
length = 5
width = 3
area = length + width
print("Area:", area)
```

```python
price = input("Enter price: ")
total = price * 2 + 1
print(total)
```

```python
name = "Aina"
print("Hello" name)
```

## Selection

Selection lets your program choose what to do based on a condition, just like the diamond shape in **Flowgorithm**.

### Single Selection: if

Run it. <Badge type="run" text="Run the below code" />

```python
mark = 75
if mark >= 50:
    print("Pass")
```

The indented line only runs when the condition is `True`. Change `mark` to `40` and nothing is printed.

### Dual Selection: if...else

Run it. <Badge type="run" text="Run the below code" />

```python
mark = 40
if mark >= 50:
    print("Pass")
else:
    print("Fail")
```

`else` runs when the condition is `False`.

Here is the MyHealth magazine flowchart from Lab 1 written in **Python**. <Badge type="run" text="Run the below code" />

```python
magazine_number = int(input("Enter number of magazines: "))

if magazine_number >= 5:
    unit_price = 5
else:
    unit_price = 7

final_price = magazine_number * unit_price
print("Final price:", final_price)
```

Compare it with your flowchart. The diamond became `if`, the **True** path became the `if` block, and the **False** path became the `else` block.

### Multiple Selection: if...elif...else

Use `elif` when there are more than two choices. <Badge type="run" text="Run the below code" />

```python
mark = int(input("Enter mark: "))

if mark >= 80:
    print("Grade A")
elif mark >= 60:
    print("Grade B")
elif mark >= 40:
    print("Grade C")
else:
    print("Grade F")
```

**Python** checks the conditions from top to bottom and runs **only the first** one that is `True`. That is why `elif mark >= 60` does not need to also say `mark < 80`.

### Conditions with Logical Operators

Run it. <Badge type="run" text="Run the below code" />

```python
age = int(input("Enter age: "))
has_ticket = input("Do you have a ticket? (yes/no) ")

if age >= 18 and has_ticket == "yes":
    print("You may enter")
else:
    print("Entry denied")
```

Both conditions must be `True` for the person to enter.

### BMI Calculator <Badge type="warning" text="Task" />

Save a new file named `bmi.py` in your `lab02` folder. Ask for weight (kg) and height (m), calculate BMI = weight ÷ height², then display the category:

| BMI | Category |
|---|---|
| below 18.5 | Underweight |
| 18.5 to below 25 | Normal |
| 25 to below 30 | Overweight |
| 30 and above | Obese |

**Sample Input:**
```
70
1.75
```

**Sample Output:**
```
BMI: 22.857142857142858
Category: Normal
```

## Exercises

### Exercise 1: Shopping Cost Calculator <Badge type="warning" text="Task" />

Save a new file named `shopping-cost.py` in your `lab02` folder. Write a program that:

1. Takes the item name and price from the user
2. Creates variables for quantity (3 items) and tax rate (6%)
3. Calculates and displays the subtotal, tax amount, and total cost

**Sample Input:**
```
Pen
25
```

**Sample Output:**
```
Subtotal: 75.0
Tax: 4.5
Total: 79.5
```

### Exercise 2: Bank Notes <Badge type="warning" text="Task" />

Save a new file named `bank-notes.py` in your `lab02` folder. A bank teller pays out a cash withdrawal using the fewest possible RM50 notes, then RM1 coins for whatever is left over. Read the withdrawal amount and display how many RM50 notes and how many RM1 coins are handed over.

**Sample Input:**
```
237
```

**Sample Output:**
```
RM50 notes: 4
RM1 coins: 37
```

### Exercise 3: Student Classification <Badge type="warning" text="Task" />

Save a new file named `student-classification.py` in your `lab02` folder. Read a student's GPA and credit hours, then display their classification.

**Rules** (checked in this order, the first match wins):

- **Dean's List** – GPA ≥ 3.8 **and** credit hours ≥ 12
- **Honor Roll** – GPA ≥ 3.5 **and** credit hours ≥ 12
- **Good Standing** – GPA ≥ 2.0
- **Academic Probation** – anything else

**Sample Input:**
```
3.9
9
```

**Sample Output:**
```
Good Standing
```

### Exercise 4: Water Bill Calculator <Badge type="warning" text="Task" />

Save a new file named `water-bill.py` in your `lab02` folder. Read the current and previous meter readings. The consumption is the current reading minus the previous reading.

**Water cost** uses tiered pricing on the consumption:

- First 20 cubic meters: RM0.57 each
- Next 15 cubic meters: RM1.03 each
- Above 35 cubic meters: RM1.40 each

The **total bill** is the water cost plus an RM8 service charge and RM2 sewerage. Display the consumption, the water cost and the total bill.

**Sample Input:**
```
1050
1010
```

**Sample Output:**
```
Consumption: 40
Water cost: 33.85
Total bill: 43.85
```

## Finishing Up

Before you leave, make sure your `lab02` folder contains:

- `practice.py`
- `student-info.py`, `cylinder.py` and `bmi.py` from the tasks
- `shopping-cost.py`, `bank-notes.py`, `student-classification.py` and `water-bill.py` from the exercises
