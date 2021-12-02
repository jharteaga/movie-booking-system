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

VanCinema web platfom should be up and running :rocket:
