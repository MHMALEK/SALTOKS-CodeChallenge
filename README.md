# Salto KS Test

Hi! this the Code challenge that you gave me! hope it has good points for you.

# Main Stack

the  main Stack and libraries that I have used for this project, are listed below:

Libraries and frameworks: 

 - React
 - Redux
 - Redux Saga
 - [Tailwind](https://tailwindcss.com/) 
 - SASS (there isn't so much Sass and  CSS because no need to. I used Tailwind as Main CSS framework, but I have some CSS and SASS with CSS Modules too.
 - JEST and Enzyme for Unit Tests
 - CYPRESS for END2END Test. as writing of this document, I didn't write special test with it, just config it for a better time.
 - React Router as main Router
 - eslint and prettier for lint and format files
 - some wepack config.

## Project Strucutre

the main purpose of this project is about moving the main logic from UI to  Redux Saga. 

### Components structure:

there is a component folder at "src" folder that includes this files and folders:

 - Base:  components like input, table, container, card and ... they are stateless and never connect ro redux or any thing else. they just get props and show the result! only that.
 - root: this is the main component that provide a place to gather many more  root components like "Redux provider" and ... dispatching the required actions for the app start is also happens in there. 
 - pages: this components have dumb component and smart component or container component. the dumb component just handle UI and the container pass actions and redux state to dumb component from outside world.
 - layout components: main layout related like header, footer and HOC and also error boundaries to handle application Javascript related errors.

### Redux Structure
every part of the app has it own modules. for this project I have sepertaed them to Repository Store, App Store and UI Store. the main and important one is Repository Store.
the redux strucure:

Component => actions -> saga -> handle HttpRequest, errors and everything -> Reducers (if needed) -> Components Update

some times if data needed some changes or better structure for my component needs, I have used a Mapping utility that convert or map data to required style.

in here,  Saga  is responsible to get data from API, send http requests and handle erros in saga. the main reason I use saga for this action is that when I seperate logic in outside of components(like Redux saga or similar) I do not need to be worry about changnin UI afterwards. because all of the logic is in one place and seperated from components.

### Options folder:
to better organizing, there is an option or config file that store general things about project.

### Styles:

as this is a test and I don't exactly know what you want for styles, I just used a css utility framework. Tailwind is great for start a project in less time. beside that I have some CSS and Sass file. most of the styles are css files because they were small and didn't need to write with sass. for just sample I used CSS MODULES beside general css loader to show you about webpack config. but there is just one component that use css modules for styles.

## Service worker and PWA 
I have used google workbox for installing and hadle cache. in saga it call installer and then it goes to work with actions that defined on "services/service-worker" file. there is alsow Inject manifest webpack plugin for hash bundle files and auto update of manifest. there is no manifest file yet because I don't think it's going to need anyone!

## TEST - Unit and END2END

I'm not a good tester, but I tride to do my best. hope it's allright.


## Some other Notes

 I really didn't get what you want about times. I just changed the times and show the diffrence between current time and the api time.
I have developed my own Lazy Load component with  Intersection Observer API. I know this in not cross platform (not supporting Older  browsers or IE ) but I didn't have enough time to write a completed lazy load component. so sorry about that. 

# Thanks, Thanks for great Interview and the great oppurtunity!