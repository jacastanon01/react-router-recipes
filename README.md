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

## Challenges I faced
While trying to set up the input form, I wanted the search icon to be placed at the start of the input box. My intial idea was to set the icon to absolute and the input to relative to achieve the display of the svg on top of the form and then position by the left and top attributes. I could achieve this but it was not a reponsive design by any means. I tried using css functions within media-queries to manually calculate the the positions, but while re-sizing the window the icon would move out of place before re-positioning itself. This was because whenever the window was being re-sized, calculations for the position were being run, which led to a glitchy user experience and ultimately messy code that needed more media-queries to calculate the precise position within the input form. 

Solution was to nest the svg into it's own element. Setting the form containers width with vw instead of % allows the css to calculate based on each browser window's available visible space. Then I set display to grid instead of flexbox on the form and set both child elements on top of each other by defining `grid-column` as the same value. Since both elements were in the same column, their width would consistently match and I could use the media-queries to define precise spacing. I have always used flexbox as my default responsive layout, but CSS Grid simplified this whole problem since flexbox was causing browser compatability issues as well.  


