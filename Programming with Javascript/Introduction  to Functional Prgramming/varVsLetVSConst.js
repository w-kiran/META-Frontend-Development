//var keyword

//1. A variable declared with the var keyword can be accessed before initialization 
    // as long as the variable is eventually initialized.
    // anywhere in our code.

//console.log(user);

//2. We can declare and redeclare the same var variable without errors
    // var user="Mary";
    // var user="joanna";
    // var user="Mark";

    //console.log(user);

//var user;


// let keyword

// 1. We cannot access a let variable before declaring it.
    // console.log(user); //Error!
    // let user;

//2. We can declare an unassigned variable with let
    // let user;
    // console.log(user);

//3. We cant redeclare a let variable
    // let user="anna";

//4. But we can re-assign it.
    // user="anna";
    // console.log("user");



// const keyword

// 1. The const variable must be initialized
    // console.log(user); //Error!
    // const user;

//2. We cant access the const variable before initialization
    // console.log(user); //Unexpcted token error
    // const user="Andrew";


//3. We cant redeclare a let variable
    // let user="anna";

//4. But we can re-assign it.
    // user="anna";
    // console.log("user");


/*
        Var     Let     Const
 Lenient<------------------->Strict
 
*/