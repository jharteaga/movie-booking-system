# VanCinema - Movie Booking System

## Description

This web application is a movie ticket booking system, where the user can select a movie, check the different movie dates and times, select the seats, purchase the order, and get a confirmation message.

Overall, VanCinema provides a full experience from end-to-end to buy online tickets for the movie theather, which in this case, it is called **VanCinema**.

## Features

- **Select seats according to the date and time**
  - When the combination of the movie, date, and time is not found in the database, the movie lounge is created dinamically from the first booking. After the first booking, the seats are getting from the database, and updated per booking.
  - User can check the seats that are available, booked, and selected by him.
- **User is able to check his purchases' history**
  - In the nav menu option "My Purchases", the user can check all his purchases from the latest to the oldest one.
- **User can like or dislike any movie from the list**
  - From the home page, the user can like or dislike any movie, in order to store it in his account.
  - In the nav menu option "My Favorites", the user can check all the movies he liked from the home page. Besides, the user can dislike from this screen, and the movie will be removed automatically form the list.
- All the information about the user and the movie selected, it is being handle with **React Context API and their reducers**, in order to prevent props drilling, and manage important states just in one place.

## Tech Stack

- React.js
- React Hooks
- React Context API
- Styled-Components
- Node.js
- Express.js
- NoSQL Document Database: MongoDB
- Webpack

## Installation

Make sure you have Node.js installed, and be sure to have at least Node v14.8+

Clone the project, and open it with Visual Studio Code:

```bash
git clone https://github.com/jharteaga/movie-booking-system.git

cd movie-booking-system

code .
```

Now let's install all the npm dependencies:

```bash
npm install
```

Then, let's configure an environment variable to connect to a MongoDB instance, either local or cloud-based. So, let's create an _.env_ file in the root folder of the project, and let's add the following variable:

_Note: You can find MongoDB connection string in MongoDB Atlas, in case you are using a cloud-based database._

```env
DB_CONNECTION=mongodb+srv://<username>:<password>@<host>/<database-name>?retryWrites=true&w=majority
```

Before starting the web application, we need to initialize the database with some data, such as list of movies and a user. The initial data is in JSON file inside the project, and it can be found in db > data directory:

```bash
cd ./db/data
```

Let's connect to MongoDB Compass, connect to our database, and then create a collection with the name: **movies**. Then, click in the button _"ADD DATA"_, and import the json file named _"movieData.json"_

<img src="./assets/mongodb-add-data.png" alt="Add data in mongodb" width="500" style="display: block; margin-bottom: 0.5rem"/>
<img src="./assets/mongodb-import-json-file.png" alt="Import json file in mongodb" width="500" />

Now, let's create the last collection called _"users"_, and we are going to do the same process importing a JSON file, but in this case with the file named _"userData.json"_.

Finally, let's start the application. In order to start it we need to make sure that the _"webpack.config.js"_ file is in mode development mode, and not int production:

```javascript
module.exports = {
  mode: 'development',
  // mode: 'production',
  ...
}
```

Then, open 2 separate terminals. One will run the server, and the other one will run webpack in order to transpile our React into Vanilla JavasScript:

```bash
# Terminal 1
npm run dev
```

```bash
# Terminal 2
npm run watch
```

VanCinema web platfom should be up and running!! :rocket:

## How to use VanCinema?

### Buy movie tickets

1. In the home page, select the movie that you want to watch in the movie theather by clicking the button "Buy tickets".
2. User can check the movie details and then click in the button "Select seats"
3. Now, the user can select the date and time of the movie, and then choose the seats of preference inside the movie theather.
4. Then, the user has to introduce the payment information into the form, and click in "Purchase" when finish.
5. Finally, get purchase confirmation

<a href="https://www.loom.com/share/083b6ad247e14400ac0e008abbc5e7af">Demo</a>

### Check purchase history

1. In the user menu that is display when click the user first name, select the menu item "My Purchases"
2. Now, the user can check all the purchases that he has made in the application.

<a href="https://www.loom.com/share/9c9b2b01d55843d1844bd25ad95fa393">Demo</a>

### Check my favorite movies

1. In the user menu that is display when click the user first name, select the menu item "My favorites"
2. User can see all the movies he has given like from the home page.
3. In order to add liked movies into the list, let's go to the home page, and click in the heart icon to add it, or to remove it in case it is already added.

<a href="https://www.loom.com/share/bf5e75121d964232859580bd5ff22d02">Demo</a>
