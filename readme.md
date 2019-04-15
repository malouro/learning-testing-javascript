# What is this?

This is a collection of code & notes while going through Kent C. Dodds's Pro Testing course at: [https://testingjavascript.com/](https://testingjavascript.com/)

Some things are a little different -- mostly updating to more recent versions of certain packages (like Jest, Babel, etc.) -- but otherwise the tutorials and examples are followed pretty closely.

I might also add more test files as I start messing around and experimenting.

Cheers, fellow testers 🍻!

# Current progress:

> https://testingjavascript.com/lessons/eslint-disable-unnecessary-eslint-stylistic-rules-with-eslint-config-prettier


# Notes

## The Testing Trophy

A model denoting different categories of test and their priority, weight and distribution.

Here's what it looks like:

```ascii
    |''''''''''|    End-to-end
 |''------------''|
  |              |  Integration
   \            /
    ''\''''''/''
       |    |       Unit
       }----{
      /      \      Static
   [::........::]
```

The idea is that the value of return compared to cost from static analysis and integration testing is great, while from end-to-end and unit testing is good.

This will, of course, vary depending on your application or project -- so take this with a grain of salt.

## Test Category Breakdown

Let's consider a **wheel** on a **car**. 

A wheel is a unit of a larger more complex system -- the car.

Here's what the categories below mean in this example system:

### Static

The written rules of some standards to wheel making and best practices for getting the wheel working well.

This part cares not for what type of car is in question, but cares more about general practices to get a working & efficient wheel.

### Unit

This is the wheel itself.

Tests for wheel specific things:

* Is it round?
* Does it roll?
* Do the treads provide traction?
* etc.

### Integration

This is the connection between the wheel and its connecting parts. It's how well the parts in the system work together.

For example:

* Does the wheel fit on to the axel correctly?
* Does the wheel stay on correctly during use?

### End-to-end

This is how the car functions as a whole in an environment equivalent to what an end-user will perceive.

* Testing the car by test-driving or racing on a track
* Performance and penetration testing
  * How well does the car drive?
  * Are the windows able to withstand a break-in?
* What is the **user** actually going to be experiencing?
* The main goal of e2e testing -- validate an actual user experience with the system in question.
