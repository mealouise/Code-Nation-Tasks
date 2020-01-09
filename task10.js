// Here's an example of a function that includes a parameter.
// Parameters are responsible for functions being able to work on
// different data inputs. Edit the snippet below to include two
// parameters and a running order count updated when the
// function is called


let orderCount = 0;

const takeOrder = (topping, size) => {
    console.log(`Pizza with ${topping} and size ${size}`);
    orderCount++;
    console.log(orderCount)
}
takeOrder("pineapple", "smalll");