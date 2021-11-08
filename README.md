# Technical Frontend Interview

Hi! Hey thanks for doing this. We really appreciate it!

## Instructions
We do a lot on the frontend. We care deeply about user experience, performance, and readability. We've provided you with a skeleton React project with a `CityField` component that is meant to help users fill in the City field in an address form.
1. Get your environment set up
2. Code!
    * We are looking for:
      * A finished product that meets the spec
      * Code readability and simplicity
      * Best practices around React components and frontend styling
      * You to showcase your skill
    * Please don't:
      * Reach for any external UI components. We want to see you build.
    * Feel free to:
      * Create additional React components
      * Use any non-UI npm packages
    * You can take as long as you like to complete this project, but we'd like you to keep track of much time you spend
3. Once finished, push your changes and open a pull request with:
    * How much time you spent
    * Any thoughts or extra context you want to provide about your code
    * Any thoughts or reflections you have about the project requirements

---
#### Install
1. Clone the repo to your local machine (if you received an archive (zip) of the assessment, skip this)
    * Click on the green `Clone or download` button above, and switch to HTTPS if the default is SSH. Copy the url.
    * Clone this repo into a folder on your box: `git clone [url] [folder]`
2. Create a new branch that you'll push all of your code to: `cd [folder] && git checkout -b demo-cityfield && git push origin demo-cityfield`
3. Run the assessment in your browser (you will need `npm` or `yarn` installed and working)
    * Run `yarn` or `npm install`
    * Run `yarn start` or `npm run start`. If you see the error: `Error: Objects are not valid as a React child`, you are on the right path; you've installed the app correctly, and can start implementing the instructions.

---
#### Build out the project to achieve the following

##### Function
1. The **CityField** component
    1. As text is typed into the CityField component's input, a list of suggested city names should render above/below it. We've provided a list of Canadian city names to use in [`canadian_cities.js`](src/canadian_cities.js).
    2. Suggested city names should contain the string entered into the input field (case insensitive).
    3. The list should be keyboard navigable.
    4. The list items should be selectable by mouse click or hitting the enter key.
    5. The list of suggestions should NOT show when the input is less than two characters.
2. The **StatusBar** component
    1. When the CityField input is empty, the status should show `empty`
    2. When the CityField component is suggesting city names, the status should show the text in the input and how many suggestions are being displayed
    3. When the CityField component's input matches a Canadian city name in `canadian_cities.js`, the status should show `valid`
##### Style
1. Center the label and input field horizontally and vertically in the viewport window.
2. In mobile-sized viewports, make the input field the full-width of the viewport.
3. When the input value matches a Canadian city name, change the background color to green smoothly over half a second.
