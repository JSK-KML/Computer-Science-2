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

Try this. <Badge type="run" text="Run the below code" />

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

A restaurant calculates each customer's bill by adding 6% SST and a RM2.00 service charge to the meal price. Without a function, the same formula is repeated for every customer. <Badge type="run" text="Run the below code" />

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

Write the formula **once** inside a function, then call it for each customer. <Badge type="run" text="Run the below code" />

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

The order of the code matters. Here the function is called **before** it is defined. Run it. Does it work? <Badge type="run" text="Run the below code" />

```python
result = calculate_bill(8.50)
print(result)

def calculate_bill(meal_price):
    tax = meal_price * 0.06
    total = meal_price + tax + 2.00
    return total
```

**Output:**

```
NameError: name 'calculate_bill' is not defined
```

When **Python** reaches line 1, it has not seen `calculate_bill` yet, so it does not know what it is. Move the `def` block above the call and run it again. This time it prints `11.01`.

::: warning REMINDER
**Python** reads from top to bottom. **Define** a function before you **call** it, or you will get a `NameError`.
:::

#### Why Does Order Matter in Python?

**Python** uses an **interpreter**. The interpreter translates and runs the program **one line at a time**, from top to bottom. A `def` block is also a statement that runs in turn: the function only exists **after** **Python** has reached its `def` line. In the example above, line 1 runs before the `def` line has been reached, so `calculate_bill` does not exist yet.

**Java** uses a **compiler**. The compiler translates the **whole program** first, before any of it runs. By the time the program starts, every method in the file is already known, so the order they are written in does not matter. The same program written in **Java**, with the call placed above the method, works:

```java
public class Main {
    public static void main(String[] args) {
        double result = calculateBill(8.50);   // called first
        System.out.println(result);
    }

    static double calculateBill(double mealPrice) {   // defined after
        double tax = mealPrice * 0.06;
        return mealPrice + tax + 2.00;
    }
}
```

**Output:** `11.01`

| | **Python** | **Java** |
|---|---|---|
| Language translator | Interpreter | Compiler |
| How the code is read | One line at a time, top to bottom, while running | The whole program, before running |
| Call a function above its definition | `NameError` | Works |

::: info NOTE
This is about the **translator**, not about Java being object-oriented. Any compiled language that reads the whole program first can allow this. Python can be object-oriented too, but it is still interpreted line by line.
:::

### Parameters and Arguments

- A **parameter** is the variable inside the brackets of the **definition**.
- An **argument** is the actual value given when **calling** the function.

Run it. <Badge type="run" text="Run the below code" />

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

A function may or may not take arguments, and may or may not return a value. That gives four combinations. <Badge type="run" text="Run the below code" />

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

`print()` only **displays** a value. `return` **gives back** a value that you can store in a variable and use again. Try this. <Badge type="run" text="Run the below code" />

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

A returned value can be used in further calculations. <Badge type="run" text="Run the below code" />

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

### Returning One Value Only

In this course, a function returns **one value**. You may see code that writes `return area, perimeter` to send back two values. **Python** does not give an error for it, so the syntax is allowed. Run it and check the type of what comes back. <Badge type="run" text="Run the below code" />

```python
def calculate_area_and_perimeter(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

result = calculate_area_and_perimeter(5, 3)
print(result)
print(type(result))
```

**Output:**

```
(15, 16)
<class 'tuple'>
```

The function did not return two separate values. **Python** packed `area` and `perimeter` together into **one** value of type `tuple`, shown by the round brackets `( )`. A **tuple** is a data structure, like a list, that holds several values. Tuples are not part of this course, so do not return more than one value.

If you need two results, write **two functions**, each returning one value:

```python
def calculate_area(length, width):
    return length * width

def calculate_perimeter(length, width):
    return 2 * (length + width)

area = calculate_area(5, 3)
perimeter = calculate_perimeter(5, 3)
print("Area:", area)
print("Perimeter:", perimeter)
```

**Output:** `Area: 15` and `Perimeter: 16`

### Return the Same Data Type Every Time

A function with an `if-else` can have more than one `return` statement. Every `return` in the same function should give back the **same data type**. This function breaks that rule. Run it. <Badge type="run" text="Run the below code" />

```python{5,11}
def calculate_discount(price):
    if price >= 100:
        return price * 0.10
    else:
        return "No discount"

print(type(calculate_discount(150)))
print(type(calculate_discount(80)))

discount = calculate_discount(80)
final_price = 80 - discount
print("Final price:", final_price)
```

**Output:**

```
<class 'float'>
<class 'str'>
Traceback (most recent call last):
  File "practice.py", line 11, in <module>
    final_price = 80 - discount
TypeError: unsupported operand type(s) for -: 'int' and 'str'
```

The function returns a `float` for one path and a `str` for the other. **Python** does not flag the function as wrong. The error message points to **line 11**, `80 - discount`, which is outside the function, because that is where a number was expected. But the real mistake is on **line 5**, `return "No discount"`.

::: danger ATTENTION
In a bigger program, the line that crashes can be **far away** from the real mistake, which makes it hard to find. The error tells you where the program **crashed**, not where the mistake **is**.
:::

This mistake is easy to make in **Python** because you never **declare** the return type. Nothing in `def calculate_discount(price):` says what type the function should give back, so **Python** cannot check it.

Fix it by returning a number on both paths:

```python
def calculate_discount(price):
    if price >= 100:
        return price * 0.10
    else:
        return 0.0
```

Now `80 - calculate_discount(80)` gives `80.0`.

#### Comparison with Java

In **Java**, the return type is **declared** in front of the method name. Here `double` means the method must return a decimal number:

```java
static double calculateDiscount(double price) {
    if (price >= 100) {
        return price * 0.10;
    } else {
        return "No discount";   // not allowed
    }
}
```

The **Java** compiler checks every `return` against the declared type **before** the program runs, and stops with:

```
error: incompatible types: String cannot be converted to double
```

| | **Python** | **Java** |
|---|---|---|
| Return type | Not declared | Declared, e.g. `double` |
| Different types in different `return` statements | Allowed, no warning | Compiler error |
| When you find the mistake | Later, where the result is used, while running | Before running, at the wrong `return` |

::: warning REMINDER
**Python** will not check your return types for you. Make every `return` in a function give back the same data type.
:::

## Keep Variables Inside the Function

In this course, a function only uses two kinds of variables:

- its **parameters**, which receive values from the call, and
- variables it creates **inside** its own body.

These are called **local variables**. They only exist while the function runs. Results leave the function only through `return`.

::: warning WORKING IS NOT THE SAME AS CORRECT
**Python** sometimes lets a function use a variable that was created **outside** it. The program runs without any error, so it looks fine, but it is **not** the correct way to write a function in this course. The examples below show why.
:::

### A Local Variable Cannot Be Used Outside

Run it. Can the last line see `total`? <Badge type="run" text="Run the below code" />

```python{7}
def calculate_bill(meal_price):
    tax = meal_price * 0.06
    total = meal_price + tax + 2.00
    return total

calculate_bill(8.50)
print(total)
```

**Output:**

```
NameError: name 'total' is not defined
```

`total` is local to `calculate_bill()`. When the function finishes, `total` is gone. To use the result outside, **store the returned value**: `total = calculate_bill(8.50)`.

### Working, but Not Correct: Using an Outside Variable

Here `tax_rate` is created **outside** the function, and the function uses it without receiving it as a parameter. Run it. <Badge type="run" text="Run the below code" />

```python{1,4,9}
tax_rate = 0.06

def calculate_bill(meal_price):
    tax = meal_price * tax_rate
    return meal_price + tax + 2.00

print("Bill:", calculate_bill(8.50))

tax_rate = 0.08
print("Bill:", calculate_bill(8.50))
```

**Output:**

```
Bill: 11.01
Bill: 11.18
```

There is no error, so the program **works**. But the same call `calculate_bill(8.50)` gave two different answers. Looking at the function alone, you cannot tell where `tax_rate` comes from or what its value is, and any line elsewhere in the program can change it.

**Correct:** pass it in as a parameter, so everything the function uses is visible in its header.

```python
def calculate_bill(meal_price, tax_rate):
    tax = meal_price * tax_rate
    return meal_price + tax + 2.00

print("Bill:", calculate_bill(8.50, 0.06))
```

### Working, but Not Correct: Same Name Inside and Outside

Predict the output, then run it. <Badge type="run" text="Run the below code" />

```python{1,4,8}
total = 0

def add_tax(price):
    total = price * 1.06
    return total

add_tax(100)
print("Total:", total)
```

**Output:** `Total: 0`

Line 4 does **not** change the `total` on line 1. It creates a **new local** `total` that only exists inside `add_tax()`. The returned value was never stored, so line 8 prints the outside `total`, which is still `0`. Again there is no error, but the answer is wrong.

**Correct:** store the returned value.

```python
def add_tax(price):
    total = price * 1.06
    return total

total = add_tax(100)
print("Total:", total)
```

**Output:** `Total: 106.0`

::: tip REMEMBER
Values go **in** through **parameters**. Results come **out** through **return**. Everything else stays **inside** the function.
:::

## Connecting Multiple Functions

The value returned by one function can be passed as an argument into another function. <Badge type="run" text="Run the below code" />

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

**Function with if-else:** <Badge type="run" text="Run the below code" />

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

**Function with a loop:** <Badge type="run" text="Run the below code" />

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
