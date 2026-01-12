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
