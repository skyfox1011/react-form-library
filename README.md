To view my work:
1) Install Visual Studio Code
2) Download this repository from Git and store into your dir
3) Go to cmd and browse to your dir where you stored the repo: c:\<your path>\my-react-proj-master\my-react-proj-master
4) then type "code ." this will open the entire proj to Visual Studio Code
5) In Visual Studio Code open terminal window View -> Integrated terminal
6) type "npm install". (Note you need to install nodejs before doing this step)
7) type "npm start". This will open the project up on IE
8) If you would like to view it on specific browser, open up that browser and go to http://localhost:3000/
9) Recommended to install extension 'Debugger for Chrome' onto VSC so you can view the website by running the code, press F5 key.
10) This is mainly about the code of the project moreso than the product. Just showing example how a web form can be coded into a library in react

To start viewing the code structure:
1) Look at index.js at the root
2) index.js renders Home component in /dev/main/home.js
3) home.js renders two components: Menu in /dev/main/menu.js and Login in /dev/main/login.js
4) menu.js can be ignored since it's not part of the scope
5) login.js is the important one to look at to view the modularity of the form library.
6) login.js uses the from library from /dev/form/form.js -> text.js -> input.js