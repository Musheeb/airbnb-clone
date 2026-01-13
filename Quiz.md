Quiz 1 - 3:19:10 (FreeCodeCamp.org)

1 - What do props help us accompolish?
Ans - With the help of props we can achieve the dynamic approach with our data. We do not need to hard code things in the components. Make a component more reusable.

2 - How do you pass a prop into a component?
Ans -
function App(){
<>
<Component
name="Musheeb Affan",
email="musheebaffan127@gmail.com",
contact="+91-9988776655"
/>
</>
}

3 - Can I pass a custom prop (e.g. 'blalalalalaa={true}') to a native DOM element? (e.g <div balalhalala={true}>) why or why not?
Ans - No. because the JSX we use to describe native DOM elements will be turned into READL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification. (which doesn't include properties lik 'blalalalalaa')

4 - How do I receive props in a component?
function Navbar(){
return (

<header>
</header>
)
}
Ans - We get the props in the function parameter that we pass in to components as arguments.

5 - What data type is 'props' when the component receives it?
Ans - Javascript Object

Quiz 2 - 3:48:15

1 - Given an array of number, return an array of each number, squared
given array - const nums = [1,2,3,4,5];
Ans -
const squared = nums.map((num)=>{
return num \* num;
});
console.log(squared);
// output - [1,4,9,16,25]

2 - Given an array of strings, return an array where the first letter of eah string is capitalized.
const names = ["alice", "bob", "charlie", "danielle"];
Ans -
const capitalized = names.map((name)=>{
return name.charAt(0).uppercase + name.slice(1);
});
console.log(capitalized);
// Output - ["Alice","Bob", "Charlie", "Danielle"];

3 - Given an array of strings, return an array of strings that wraps every element of the original strings in an HTML-like <p></p> tag.
const pokemons = ["Bulbasur", "Charamander", "Squirtel"];
Ans -
const arrayWithTag = pokemons.map((pkmn)=>{
return `<p>${pkmn}</p>`
});
