## Available Scripts

### `npm install`
### `npm start`

### `see the app from` [Here](https://recipesapp-cd316.web.app/ "website") (need few minutes for API to respond)
### Hosted on [Firebse](https://firebase.google.com/ "firebase")
### API Hosted on [Glitch](https://glitch.com/ "Glitch")
### [API repo](https://github.com/Nikolov0080/API_recipes "API repo")


### `Structure`

Front-end: React  
--------------
- libaries used:
 @testing-library/jest-dom  
 @testing-library/user-event  
 @yisheng90/react-loading"  
 axios  
 bootstrap  
 bootswatch  
 enzyme  
 js-cookies  
 jsonwebtoken  
 validator  
 react-circular-progressbar  
 react-bootstrap  
 
 Back-end: Express JS wirh MongoDB & mongoose
 ---------------
 - libaries used:
 bcrypt  
    body-parser  
    cloudinary  
    cookie-parser  
    dotenv  
    express-fileupload  
    express-handlebars  
    jsonwebtoken  
    moment  
    mongoose  
    morgan  
    multer  
    nodemon  
    validator  

### `Functionalities`   

- **Authentication:**  
This functionality includes register,login and logout.
User model  

- **Create recipe**   
Authenticated users ca create reciipes  
Recipe model  

- **Recipe**
Includes home page(PLP) & product details page functionality(PDP)
Recipe model

- **Like recipe**  
Accessible from PDP for authenticated users  
users can unlike recipe (cancel like)  

- **Comment recipe**  
 Accessible from PDP for authenticated users  
users can delete comments 
(if recipe is created by current user or user is the creator of the comment)   

- **Delete recipe**
Accessible from PDP for authenticated users  
Only recipecreators can delete their own recipes

-- for guests:   
--------------

- see recipes and recipes details   

-- for authenticated users  
--------------
 - like recipe   
 - comment recipe  
 - add recipe  
 - delete recipe(his own recipes only)   


 ### **`Models`**

User model       | Recipe model | 
-----------------|--------------|
username         |recipe name   |
email            |ingredients   |
password         |directions    |
skill level      |prep time     |
profile picture  |cook time     |
liked recipes    |category      |
user recipes     |difficulty    |
|-               |description   |
|-               |photo         |
|-               |likes         |
|-               |comments      |


 ### **`Pages`**
 
  for guests:
 --------------
 - Home page
 - Login 
 - Register
 - Recipe details (can't like or comment)
 
  for Authenticated users
  --------------
 - Home page
 - Profile
 - Liked recipes
 - Recipe details (can like or comment or delete if creator)
 
 ### **`Routes`**  
- Home page - "/"  
- Login page - "/login"
- Register page - "/register"
- Profile page - "/profile"
- Recipe details - "/recipe-details/recipe_id=(current recipe ID)"  
- Search results - "/search-results/query=?(QUERY)"  
- Liked recipes - "/liked-recipes/(recipe ID)"  
