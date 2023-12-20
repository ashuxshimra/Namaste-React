// { Write the below equivalent nested structure  in react code :
/* <div id="parent">
    <div id="child">
        <h1>
            I'm h1 tag
        </h1>
    </div>
</div> */
// }

// { Write the below equivalent nested structure in react code :
/* <div id="parent">
    <div id="child">
        <h1>
            I'm h1 tag
        </h1>
        <h2>
        I'm h2 tag
        </h2?
    </div>
</div> */
// }

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);
console.log(parent1);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1); //now lets say there is already somethung inside the root div , in that case react will render in root div and that will be replaced

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 tag")
  )
);
console.log(parent); //this will be js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //now browser understands only html hence the js engines present will convert this js object into html which the browser understands and will render accordingly
// const heading = React.createElement(
//   //this is used to create elements and react takes 3 para , type of tag, object here empty and , what to put inside tag
//   "h1",
//   { id: "heading" }, //this id can be used in a css file for styking
//   "Hello world from namaste react" //this 3rd parameter is basically the child of h1 tag
// );
// console.log(heading); //this will basically give and return a object as its a react element that is js object
// const root = ReactDOM.createRoot(document.getElementById("root")); //this root is where the react will render all the data , and this is done by ReactDOM, here we want to render within root div so getting it and now getting
// root.render(heading); //rendering heading within root div
//this entire time we are demonstrating that react can also be written without jsx
//React is known as a library bevause since it can be applied to a small portion of the page say a navor a footer , which doesnt happen in case of frameworkds as frameworkds comes with a lot of stuff
// Hence this is one of the advantages of react and that is , say if we have some existing application and so in that case we can apply react to it wherever we need by simply injecting cdn as we did, but with framweworkds we cannot do it since if we use other framwework then we need to build complete app using it
