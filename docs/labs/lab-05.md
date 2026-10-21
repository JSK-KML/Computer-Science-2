---
outline: deep
title : Lab 5 - Functions
---

# Lab 05 : Functions

A **function** is a named block of code that does one job. You write it once and run it whenever you need it by **calling** its name.

Functions give four advantages:

- **Reuse** – write the code once and use it many times.
- **Less repetition** – the same statements are not copied over and over.
- **Readability** – a good function name tells you what the code does.
- **Easier debugging** – if the answer is wrong, you only fix one place.

## Before You Begin

Inside your `yourname-cs125` folder, create a new folder named `lab05`. You will save every file for this lab inside `lab05`.

Create a file named `practice.py` in your `lab05` folder. Throughout this lab, type each example into `practice.py`, replacing the previous example, and press the **Run** button to run it.

## Pre-defined Functions

**Pre-defined functions** are already built into **Python**. You have been using them since Lab 2. You only need to know their name, what to give them, and what they give back (the **return value**).

| **Function** | **Purpose** | **Syntax** | **Return Value** |
|---|---|---|---|
| `print()` | Display output on the screen | `print(value)` | Nothing (`None`) |
| `input()` | Read text typed by the user | `input(prompt)` | The text typed, as a string |
| `len()` | Count the characters in a string | `len(text)` | An integer |
| `round()` | Round a number | `round(number, digits)` | The rounded number |
| `pow()` | Raise `x` to the power `y` | `pow(x, y)` | `x` to the power `y` |
| `sqrt()` | Square root of a number | `math.sqrt(x)` | A float |

`sqrt()` is kept inside the `math` module, so write `import math` at the top of the program before using it.

Try this:

```python
import math

name = input("Enter your name: ")
print("Length of name:", len(name))
print("Rounded:", round(3.14159, 2))
print("2 to the power 3:", pow(2, 3))
print("Square root of 25:", math.sqrt(25))
```

**Test:** enter `Labuan` → **Length of name:** `6`, **Rounded:** `3.14`, **2 to the power 3:** `8`, **Square root of 25:** `5.0`.

Notice that `len()`, `round()`, `pow()` and `math.sqrt()` all **give back** a value, which `print()` then displays.

## User-defined Functions

**User-defined functions** are functions you write yourself, for jobs that **Python** does not already have a function for.

### The Problem with Repetition

A restaurant calculates each customer's bill by adding 6% SST and a RM2.00 service charge to the meal price. Without a function, the same formula is repeated for every customer:

```python
# Customer 1 - Nasi Lemak
price1 = 8.50
tax1 = price1 * 0.06
total1 = price1 + tax1 + 2.00
print("Customer 1 total: RM", round(total1, 2))

# Customer 2 - Roti Canai
price2 = 3.50
tax2 = price2 * 0.06
total2 = price2 + tax2 + 2.00
print("Customer 2 total: RM", round(total2, 2))

# Customer 3 - Mee Goreng
price3 = 7.00
tax3 = price3 * 0.06
total3 = price3 + tax3 + 2.00
print("Customer 3 total: RM", round(total3, 2))
```

**Expected:** `11.01`, `5.71`, `9.42`

It works, but if SST changes from 6% to 8%, you must change `0.06` in three places. With 100 customers, that is 100 changes, and missing one gives a wrong bill.

### Creating a Function

Write the formula **once** inside a function, then call it for each customer:

```python
def calculate_bill(meal_price):
    tax = meal_price * 0.06
    total = meal_price + tax + 2.00
    return total

total1 = calculate_bill(8.50)
print("Customer 1 total: RM", round(total1, 2))

total2 = calculate_bill(3.50)
print("Customer 2 total: RM", round(total2, 2))

total3 = calculate_bill(7.00)
print("Customer 3 total: RM", round(total3, 2))
```

The output is the same, but the formula now lives in one place. If SST changes, you only change one line.

**What should be a parameter?** Look at what **changes** between the repeated blocks. Only the meal price changes, so `meal_price` becomes the parameter. Everything that **stays the same** goes into the function body.

## Components of a Function

```python
def calculate_bill(meal_price):
    tax = meal_price * 0.06
    total = meal_price + tax + 2.00
    return total
```

| **Component** | **In the example** | **Meaning** |
|---|---|---|
| `def` keyword | `def` | Tells **Python** a function is being defined |
| Function name | `calculate_bill` | Lowercase with underscores, describes the job |
| Parameter | `meal_price` | Placeholder for the value the function needs |
| Colon | `:` | Ends the header line |
| Indentation | 4 spaces | Shows which lines belong to the function |
| Body | the indented lines | The statements that run when the function is called |
| `return` | `return total` | Sends the result back to the caller |

::: warning REMINDER
**Python** reads from top to bottom. **Define** a function before you **call** it, or you will get a `NameError`.
:::

### Parameters and Arguments

- A **parameter** is the variable inside the brackets of the **definition**.
- An **argument** is the actual value given when **calling** the function.

```python
def calculate_area(length, width):   # length and width are PARAMETERS
    area = length * width
    return area

result = calculate_area(5, 3)        # 5 and 3 are ARGUMENTS
print("Area:", result)
```

**Expected:** `Area: 15`

The arguments must match the parameters in **number** and **order**. Here `5` goes into `length` and `3` goes into `width`.

## Types of Functions

A function may or may not take arguments, and may or may not return a value. That gives four combinations:

```python
# 1. No arguments, no return value
def show_welcome():
    print("Welcome to CS125")

# 2. With arguments, no return value
def show_score(name, marks):
    print(name, "scored", marks)

# 3. No arguments, with return value
def get_pass_mark():
    return 50

# 4. With arguments, with return value
def calculate_average(mark1, mark2):
    average = (mark1 + mark2) / 2
    return average

show_welcome()
show_score("Ahmad", 85)
pass_mark = get_pass_mark()
print("Pass mark:", pass_mark)
result = calculate_average(70, 85)
print("Average:", result)
```

**Expected:**
```
Welcome to CS125
Ahmad scored 85
Pass mark: 50
Average: 77.5
```

## Storing and Using Returned Values

`print()` only **displays** a value. `return` **gives back** a value that you can store in a variable and use again. Try this:

```python
def add_with_print(a, b):
    print(a + b)

def add_with_return(a, b):
    return a + b

x = add_with_print(5, 3)
print("x contains:", x)

y = add_with_return(5, 3)
print("y contains:", y)
```

**Expected:**
```
8
x contains: None
y contains: 8
```

`x` is `None` because `add_with_print()` has no `return`. When a function has no `return`, **Python** gives back `None`.

A returned value can be used in further calculations:

```python
def celsius_to_fahrenheit(celsius):
    fahrenheit = celsius * 9 / 5 + 32
    return fahrenheit

temp = celsius_to_fahrenheit(100)
print("Fahrenheit:", temp)
print("Hotter by 10:", temp + 10)
```

**Expected:** `Fahrenheit: 212.0` and `Hotter by 10: 222.0`

::: tip WHEN TO USE EACH
Use `print()` to show a result to the user. Use `return` when the result is needed for another calculation or stored in a variable.
:::

## Connecting Multiple Functions

The value returned by one function can be passed as an argument into another function:

```python
def calculate_subtotal(price, quantity):
    subtotal = price * quantity
    return subtotal

def calculate_total(subtotal):
    tax = subtotal * 0.06
    total = subtotal + tax
    return total

subtotal = calculate_subtotal(50, 3)
total = calculate_total(subtotal)
print("Subtotal:", subtotal)
print("Total:", round(total, 2))
```

**Expected:** `Subtotal: 150` and `Total: 159.0`

`calculate_subtotal()` returns `150`, which is stored in `subtotal` and then given to `calculate_total()`.

## Functions with Selection and Repetition

The body of a function can contain an `if-else` or a loop.

**Function with if-else:**

```python
def check_status(marks):
    if marks >= 50:
        return "Pass"
    else:
        return "Fail"

print("Status:", check_status(65))
print("Status:", check_status(40))
```

**Expected:** `Status: Pass` and `Status: Fail`

**Function with a loop:**

```python
def sum_up_to(n):
    total = 0
    for i in range(1, n + 1):
        total = total + i
    return total

print("Sum 1 to 5:", sum_up_to(5))
```

**Expected:** `Sum 1 to 5: 15`

## Temperature Converter <Badge type="warning" text="Task" />

Save a new file named `temperature.py` in your `lab05` folder. Write a function `celsius_to_fahrenheit(celsius)` that returns the temperature in Fahrenheit using `celsius * 9 / 5 + 32`. Ask the user for a temperature in Celsius, call the function, and display the result.

**Test:** `30` → **Expected:** `Fahrenheit: 86.0`

## Shop Discount <Badge type="warning" text="Task" />

Save a new file named `discount.py` in your `lab05` folder. Write two functions:

- `calculate_discount(price)` returns **10%** of the price if the price is **RM100 or more**, otherwise **5%**.
- `calculate_final_price(price, discount)` returns the price minus the discount.

Ask the user for the price, call `calculate_discount()`, pass its returned value into `calculate_final_price()`, then display both values.

**Test:** `150` → **Expected:** `Discount: 15.0` and `Final price: 135.0`

**Test:** `80` → **Expected:** `Discount: 4.0` and `Final price: 76.0`

## Sum of Numbers <Badge type="warning" text="Task" />

Save a new file named `sum-numbers.py` in your `lab05` folder. Write a function `sum_up_to(n)` that uses a `while` loop to add the numbers from `1` to `n` and returns the total. Ask the user for `n` and display the result.

**Test:** `10` → **Expected:** `Sum: 55`

## Finishing Up

Before you leave, make sure your `lab05` folder contains:

- `practice.py`
- `temperature.py`
- `discount.py`
- `sum-numbers.py`
