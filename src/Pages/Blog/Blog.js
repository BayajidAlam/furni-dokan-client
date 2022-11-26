import React from "react";

const Blog = () => {
  return (
    <div className="lg:max-w-[1440px] w-[96%] mx-auto">
      <div className="my-4">
        <h1 className="text-lg font-bold">
          Q. What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="my-1">
          <strong>Ans.</strong> In React apps, there are at least seven ways to
          handle the state. Let us briefly explore a few of them in this part.
        </p>
        <strong>
          <p>URL</p>
        </strong>
        <ul className="lg:ml-5">
          <li>The id of the current item, being viewed</li>
          <li>Filter parameters</li>
          <li>Pagination offset and limit</li>
          <li>Sorting data</li>
        </ul>

        <h1 className="my-1">
          <strong>Web Storage</strong>
        </h1>

        <p>
          The second option is to store the state in the browser via web
          storage. This is useful when we want to persist state between reloads
          and reboots. Examples include cookies, local storage, and IndexedDB.
          These are native browser technologies. Data persisted in the browser
          is tied to a single browser. So, if the user loads the site in a
          different browser, the data will not be available. We avoid storing
          sensitive data in the browser since the user may access the app on a
          shared machine. Some examples of where web storage might be most
          useful include storing a user’s shopping cart, saving partially
          completed form data or storing JWT token in HttpOnly Cookie. Here is
          an example of saving user preferences locally in the browser or even
          persist the complete state for one or more of our components.
        </p>

        <h1>
          <strong>Local State</strong>
        </h1>

        <p>
          The third option is to use store state locally. It is useful when one
          component needs the state. Examples include a toggle button, a form,
          etc.
        </p>

        <h1>
          <strong>Lifted State</strong>
        </h1>

        <p>
          The Fourth option is to define the state in the parent component.
          Often, the same state is used across multiple components. In those
          cases, it is useful to lift the state to a common parent. The lifting
          state is a two‑step process. First, we declare the state in a common
          parent component, and then we pass the state down to child components
          via props. This pattern should be considered any time a few related
          components need to use the same state. The lifting state avoids
          duplicating states in multiple components. It helps to assure that our
          components all consistently reflect the same state. In the below
          example, we have lifted the state and the handleChange event in the
          parent component, helping to maintain consistency. function PlayerInfo
          (){" "}
        </p>

        <h1>
          <strong>Derived State</strong>
        </h1>

        <p>
          The fifth option is to compute the new state based on the available
          state and we do not need to declare a state at all. If there are
          existing values that can be composed to give us the information we
          need, then we can calculate that information on each render instead of
          storing it. Some examples include calling .length on an array to
          determine the number of records instead of storing a separate numItems
          variable in the state or deriving an errorsExist boolean by checking
          if the errors array is empty. So, why bother deriving the state? Well,
          deriving the state avoids our state values getting out of sync. It
          simplifies our code since we do not have to remember to keep separate
          values in sync. When we update the state, derived values are
          automatically recalculated in the render. For example, we can
          calculate the items added to the cart and show it on the cart icon
          like this, this.state.cart.items.length and pass it as a prop to Badge
          Component. We do not need to store the itemsCount key in a cart state.
          Each time the cart state gets changed, the count on the Badge will be
          calculated automatically.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-lg font-bold">
          Q. How does prototypical inheritance work?
        </h1>
        <p>
          In this article, we will try to understand the facts that are required
          to effectively understand what exactly Prototype Inheritance in
          JavaScript means or what does it actually implies with the help of
          several examples of approaches. Let’s understand the basics behind
          Prototype Inheritance in JavaScript.
        </p>
        <p>
          Prototype Inheritance in JavaScript: Following bullet points will try
          to analyze the basics behind Prototype Inheritance in JavaScript-
        </p>
        <p>
          Under the classical inheritance phenomenon, we create a new class that
          actually extends or reuses the properties or functions, or methods of
          another class that are used by several programming languages (like C,
          C++, Java, etc.) JavaScript doesn’t use classical inheritance instead
          it uses the phenomenon called Prototype Inheritance. In Prototype
          Inheritance, an object uses the properties or methods of another
          object via the prototype linkage. All the JavaScript objects inherit
          properties and methods from a prototype (like Date objects inherit
          properties from Date.prototype and so on).
        </p>
        <p>
          We will set the rabbit’s prototype object as an animal prototype
          object wherein we will store all the values of rabbit for a purpose
          that if in the case in while rabbit properties are missing then
          JavaScript will automatically take it from animal prototype object.
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-lg font-bold">
          What is a unit test? Why should we write unit tests?
        </h1>
        <p>
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended. Unit testing is an important step in the development
          process, because if done correctly, it can help detect early flaws in
          code which may be more difficult to find in later testing stages. Unit
          testing is a component of test-driven development (TDD), a pragmatic
          methodology that takes a meticulous approach to building a product by
          means of continual testing and revision. This testing method is also
          the first level of software testing, which is performed before other
          testing methods such as integration testing. Unit tests are typically
          isolated to ensure a unit does not rely on any external code or
          functions. Testing can be done manually but is often automated.
        </p>
        <p>
          The earlier a problem is identified, the fewer compound errors occur.
          Costs of fixing a problem early can quickly outweigh the cost of
          fixing it later. Debugging processes are made easier. Developers can
          quickly make changes to the code base. Developers can also re-use
          code, migrating it to new projects.For this we should wright unit test
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-lg font-bold">React vs. Angular vs. Vue?</h1>
        <p><strong>React</strong></p>
        <p>
          
            React doesn’t enforce a specific project structure, and as you can
            see from the official “Hello World” example below, you can start
            using React with just a few lines of code. ReactDOM.render(
            <h1>Hello, world!</h1>, document.getElementById('root') ); React can
            be used as a UI library to render elements, without enforcing a
            specific project structure, and that’s why it’s not strictly a
            framework. React Elements are the smallest building blocks of React
            apps. They are more powerful than DOM elements because the React DOM
            makes sure to update them efficiently whenever something changes.
            Components are larger building blocks that define independent and
            reusable pieces to be used throughout the application. They accept
            inputs called props and produce elements that are then displayed to
            the user. React is based on JavaScript, but it’s mostly combined
            with JSX (JavaScript XML), a syntax extension that allows you to
            create elements that contain HTML and JavaScript at the same time.
            Anything you create with JSX could also be created with the React
            JavaScript API, but most developers prefer JSX because it’s more
            intuitive. Vue
         
        </p>
        <p>
          <strong>Angular</strong>
        </p>
        <p>
          In this article, I’m discussing Angular 2, and not the first version
          of the framework which is now known as AngularJS. AngularJS, the
          original framework, is an MVC (Model-View-Controller) framework. But
          in Angular 2, there’s no strict association with MV*-patterns as it is
          also component-based. Projects in Angular are structured into Modules,
          Components, and Services. Each Angular application has at least one
          root component and one root module. Each component in Angular contains
          a Template, a Class that defines the application logic, and MetaData
          (Decorators). The metadata for a component tells Angular where to find
          the building blocks that it needs to create and present its view.
          Angular templates are written in HTML but can also include Angular
          template syntax with special directives to output reactive data and
          render multiple elements, among other things. Services in Angular are
          used by Components to delegate business-logic tasks such as fetching
          data or validating input. They are a distinct part of Angular
          applications. While Angular doesn’t enforce their use, it’s highly
          suggested to structure apps as a set of distinct services that can be
          reused. Angular is built in TypeScript, so its use is recommended to
          get the most seamless experience, but plain JavaScript is also
          supported.
        </p>

        <p>
          <strong>Vue</strong>
        </p>

        <p>
          The Vue.js core library focuses on the View layer only. It’s called a
          progressive framework because you can extend its functionality with
          official and third-party packages, such as Vue Router or Vuex, to turn
          it into an actual framework. Although Vue is not strictly associated
          with the MVVM (Model-View-ViewModel) pattern, its design was partly
          inspired by it. With Vue, you’ll be working mostly on the ViewModel
          layer, to make sure that the application data is processed in a way
          that allows the framework to render an up-to-date View. Vue’s
          templating syntax lets you create View components, and it combines
          familiar HTML with special directives and features. This templating
          syntax is preferred, even though raw JavaScript and JSX are also
          supported. Components in Vue are small, self-contained, and can be
          reused throughout the application. Single File Components (SFCs) with
          the .vue extension contain HTML, CSS, and JavaScript so that all
          relevant code resides in one file. SFCs are the recommended way to
          organize code in Vue.js projects, especially larger ones. Tools such
          as Webpack or Browserify are required to transpile SFCs into working
          JavaScript code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
