**React tutorial**

**First step:**

Googled all the concepts of React

<https://en.wikipedia.org/wiki/React_(web_framework)>

<https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/>

Redux (Similar to NgRx)

JSX (Similar to templates) Can have nested elements Expressions can be used in
{}.

Example {10+1}. Can be conditional.

Props

React router for routing the pages

Virtual Dom (Angular uses incremental dom)

Components can be defined in 3 ways

Components (ReactDOM.render(, document.getElementById('myReactApp'));)

Functional Components (const Greeting = (props) =\>Hello, {props.name}!;)

Class-based components (Similar to angular compoennts)

class ParentComponent extends React.Component

{ state = { color: 'green' }; render() { return ( ); } }

LifeCycle methods

>   shouldComponentUpdate allows the developer to prevent unnecessary
>   re-rendering of a component by returning false if a render is not required.

>   componentDidMount. (Similar to ngAfterViewInit?)

>   componentWillUnmount (Similar to ngOnDestroy?)

>   render (Similar to ngOnInit?)

Hooks These are the functions with the name starting with use
<https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/>

<https://reactjs.org/docs/hooks-intro.html>

They are used to put and get state without having to create class component.

const [count, setCount] = useState(0);

I can use setCount to set the state and count to get the state.

const [message, setMessage] = useState("");

Similarly, message and set message.

useEffect is another hook which lets us specify the effect of a function call.
We can write very small code with this instead of many lines of codes using
classes.

We can use custom hooks as well.

**Creating Project**

With these concepts in mind, I will start with trying to create new project.

Creating react app (<https://github.com/facebook/create-react-app>)

npx create-react-app react-demo

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Looked into package.json

It has very few dependencies.
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"

When I looked into the react-scripts github repo. I have found out that it has all the required depencnies in it's package.json like webpack, babel and other things.

The above command also loaded the dependencies to node_modules.

ran the application using npm start. 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
hurray it started (http://localhost:3000/).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Next steps Exporing the common libraries.

http library: axios, superagent and fetch are the common libraries.

using axios since it has highest number of uages.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
State management using Redux

https://brainhub.eu/blog/react-libraries/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Has some other libraries that can be used for the project.

create-react-app does not contain the redux and axios. I will be manually installing them.

npm install redux
npm install axios

Installed react developer tools in Chrome.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Getting hands dirty**

Things I need A backend server saving the data A screen displaying the data A
form to submit the data to server Frontend screen and routing to different
screens.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Opened the code in Intellij

There is a folder called public which has images (This is similar to src folder in angular).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Let’s go through the File Structure (https://reactjs.org/docs/faq-structure.html followed the first approach). Each feature will have it’s own folder which includes the js, css and other files.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
I will create a link in the application.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Things to consider are, lazy loading and modularization.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Angular has modularization concepts using @NgModule. We can implement same concept here as well.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Lazy loading is another important concept which helps in making the runtime footprint smaller (https://reactjs.org/docs/code-splitting.html)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
For the application, I will consider implementing 2 modules.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In the same time I will also add bootstrap to the application. I could have used plain bootstrap directly but using https://react-bootstrap.github.io/ to use components directly. As I like scss changed the css to scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
For the modules I will consider react barrel (https://hackernoon.com/react-project-architecture-using-barrels-d086146eb0f6)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
