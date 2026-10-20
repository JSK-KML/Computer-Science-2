---
outline: deep
title : Lab 1 - Flowgorithm to Python
---

# Lab 01 : Flowgorithm to Python

In this lab you will draw an algorithm as a flowchart in **Flowgorithm**, run it to test your logic, then export it to **Python** code. You will start with the **sequence** structure and then add **selection**.

## Before You Begin

Create a folder for all your CS125 lab work so your files are easy to find.

1. On the `Desktop`, create a new folder named `yourname-cs125` (for example `aiman-cs125`).
2. Inside it, create another folder named `lab01`.

You will save every file for this lab inside `lab01`.

## Introduction to Flowgorithm

**Flowgorithm** is a program that lets you draw an algorithm as a flowchart and then watch it run step-by-step. Each shape (start, input, decision, loop, etc.) represents one action in your logic, so you can see what happens to your variables without writing any code first. When you're ready, **Flowgorithm** can even show the matching **Python** code so you can relate the picture to real code.

Launch **Flowgorithm** by pressing <kbd>⊞ Win</kbd> on your keyboard and type *Flowgorithm*.

When you first launch it, you will see a simple flowchart, containing only `Main` and `End`. This is the default template of any **Flowgorithm** project. Before we edit the file, we need to save the file first.

To know if the file is still unsaved, the name of the file is still called `(Untitled)`. To save the file, click `File` and then `Save As...`. Save it inside your `lab01` folder and name the file exactly as this; `lab-01-1`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

### The Scenario <Badge type="tip" text="Question" />

Throughout this walkthrough we will build a flowchart for this scenario:

>A government tax of 10% and service tax of 5% will be added to the price of a set of meal bought at MFC. Calculate the total price that Ali has to pay for a set of meal.

| **Input** | **Process** | **Output** |
|---|---|---|
| `mealPrice` | Calculate the final price based on meal price and 10% government tax and 5% service tax | `finalPrice` |

For this walkthrough we are focusing on how to use **Flowgorithm**, so take it step by step.

### Creating Our First Flowchart

Hover your mouse on the arrow that is connecting `Main` and `End` until the arrow turns orange, then left click on the arrow.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-2.png" alt="drawing" width="400"/>
</p>

After you click on it, you will see a window popup, listing all the shapes that you can add into your flowchart. Don't worry about the types of shapes that you see here, you will be taught on how to use them later.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-3.png" alt="drawing" width="600"/>
</p>

#### Creating Input and Output

Under the **Statement** category, click the **Input** shape.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-4.png" alt="drawing" width="600"/>
</p>

An `Input` shape will appear in between `Main` and `End`. So if you want to add a new shape in between two shapes, click the line in between those two shapes. Now double click the `Input` shape until a window appears that asks you to enter the variable name. For this scenario, the input name is `mealPrice`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-5.png" alt="drawing" width="400"/>
</p>

::: info NOTE
Any variable name that is used must contain only letters and numbers, you cannot use special characters such as - or _
:::

After finishing those steps, this is what you should see.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-6.png" alt="drawing" width="400"/>
</p>

#### Adding the Output <Badge type="warning" text="Task" />

Now repeat the process again, but this time, use the `Output` shape and enter `finalPrice` as the variable name. Make sure that you click the arrow between `Input` and `End` so you add the `Output` shape in the correct sequence.

#### Declaring the Variables

Your flowchart now uses two variables, `mealPrice` and `finalPrice`, but **Flowgorithm** does not know about them yet. Before a variable can be used, it must be **declared** with a `Declare` shape, and that `Declare` shape must sit **above** the shape that uses the variable.

So we now go back and add a `Declare` shape above `Input mealPrice` and another one above `Output finalPrice`.

Start with `mealPrice`. Click the arrow between `Main` and `Input mealPrice`. In the popup window, under the category **Statement**, choose the `Declare` shape.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-7.png" alt="drawing" width="400"/>
</p>

Double click the `Declare` shape, name the variable exactly as you typed it in the `Input` shape, which is `mealPrice`, and choose the `Integer` data type. Click `OK` to finalise it.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-8.png" alt="drawing" width="400"/>
</p>

`mealPrice` is now declared above the `Input` that uses it. Your flowchart should look like this:

<p align="center">
    <img src="/public/labs/lab-01/lab-1-9.png" alt="drawing" width="300"/>
</p>

#### Declaring finalPrice <Badge type="warning" text="Task" />

Now do the same for `finalPrice`. Click the arrow between `Input mealPrice` and `Output finalPrice`, add a `Declare` shape, name it `finalPrice` and choose the `Integer` data type. This places the declaration above the `Output` that uses it.

Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save the file.

## Creating a Process (The Assign Shape)

So far the flowchart only moves data in and straight back out. A real program has to **do something** to that data in between. That "doing something" is a **process**, and in **Flowgorithm** a process is created with the `Assign` shape.

The `Assign` shape takes an **expression** on the right, calculates its value, and stores the result in a **variable** on the left. This is where the actual maths of your program happens.

To add it, click the arrow between `Integer finalPrice` and `Output finalPrice`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-10.png" alt="drawing" width="200"/>
</p>

In the popup window, under the category **Statement**, choose the `Assign` shape.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-11.png" alt="drawing" width="500"/>
</p>

Double click the new `Assign` shape. The popup has two boxes: the **Variable** box on the left (where the answer is stored) and the **Expression** box on the right (the calculation). The total is the meal price plus 15% tax (10% government tax + 5% service tax), so:

- **Variable:** `finalPrice`
- **Expression:** `mealPrice + (mealPrice * 0.15)`

<p align="center">
    <img src="/public/labs/lab-01/lab-1-12.png" alt="drawing" width="400"/>
</p>

::: info NOTE
You can only assign **into** a variable that has already been declared, and you can only use variables in the expression that already hold a value. This is why we declared `finalPrice` earlier and put the `Assign` **after** the input, not before it. The order matters.
:::

### Adding More Than One Input or Output

Our meal-price example used a single input and a single output, but some problems need more than one of each (for example, converting a temperature in Celsius to both Fahrenheit and Kelvin needs one input and **two** outputs).

Adding them works exactly the same way: click the arrow at the point in the sequence where the new shape should go, then add another `Declare`, `Input`, `Assign`, or `Output`. Every variable must still be declared before it is used.

## Running and Testing

A flowchart that looks correct is not the same as a flowchart that **is** correct. **Flowgorithm** lets you run your flowchart so you can check the logic against your own calculation.

Before running, double-check your flowchart matches this exactly:

<p align="center">
    <img src="/public/labs/lab-01/lab-1-13.png" alt="drawing" width="200"/>
</p>

To run the program, click the **green arrow** at the top of the window. A popup will appear asking for input. Enter a value for `mealPrice`, for example `100`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-14.png" alt="drawing" width="400"/>
</p>

Now **verify** the result yourself. For an input of `100`, the total should be `100 + 10 + 5 = 115`. If **Flowgorithm** shows `115`, your process is correct. If it shows something else, double click your `Assign` shape and check the expression.

::: tip WHY
Always test with a value you can work out by hand. If your flowchart and your calculator disagree, the bug is in the flowchart, and now you know to fix it before you ever write a line of code.
:::

## Exporting Flowgorithm to Python

One of the most useful features of **Flowgorithm** is that it can translate your finished flowchart into real code in many languages, including **Python**. This lets you connect the diagram you understand to the code you are about to learn.

In **Flowgorithm**, at the top bar, click the `Source Code Viewer`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-15.png" alt="drawing" width="400"/>
</p>

A popup window will appear. Click the dropdown at the top left and choose `Python`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-16.png" alt="drawing" width="400"/>
</p>

Now save the code as a **Python** file. In the `Source Code Viewer` toolbar, click the **Save** button (the floppy disk icon). Save it inside your `lab01` folder and name it `lab-01-1.py`.

::: warning REMINDER
Make sure the file name ends with `.py`. Without it, **Python** will not recognise the file as a program.
:::

::: danger ATTENTION
Exporting to **Python** from **Flowgorithm** has a bug: the brackets `( )` in your expressions are not carried over into the code. Without the brackets, the calculation can run in a different order and give a wrong answer, which is a **logic error**. Always compare the exported expression with your `Assign` shape and add back any missing brackets.
:::

## Implementing Selection

So far every flowchart you built runs in a straight line, one shape after another. This is the **sequence** structure. Now you will add **selection**, so your flowchart can make decisions and take different paths depending on the input.

Selection in a flowchart is represented by the diamond shape. In **Flowgorithm**, it is the same. Let's use this scenario to implement selection in **Flowgorithm**:

> MyHealth magazine is sold at RM5.00 each if at least 5 units of the magazine are purchased, and it is sold at the price of RM7.00 each otherwise. Calculate the price a customer has to pay after they enter the quantity of the magazines that they purchased.

Let's skip the `Declare` and `Input` shapes for this question. If you forgot how to do that, you can refer back to [Creating Input and Output](#creating-input-and-output).

After declaring the input and accepting input from the user, you will get this:

<p align="center">
    <img src="/public/labs/lab-01/lab-1-17.png" alt="drawing" width="300"/>
</p>

You have one input, `magazineNumber`. This is a simple selection (if–else) problem: if `magazineNumber` ≥ 5, the unit price is RM5.00. Otherwise, the unit price is RM7.00. Note the boundary case "at least 5", so you must include 5.

Now that we have established the structure of the algorithm, we have discovered a new variable, which is `unitPrice`. Declare the variable using the `Declare` shape just under the input.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-18.png" alt="drawing" width="300"/>
</p>

The selection will be added after `unitPrice` has been declared. The reason we do this is so that we only need to declare it once. If we declared the variable after the selection, we would have to declare it two times, one after the `True` condition and one after the `False` condition.

To add the selection, click the arrow underneath `unitPrice` and a popup window will open. Under the **Control** section, click the `If` (diamond) shape.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-19.png" alt="drawing" width="500"/>
</p>

The diamond shape will automatically have two arrows coming out of it. The left one is for `False` and the right one for `True`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-20.png" alt="drawing" width="300"/>
</p>

Double click the diamond shape and a popup window will appear that prompts you to enter the condition. For our question, we will enter `magazineNumber >= 5` as our condition.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-21.png" alt="drawing" width="400"/>
</p>

::: info NOTE
Only variables that have been declared can be used in the condition. Make sure you declare all the variables that you are going to need. Any condition inside the diamond must evaluate to either `True` or `False`.
:::

Now we need to add the logic for both paths of the selection:

**True Path (Right Side):** If `magazineNumber >= 5` is **True**, the customer is buying 5 or more magazines, so they get the discounted price. We need to set `unitPrice = 5`.

**False Path (Left Side):** If `magazineNumber >= 5` is **False**, the customer is buying fewer than 5 magazines, so they pay the regular price. We need to set `unitPrice = 7`.

Click on the **True** arrow (right side) and add an `Assign` shape. Set the assignment to `unitPrice = 5`.

Click on the **False** arrow (left side) and add an `Assign` shape. Set the assignment to `unitPrice = 7`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-22.png" alt="drawing" width="400"/>
</p>

After both paths, the flowchart merges back together (note the circle connector in the image), and you can continue with calculating the total price by multiplying `unitPrice` with `magazineNumber`.

After the selection structure, we need to complete the flowchart. First, declare a new variable called `finalPrice` using the `Declare` shape to store the calculated total cost.

Next, add an `Assign` shape to calculate the final price using the formula `finalPrice = magazineNumber * unitPrice`. This multiplies the number of magazines by the unit price we determined from the selection.

Finally, add an `Output` shape to display `finalPrice` to the user.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-23.png" alt="drawing" width="400"/>
</p>

The complete flowchart shows how the selection structure works:
- The diamond shape evaluates the condition `magazineNumber >= 5`
- If **True** (right path): `unitPrice = 5`
- If **False** (left path): `unitPrice = 7`
- Both paths merge back together at the circle connector
- Then the final calculation and output steps are executed

## Exporting Flowgorithm to Image

At the top bar, click **Tools > Export to an Image file**.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-24.png" alt="drawing" width="400"/>
</p>

After you click it, a popup window will appear. There is no need to change anything, just click **Create** at the bottom right of the window.

It will then ask for the location and the name of the image. Name the image `lab-01-2` and save it in your `lab01` folder. Also export this walkthrough to **Python** and save it as `lab-01-2.py` in the same folder.

For every question in this lab you produce two files: the flowchart exported as a **PNG image** (`.png`), and the flowchart exported as a **Python file** (`.py`). To create the Python file, export the flowchart the same way you learned in [Exporting Flowgorithm to Python](#exporting-flowgorithm-to-python). Save both into your `lab01` folder, using the names given in the question.

## Selection Questions

### Scenario 1 - Electricity Bill <Badge type="warning" text="Question" />

A utility company charges RM0.30 per kWh for the first 100 kWh, RM0.50 per kWh for the next 100 kWh (101–200 kWh), and RM0.75 per kWh for any usage above 200 kWh.

Calculate the total bill when the customer enters their total kWh consumed.

Inputs:

- `kwh` – total kWh consumed

Outputs:

- `totalBill` – the total electricity bill

Save the PNG image as `scenario-1.png` and the Python file as `scenario-1.py` in your `lab01` folder.

### Scenario 2 - Baggage Allowance Logic <Badge type="warning" text="Question" />

A flight ticket includes 15 kg of free baggage. Excess baggage is charged RM4.00 per kg beyond that limit. However, if the passenger brings no baggage, they receive a RM10.00 discount on the total ticket price.

Given the weight of baggage and ticket price, calculate the final price.

Inputs:

- `weight` – baggage weight in kg

- `ticketPrice` – ticket price (RM)

Outputs:

- `finalPrice` – the final price to pay

Save the PNG image as `scenario-2.png` and the Python file as `scenario-2.py` in your `lab01` folder.

## Finishing Up

Before you leave, make sure your `lab01` folder contains:

- `lab-01-1.fprg` and `lab-01-1.py` from the sequence walkthrough,
- `lab-01-2.png` and `lab-01-2.py` from the selection walkthrough, and
- `scenario-1` and `scenario-2`, each as a `.png` **and** a `.py` file.

Show your completed work to your lecturer.
