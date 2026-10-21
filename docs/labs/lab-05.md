---
outline: deep
title : Lab 5 - Functions
---

# Lab 05 : Functions

## Overview

A **function** is a named block of code that does one job. You write it once and run it whenever you need it by **calling** its name.

Functions give four advantages:

- **Reuse** – write the code once and use it many times.
- **Less repetition** – the same statements are not copied over and over.
- **Readability** – a good function name tells you what the code does.
- **Easier debugging** – if the answer is wrong, you only fix one place.

### Learning Outcomes

- **7.1** Explain the concept and advantages of functions in Python programming.
- **7.2** Explain the differences between pre-defined functions and user-defined functions.
- **7.3** Identify the use of common pre-defined Python functions such as print(), len(), input(), pow() and sqrt().
- **7.4** Identify the components of a Python user-defined function, including function name, parameters, return statement and function body.
- **7.5** Apply Python function concepts to write a function definition with or without return values based on a given problem statement.
- **7.6** Apply Python function concepts to write a function call with or without arguments.
- **7.7** Apply Python user-defined functions to perform simple computations based on given scenarios.
- **7.8** Apply functions with or without arguments and return values in function calls.
- **7.9** Construct a Python program using user-defined functions with control structures.

### Before You Begin

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

Try this. <Badge type="warning" text="Run the below code" />

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

A restaurant calculates each customer's bill by adding 6% SST and a RM2.00 service charge to the meal price. Without a function, the same formula is repeated for every customer. <Badge type="warning" text="Run the below code" />

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

Write the formula **once** inside a function, then call it for each customer. <Badge type="warning" text="Run the below code" />

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

Run it. <Badge type="warning" text="Run the below code" />

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

A function may or may not take arguments, and may or may not return a value. That gives four combinations. <Badge type="warning" text="Run the below code" />

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

`print()` only **displays** a value. `return` **gives back** a value that you can store in a variable and use again. Try this. <Badge type="warning" text="Run the below code" />

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

A returned value can be used in further calculations. <Badge type="warning" text="Run the below code" />

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

The value returned by one function can be passed as an argument into another function. <Badge type="warning" text="Run the below code" />

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

**Function with if-else:** <Badge type="warning" text="Run the below code" />

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

**Function with a loop:** <Badge type="warning" text="Run the below code" />

```python
def sum_up_to(n):
    total = 0
    for i in range(1, n + 1):
        total = total + i
    return total

print("Sum 1 to 5:", sum_up_to(5))
```

**Expected:** `Sum 1 to 5: 15`

## Exercises

For each exercise, write the functions described, then write the main part of the program that reads the inputs, calls the functions, and displays the result.

### Exercise 1: Bouncing Ball <Badge type="warning" text="Task" />

Save a new file named `bouncing-ball.py` in your `lab05` folder.

A ball is dropped from a certain height. Each time it hits the ground, it bounces back up to only 80% of its previous height. The ball keeps bouncing until the bounce height is less than 1, at which point it is considered stopped.

Write these functions:

- `calculate_bounce_height(current_height)` returns the next bounce height (80% of the current height).
- `is_ball_stopped(height)` returns `True` if the height is less than 1, otherwise `False`.
- `calculate_bounce_count(initial_height)` uses a `while` loop and the two functions above to count how many times the ball bounces before it stops, and returns the count.

**Sample Input:**
```
100
```

**Sample Output:**
```
Bounces: 21
```

### Exercise 2: Drone Battery Manager <Badge type="warning" text="Task" />

Save a new file named `drone-battery.py` in your `lab05` folder.

A drone uses **1.5% battery per 10 meters** traveled. It must fly to the survey point and back, so the distance is doubled for the **round trip**. In **Sport Mode**, battery usage **increases by 50%**. The drone is safe to fly if its current battery is at least the usage needed.

Write these functions:

- `calculate_base_usage(distance)` returns the battery used for the round trip.
- `apply_mode_bonus(usage, sport_mode)` returns the usage increased by 50% if `sport_mode` is `"yes"`, otherwise the usage unchanged.
- `has_enough_battery(usage, battery)` returns `True` if `battery` is at least `usage`, otherwise `False`.

**Sample Input:**
```
100
44
yes
```

**Sample Output:**
```
Usage: 45.0
Safe to fly: False
```

### Exercise 3: RPG Strike Calculator <Badge type="warning" text="Task" />

Save a new file named `rpg-strike.py` in your `lab05` folder.

A role-playing game calculates combat damage from a hero's **Luck** and **Base Attack**. If the hero's Luck is **above 70**, they land a Critical Hit that **doubles** their attack. The damage dealt is the attack minus the enemy's **Defense**, and it can never be less than 0. The enemy's final health is its health minus the damage, and it can never go below 0.

Write these functions:

- `is_critical_hit(luck)` returns `True` if luck is above 70, otherwise `False`.
- `calculate_raw_damage(base_attack, is_crit)` returns double the base attack if `is_crit` is `True`, otherwise the base attack.
- `calculate_damage(raw_damage, defense)` returns `raw_damage - defense`, or `0` if that is negative.
- `calculate_final_health(health, damage)` returns `health - damage`, or `0` if that is negative.

**Sample Input:**
```
100
50
80
10
```

**Sample Output:**
```
Final health: 10
```

### Exercise 4: Global Shipping Quoter <Badge type="warning" text="Task" />

Save a new file named `shipping-quote.py` in your `lab05` folder.

A shipping firm calculates delivery costs based on weight and destination:

- **Domestic:** RM5.00 per kg
- **International:** RM15.00 per kg
- **Express Surcharge:** add a flat RM10.00 if the customer selects express delivery

Write these functions:

- `get_rate_per_kg(destination)` returns `5.0` for `"Domestic"` and `15.0` for `"International"`.
- `get_express_charge(express)` returns `10.0` if `express` is `"yes"`, otherwise `0.0`.
- `calculate_shipping_cost(weight, destination)` calls `get_rate_per_kg()` and returns the weight multiplied by the rate.

Add the express charge to the shipping cost to get the final quote.

**Sample Input:**
```
2
International
yes
```

**Sample Output:**
```
Quote: 40.0
```

## Finishing Up

Before you leave, make sure your `lab05` folder contains:

- `practice.py`
- `bouncing-ball.py`, `drone-battery.py`, `rpg-strike.py` and `shipping-quote.py` from the exercises
