// console.log(a+b);
// console.log("This line is never reached");

// throw new ReferenceError();


try
{
    console.log(a+b);
}
catch(err)
{
    console.log(err)
    console.log("There was a reference error. ")
}
console.log("My program does not stop")