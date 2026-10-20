---
outline: deep
title : Lab 1 - Flowgorithm to Python
---

# Lab 01 : Flowgorithm to Python

In this lab you will draw an algorithm as a flowchart in **Flowgorithm**, run it to test your logic, then export it to **Python** and run the code from the terminal.

## Before You Begin

Create a folder for all your CS125 lab work so your files are easy to find.

1. On the `Desktop`, create a new folder named `yourname-cs125` (for example `aiman-cs125`).
2. Inside it, create another folder named `lab01`.
3. Open **VS Code**, click `File` → `Open Folder...` and open your `yourname-cs125` folder.

::: warning REMINDER
Many students share the same PC. Make sure you open **your own** folder, not a classmate's, before you start.
:::

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
| `mealPrice` | Calculate the final price: meal price plus 10% government tax and 5% service tax (15% in total) | `finalPrice` |

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

Now repeat the process again, but this time, use the `Output` shape and enter `finalPrice` as the variable name. Make sure that you click the arrow between `Input` and `End` so you add the `Output` shape in the correct sequence.

#### Declaring the Variable

In **Flowgorithm**, every variable must be declared first, separately from the `Input` and `Output` shapes. Click the arrow between `Main` and `Input` so we can declare the variable used in the `Input` shape.

In the popup window, under the category **Statement**, choose the `Declare` shape.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-7.png" alt="drawing" width="400"/>
</p>

Double click the `Declare` shape and name the variable exactly as you put in the input, which in our case is `mealPrice`, and choose the `Integer` data type. Click `OK` to finalise it.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-8.png" alt="drawing" width="400"/>
</p>

The result afterwards should look like the below.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-9.png" alt="drawing" width="300"/>
</p>

Now declare `finalPrice` too. Click the arrow between `Input mealPrice` and `Output finalPrice`, add a `Declare` shape, name it `finalPrice` and choose the `Integer` data type. Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save the file.

::: warning REMINDER
Make sure you click the correct arrow to ensure that each variable is declared in the correct sequence.
:::

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

Our meal-price example used a single input and a single output, but several of the exercises below need more than one of each (the storage converter, for example, has one input and **four** outputs).

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

First, in **VS Code**, right click the `lab01` folder and click `New File`. Name the file `lab-01-1.py`.

Back in **Flowgorithm**, at the top bar, click the `Source Code Viewer`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-15.png" alt="drawing" width="400"/>
</p>

A popup window will appear. Click the dropdown at the top left and choose `Python`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-16.png" alt="drawing" width="400"/>
</p>

Copy the generated code from the window into your `lab-01-1.py` file and save it.

::: info NOTE
Take a moment to read the **Python** code it produced. Each `Declare`, `Input`, `Assign`, and `Output` shape in your flowchart became a line of code. You will be writing this kind of code by hand soon, so seeing the flowchart and the code side by side is good practice.
:::

## Working with the Command Line

So far you have run your flowchart with the green arrow and managed your files by clicking. Programmers do much of this same work by typing into the **terminal** instead, giving the computer one **command** at a time. In this section you will run the **Python** file you just exported entirely from the command line.

Open a terminal in **VS Code** with `Terminal` → `New Terminal`. A panel appears at the bottom, with a line waiting for your first command.

A terminal is always "inside" one folder, called the **working directory**, so the first thing to do is ask where you are:

```bash
pwd
```

`pwd` (*print working directory*) prints the full path of the folder you are currently in. The output looks like this:

```
/c/Users/Aiman/Desktop/aiman-cs125
```

Now take a look at what is inside the current directory:

```bash
ls
```

`ls` (*list*) shows the files and folders inside your working directory:

```
lab01
```

To move into a folder, use `cd` (*change directory*):

```bash
cd lab01
```

Run `pwd` again and you will see you are now inside `lab01`:

```
/c/Users/Aiman/Desktop/aiman-cs125/lab01
```

Run `ls` here, and the output lists the two files you saved earlier:

```
lab-01-1.fprg  lab-01-1.py
```

That confirms you are in the right place. Now run the file with the **Python** interpreter:

```bash
python lab-01-1.py
```

The program runs, asks for your input just as before, and prints the result straight into the terminal.

::: info NOTE
If `python` is not recognised, try `py lab-01-1.py` instead. On **Windows** the Python launcher is sometimes called `py`.
:::

::: tip WHY
Clicking the ▶ button in **VS Code** does all of this for you: it opens a terminal and runs `python` on your file behind the scenes. Learning the command underneath means you understand what the button is really doing.
:::

## Exercises <Badge type="tip" text="Task" />

For each exercise:

1. Build the flowchart in **Flowgorithm** and save it in your `lab01` folder with the file name given.
2. Run it in **Flowgorithm** using the **Test** input and check that your answer matches the **Expected** output.
3. Export it to **Python** with the same name (for example `exercise-1.py`) and run it in the terminal with the same test input.

::: warning REMINDER
If your output does not match the expected answer, check your `Assign` expressions and the order of your shapes before moving on.
:::

### Exercise 1 – Hotel Reservation <Badge type="tip" text="Question" />

Mr Rahman plans to make a reservation for a hotel room in Langkawi Island. The basic rate is RM250.00 per night and service charge is 15% of the room rate. Determine the total payment if he books the hotel room for n nights.

- **File:** `exercise-1.fprg` and `exercise-1.py`
- **Inputs:** `numNight`
- **Outputs:** `totalPayment`
- **Test:** `numNight` = 2 → **Expected:** `totalPayment` = 575

### Exercise 2 – Photo Printing <Badge type="tip" text="Question" />

A phone shop charges customers to print photos. There is a fixed service fee of RM2 per order, plus RM0.50 for each photo printed. Given the number of photos a customer wants printed, calculate the total cost of their order.

- **File:** `exercise-2.fprg` and `exercise-2.py`
- **Inputs:** `numPhotos`
- **Outputs:** `totalCost`
- **Test:** `numPhotos` = 10 → **Expected:** `totalCost` = 7

### Exercise 3 – Money Changer <Badge type="tip" text="Question" />

A money changer charges a 2% commission on the amount of Ringgit handed over. The commission is deducted first, and only the remaining Ringgit is converted to Thai Baht at the day's exchange rate. Calculate the amount of Baht received.

- **File:** `exercise-3.fprg` and `exercise-3.py`
- **Inputs:** `ringgit`, `exchangeRate`
- **Outputs:** `baht`
- **Test:** `ringgit` = 1000, `exchangeRate` = 7.5 → **Expected:** `baht` = 7350

### Exercise 4 – Cookie Calories <Badge type="tip" text="Question" />

A pack contains 40 pieces of cookies. The calorie info claims 10 servings per pack. Each serving equals 300 calories. Calculate the total calories consumed based on number of packs eaten.

- **File:** `exercise-4.fprg` and `exercise-4.py`
- **Inputs:** `packsEaten`
- **Outputs:** `totalCalories`
- **Test:** `packsEaten` = 2 → **Expected:** `totalCalories` = 6000

### Exercise 5 – Storage Conversion <Badge type="tip" text="Question" />

Prompt user to input a size in Kilobyte, and convert the input into Megabyte, Gigabyte, Terabyte and Petabyte. Use 1 MB = 1024 KB, 1 GB = 1024 MB, and so on.

- **File:** `exercise-5.fprg` and `exercise-5.py`
- **Inputs:** `kilobyte`
- **Outputs:** `megabyte`, `gigabyte`, `terabyte`, `petabyte`
- **Test:** `kilobyte` = 1048576 → **Expected:** `megabyte` = 1024, `gigabyte` = 1, `terabyte` = 0.0009765625, `petabyte` = 0.00000095367431640625 (Python may show this as `9.5367431640625e-07`)

### Exercise 6 – Temperature Conversion <Badge type="tip" text="Question" />

Prompt user to input a temperature in Celsius and convert it to Fahrenheit and Kelvin.

- **File:** `exercise-6.fprg` and `exercise-6.py`
- **Inputs:** `celsius`
- **Outputs:** `fahrenheit`, `kelvin`
- **Test:** `celsius` = 100 → **Expected:** `fahrenheit` = 212, `kelvin` = 373.15

### Exercise 7 – Wage to Mow Yard <Badge type="tip" text="Question" />

The wage to mow the yard is RM2.00 per square meter. The yard area is the large rectangle minus the house rectangle. You are given the length and width of the yard boundary and the length and width of the house. Calculate the wage.

<p align="center">
    <img src="/public/labs/lab-01/mow-yard.png" alt="drawing" width="400"/>
</p>

- **File:** `exercise-7.fprg` and `exercise-7.py`
- **Inputs:** `yardLength`, `yardWidth`, `houseLength`, `houseWidth`
- **Outputs:** `wage`
- **Test:** `yardLength` = 20, `yardWidth` = 15, `houseLength` = 10, `houseWidth` = 8 → **Expected:** `wage` = 440

### Exercise 8 – Air-Conditioner Running Cost <Badge type="tip" text="Question" />

Pak Long has been complaining about his electricity bill. His old air-conditioner draws a certain amount of power in watts, and he leaves it running for a number of hours every night. Electricity is charged at RM0.218 per kilowatt-hour. Pak Long wants to know how much that one air-conditioner costs him to run each night, and across a whole month of 30 days.

- **File:** `exercise-8.fprg` and `exercise-8.py`
- **Inputs:** `watts`, `hours`
- **Outputs:** `nightCost`, `monthCost`
- **Test:** `watts` = 1500, `hours` = 8 → **Expected:** `nightCost` = 2.616, `monthCost` = 78.48

## Finishing Up

Before you leave, make sure your `lab01` folder contains:

- `lab-01-1.fprg` and `lab-01-1.py` from the walkthrough, and
- `exercise-1` to `exercise-8`, each as a `.fprg` **and** a `.py` file.

Show your completed work to your lecturer.
