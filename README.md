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
1) All the code is developed /src/dev
2) /main is only for web section
3) Only the type of forms should be at the root of /form and should be accessed by /main components
4) /form/library are the form parts and should be used only by form types at the root of /main

Key features:
- Easy to use login form
- Email validation check
- Required field check for both inputs
- Two different login views. One on nav and one on the body
- Submit button disables accordingly to the specs

Future things:
- Add checkbox input for library parts
- Add disable/enable toggling feature for inputs (input dependancies)