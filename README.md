# Contact form using React JS and Cloud Firestore

I used  visual code, and Terminal to complete this task. I assume that you have all the requirements to build a react app. Otherwise check this link: https://www.youtube.com/watch?v=9hb_0TZ_MVI

# Start

1 On OS Mac open terminal and create project called ' contactform '
> change directory: cd contactform

2. In the project directory Create a react app named  ' react-form '  run:
  npx create-react-app react-form

3. Build the app for production  run:

npm run build

4. In your SRC  folder create a new folder called component 
5. In the folder component create a JS file called User.js
see:  https://github.com/jaimehernan95/react-js-contact-form-cloud-firestore/tree/master/src/component
6. copy and paste the code from the repository
7. In the folder component create a JS file called Firestore.js

**style and image**

8. in the SRC folder create a new folder called ' assets '. 
9. In the assets folder copy  and paste the folders css and img from this repository: https://github.com/jaimehernan95/react-js-contact-form-cloud-firestore/tree/master/src/assets

10. open the index.js and the following:

import './assets/css/bootstrap.min.css'
import './assets/css/agency.min.css'

11. open App.js  and add the following after </head>
see example: https://github.com/jaimehernan95/react-js-contact-form-cloud-firestore/blob/master/src/App.js

 <User></User>

**Firebase**

1. Firestore.js file will contain the firebase configuration
 see:  https://github.com/jaimehernan95/react-js-contact-form-cloud-firestore/blob/master/src/component/Firestore.js
2. Create a new firebase project from https://firebase.google.com/
3. In the firebase console click on your project overview
4. click on + Add App
5. select web  </> 
6. new window open: Enter the name of your APP
7. Click on Register APP
8. A new window will display the firebase configuration
9. Copy and paste the firebase configuration into your file Firestore.js  ( see the repository example above)
10. In the Firebase Console click on Database
11. create a new collection (table) called  users
12. inside the collection users add 3 fields:  name, email and  message
13. the 3 fields must be string and the value leave it empty

field: name   	fiel: email			fiel: message
type: string	type: string		type: string
value: 			value: 				value: 

14. save changes





**Firebase installation and Depployment**

1. go back to terminal and navigate to your project directory  install the firebase tools globally, run:

npm install firebase-tools -g

2. login to firebase console run:

firebase login

3. after logged in run:

firebase init

4. select Firebase hosting  with the tab  and hit enter
5. select the project an existing project option
6. select your project
7. use a public directory? 
add the name of the projct: build  and the hit enter. ' you will notice on visual code that a new project has been created'
8. public directory? build
9. select 'YEs' : configure as a single-page app  index. html? YES 
10. select 'NO ': file build index. htmnl overwrite? NO

11. run npm build
12. firebase deploy
13. open the web link and enter information in the contact form
14. navigate to your firebase database
15. the information entered in the contact form must be there.

**Update Information on Firebase**
1. if you add or modify the files run the following command to see the new changes:
2. npm run build
3. firebase deploy


- Notes:  I followed the tutorial from the link below React + Cloud Firestore: Step by step tutorial. It didn't work for me because there are some mistakes. I modified and improved a little bit.
https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364




# form
<img width="964" alt="Explanation" src="https://github.com/jaimehernan95/react-js-contact-form-cloud-firestore/blob/master/images-github/form.png">

#cloud store
<img width="964" alt="Explanation" src="https://github.com/jaimehernan95/react-js-contact-form-cloud-firestore/blob/master/images-github/cloud.png">

#React 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# react-js-contact-form-cloud-firestore
