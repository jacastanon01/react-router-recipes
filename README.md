# React-Spoon

## Links
- [Check it out!](https://react-spoon.onrender.com/)
- [Peruse the code](https://github.com/jacastanon01/react-router-recipes)
- [Where are these recipes coming from?](https://spoonacular.com/food-api)

---

## Built with
- React
- React Router v6 
- Spoonacular API
- Styled Components and SCSS for styling
- React-Splide and Framer motion for animations

---

## What I learned
One of the main focuses of this project was to learn more about the React Router v6 [Data Layer API](https://reactrouter.com/en/main/routers/picking-a-router#data-apis). I ran into some unrelated challenges, but overall learned a lot about the different ways React Router allows you to control how your multi-page app operates. For example, I was previously retrieving data in a useEffect by defining an asynchronous function and then immediately calling it. UseEffects are traditionally supposed to be used as a side effect of a component rendering. Components will mount, update and unmount while effects are used to synchronize a component's props or state. The dependency array will update the components with the latest state or props by defining which reactive values to track. When working with external systems like apis, useEffect can synchronize the response as that component's state and re-render the component with that new information. 

Initially, I used a useEffect hook to call various endpoints in the spoonacular api, but while going over the React Router docs, I looked at the new Data API and associated routing elements which simplify data fetching within the context of routing. So instead of fetching data onMount and setting it as a state, I can set move the fetching function into a `loader` element on the route-level. Then in the corresponding component for that route, I can use the `useLoaderData` hook to extract the data. By tying the data-fetching to our route, we are able to begin the request before the component mounts since loaders run before any rendering logic.  A typical route process would navigate to a route and then mount the component and run useEffect to fetch data and store it as state, but with loaders, we handle the data with the route: once a route is activated, it is passed which component to render and a loader function which helps separate the concerns of routing and data fetching. It allows you to define data requirements for routes separately from the routing logic, promoting a cleaner and more maintainable code structure. 

All in all, the React Router v6 Data API provides a higher-level abstraction that simplifies and streamlines data fetching within the context of routing.

 ---


