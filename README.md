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
One of the main focuses of this project was to learn more about the React Router v6 [Data API](https://reactrouter.com/en/main/routers/picking-a-router#data-apis). I ran into some unrelated challenges, but overall learned a lot about the different ways React Router allows you to control how your multi-page app operates. For example, I was previously retrieving data in a useEffect by defining an asynchronous function and then immediately calling it. UseEffects are traditionally supposed to be used as a side effect of a component rendering. Components will mount, update and unmount while effects are used to synchronize a component's props or state. The dependency array will update the components with the latest state or props by defining which reactive values to track. When working with external systems like apis, useEffect can synchronize the response as that component's state and re-render the component with that new information. 

Initially, I used a useEffect hook to call various endpoints in the spoonacular api, but while going over the React Router docs, I looked at the new Data API and associated routing elements which simplify data fetching within the context of routing. So instead of fetching data onMount and setting it as a state, I can set the fetching method as a `loader` element on the route-level. Then in the corresponding component for that route, I can use the `useLoaderData` hook to extract the data as well as error and loading state. This also allowed me to lazy-load the page by mounting the component while data was still being retrieved. By tying the data-fetching to our route, we are able to begin the request before the component mounts since loaders run before any rendering logic.  A typical route process would navigate to a route and then mount the component and run useEffect to fetch data and store it as state, but with loaders, we handle the data with the route: once an endpoint is called, it is passed which component to render and a loader function which helps separate the concerns of routing and data fetching. It allows you to define data requirements for routes separately from the routing logic, promoting a cleaner and more maintainable code structure. 

All in all, the React Router v6 Data API provides a higher-level abstraction that simplifies and streamlines data fetching within the context of routing.

 ---

## Challenges I faced
While trying to set up the input form, I wanted the search icon to be placed at the start of the input box. My intial idea was to set the icon to absolute and the input to relative to achieve the display of the svg on top of the form and then position by the left and top attributes. I could achieve this but it was not a reponsive design by any means. I tried using css functions to manually calculate the the positions.

Solution was to set width as viewport of form container. Then set the width of the input element and define the width of the button containing the svg to 100% so it encompasses the width of the parent element (input). Setting the form containers width with vw instead of % allows the css to calculate based on each browser window's available visible space. I learned the importance of setting height and widths when it comes to precise placement on the page instead of leaving those to be handled by the browser.  

The transition of routes were very sudden with no transition between page renders. This is beacuse there was no fallback for slow data. React Router v6 offers a way to defer calls to the router and start loading the new route element page. `defer` allows you to chose when to execute the fetching of data by passing it (defer) a promise and then using the Await component to finish the request, resolve the promise and access the fetched data. The `<Await />` component utilizes render props. So rather than waiting for the component before we can trigger the fetch request, we start the request for the slow data as soon as the user starts the transition to the new route.


