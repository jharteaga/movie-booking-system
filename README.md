# 🎥 VanCinema - Movie Booking System

![VanCinema Banner](assets/vancinema-banner.png)

- [🎥 VanCinema - Movie Booking System](#-vancinema---movie-booking-system)
  - [Description](#description)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [How to use VanCinema?](#how-to-use-vancinema)
    - [Buy movie tickets (<a href="https://www.loom.com/share/083b6ad247e14400ac0e008abbc5e7af">Demo</a>)](#buy-movie-tickets-demo)
    - [Check my purchase history (<a href="https://www.loom.com/share/9c9b2b01d55843d1844bd25ad95fa393">Demo</a>)](#check-my-purchase-history-demo)
    - [Check my favorite movies (<a href="https://www.loom.com/share/bf5e75121d964232859580bd5ff22d02">Demo</a>)](#check-my-favorite-movies-demo)
  - [API documentation](#api-documentation)
    - [Movies API Endpoints](#movies-api-endpoints)
    - [Users API Endpoints](#users-api-endpoints)
  - [Examples API Endpoints Request/Response](#examples-api-endpoints-requestresponse)
    - [GET /movies](#get-movies)
    - [GET /movies/6190689fba679222a49e5912](#get-movies6190689fba679222a49e5912)
    - [GET /movies/6190689fba679222a49e5912/seats?showDate=2021-12-05&showTime=9:00%20PM](#get-movies6190689fba679222a49e5912seatsshowdate2021-12-05showtime90020pm)
    - [POST /movies/6190689fba679222a49e5912/seats](#post-movies6190689fba679222a49e5912seats)
    - [PUT /movies/6190689fba679222a49e5912/seats/61a86d4f104e75df31cf67fa](#put-movies6190689fba679222a49e5912seats61a86d4f104e75df31cf67fa)
    - [POST /movies/6190689fba679222a49e5912/purchases](#post-movies6190689fba679222a49e5912purchases)
    - [GET /users](#get-users)
    - [GET /users/6190699eba679222a49e5916](#get-users6190699eba679222a49e5916)
    - [PUT /users/6190699eba679222a49e5916/like](#put-users6190699eba679222a49e5916like)
    - [GET /users/6190699eba679222a49e5916/purchases](#get-users6190699eba679222a49e5916purchases)

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
- Joi (Server side data validation and sanitization)
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

Finally, let's start the application. In order to start it we need to make sure that in the _"webpack.config.js"_ file the mode property is development, and not in production:

```javascript
module.exports = {
  mode: 'development',
  // mode: 'production',
  ...
}
```

Then, open 2 separate terminals. One will run the server, and the other one will run Webpack in order to transpile our React code into Vanilla JavasScript, and bundle it in just one file:

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

### Buy movie tickets (<a href="https://www.loom.com/share/083b6ad247e14400ac0e008abbc5e7af">Demo</a>)

1. In the home page, select the movie that you want to watch in the movie theather by clicking the button "Buy tickets".
2. User can check the movie details and then click in the button "Select seats"
3. Now, the user can select the date and time of the movie, and then choose the seats of preference inside the movie theather.
4. Then, the user has to introduce the payment information into the form, and click in "Purchase" when finish.
5. Finally, get purchase confirmation

### Check my purchase history (<a href="https://www.loom.com/share/9c9b2b01d55843d1844bd25ad95fa393">Demo</a>)

1. In the user menu that is display when click the user first name, select the menu item "My Purchases"
2. Now, the user can check all the purchases that he has made in the application.

### Check my favorite movies (<a href="https://www.loom.com/share/bf5e75121d964232859580bd5ff22d02">Demo</a>)

1. In the user menu that is display when click the user first name, select the menu item "My favorites"
2. User can see all the movies he has given like from the home page.
3. In order to add liked movies into the list, let's go to the home page, and click in the heart icon to add it, or to remove it in case it is already added.

## API documentation

The API has its version, and so far the version that is live is v1. Therefore, the base path of the API is _/api/v1_

In the server side there are 2 main endpoints:

- /movies
- /users

### Movies API Endpoints

| Route                          | HTTP method | Description                                                                     | Response Format | Query String                            |
| :----------------------------- | :---------- | :------------------------------------------------------------------------------ | :-------------- | :-------------------------------------- |
| /movies                        | GET         | Get the complete list of movies                                                 | JSON            | None                                    |
| /movies/:movieId               | GET         | Get details of a specific movie by its id                                       | JSON            | None                                    |
| /movies/:movieId/seats         | GET         | Get seats for a specific movie by date and time available in the movie theather | JSON            | ?showDate=2021-02-04&showTime=7:00%20PM |
| /movies/:movieId/seats         | POST        | Create new set of seats for a specific movie in a date and time given           | JSON            | None                                    |
| /movies/:movieId/seats/:seatId | PUT         | Update booked seats for a specific movie in a date and time given               | JSON            | None                                    |
| /movies/:movieId/purchases     | POST        | Create a new purchase for a specific movie                                      | JSON            | None                                    |

---

> /movies/:movieId/seats - POST Method

_*Body request*_

```JSON
{
  "showDate": "2021-12-04",
  "showTime": "7:00PM",
  "allSeats": [
    { "identifier": "A", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "B", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "C", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "D", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "E", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "F", "row": [0, 0, 0, 0, 0, 0, 0, 0] }
  ]
}
```

> /movies/:movieId/seats - PUT Method

_*Body request*_

```JSON
{
  "seatId": "61a5c285d0bdc68044e5fff9",
  "allSeats": [
    { "identifier": "A", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "B", "row": [0, 0, -1, -1, 0, 0, 0, 0] },
    { "identifier": "C", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "D", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "E", "row": [0, 0, 0, 0, 0, 0, 0, 0] },
    { "identifier": "F", "row": [0, 0, 0, 0, 0, 0, 0, 0] }
  ]
}
```

> /movies/:movieId/purchase - POST Method

_*Body request*_

```JSON
{
	"userId": "6190699eba679222a49e5916",
	"movie": {
		"date": "2021-11-28",
		"time": "7:00 PM",
		"seats": [
			"A1",
			"A2"
		],
		"total": 15
	},
	"payment": {
		"cardNumber": "1234567812345678",
		"cardHolder": "Santiago Salazar",
		"expirationMonth": "12",
		"expirationYear": "22",
		"cvv": "123"
	}
}
```

### Users API Endpoints

| Route                    | HTTP method | Description                                     | Response Format | Query String |
| :----------------------- | :---------- | :---------------------------------------------- | :-------------- | :----------- |
| /users                   | GET         | Get list of all users registered in VanCinema   | JSON            | None         |
| /users/:userId           | GET         | Get user details by its id                      | JSON            | None         |
| /users/:userId/like      | PUT         | Update list of liked movies for a specific user | JSON            | None         |
| /users/:userId/purchases | GET         | Get purchase history for a specific user        | JSON            | None         |

---

> /users/:userId/like - POST Method

_*Body request*_

```JSON
{
	"movieLikes": [
		"6190689fba679222a49e5910"
	]
}
```

## Examples API Endpoints Request/Response

### GET /movies

> Response body (HTTP Status code 200)

```JSON
{
  "meta": {},
  "data": [
    {
      "_id": "6190689fba679222a49e5913",
      "title": "Black Widow",
      "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
      "imageUrl": "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
      "genres": [
        "Action",
        "Adventure",
        "Science Fiction"
      ],
      "rating": 4,
      "releaseDate": "2021-07-07T00:00:00.000Z"
    },
    {
      "_id": "6190689fba679222a49e5910",
      "title": "Dune",
      "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      "imageUrl": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      "genres": [
        "Science Fiction",
        "Adventure"
      ],
      "rating": 4,
      "releaseDate": "2021-09-15T00:00:00.000Z"
    },
    {
      "_id": "6190689fba679222a49e5911",
      "title": "No Time to Die",
      "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      "imageUrl": "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
      "genres": [
        "Adventure",
        "Action",
        "Thriller"
      ],
      "rating": 4,
      "releaseDate": "2021-09-29T00:00:00.000Z"
    },
    {
      "_id": "6190689fba679222a49e590f",
      "title": "Venom: Let there be Carnage",
      "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      "imageUrl": "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      "genres": [
        "Action",
        "Adventure",
        "Science Fiction"
      ],
      "rating": 3,
      "releaseDate": "2021-09-30T00:00:00.000Z"
    },
    {
      "_id": "6190689fba679222a49e5912",
      "title": "Shang-Chi and the Legend of the Ten Rings",
      "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
      "imageUrl": "https://image.tmdb.org/t/p/w500/xeItgLK9qcafxbd8kYgv7XnMEog.jpg",
      "genres": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "rating": 5,
      "releaseDate": "2021-09-01T00:00:00.000Z"
    }
  ],
  "errors": []
}
```

### GET /movies/6190689fba679222a49e5912

> Response body (HTTP Status code 200)

```JSON
{
  "meta": {},
  "data": {
    "_id": "6190689fba679222a49e5912",
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
    "imageUrl": "https://image.tmdb.org/t/p/w500/xeItgLK9qcafxbd8kYgv7XnMEog.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=8YjFbMbfXaQ",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 5,
    "releaseDate": "2021-09-01T00:00:00.000Z",
    "kids": false
  },
  "errors": []
}
```

### GET /movies/6190689fba679222a49e5912/seats?showDate=2021-12-05&showTime=9:00%20PM

> Response body (HTTP Status code 200)

```JSON
{
  "meta": {},
  "data": {
    "_id": "61a8667e367a642eff85c75d",
    "movieId": "6190689fba679222a49e5912",
    "showDate": "2021-12-05T00:00:00.000Z",
    "showTime": "9:00 PM",
    "allSeats": [
      {
        "identifier": "A",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a8667e367a642eff85c75e"
      },
      {
        "identifier": "B",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a8667e367a642eff85c75f"
      },
      {
        "identifier": "C",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a8667e367a642eff85c760"
      },
      {
        "identifier": "D",
        "row": [
          0,
          0,
          1,
          1,
          1,
          1,
          0,
          0
        ],
        "_id": "61a8667e367a642eff85c761"
      },
      {
        "identifier": "E",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a8667e367a642eff85c762"
      },
      {
        "identifier": "F",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a8667e367a642eff85c763"
      }
    ],
    "createdAt": "2021-12-02T06:23:58.354Z",
    "updatedAt": "2021-12-02T06:23:58.354Z",
    "__v": 0
  },
  "errors": []
}
```

### POST /movies/6190689fba679222a49e5912/seats

> Request body

```JSON
{
	"showDate": "2021-12-01",
	"showTime": "7:00 PM",
	"allSeats": [
		{
			"identifier": "A",
			"row": [
				-1,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "B",
			"row": [
				0,
				-1,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "C",
			"row": [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "D",
			"row": [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "E",
			"row": [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "F",
			"row": [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}
	]
}
```

> Response body (HTTP Status code 201)

```JSON
{
  "meta": {},
  "data": {
    "movieId": "6190689fba679222a49e5910",
    "showDate": "2021-12-03T00:00:00.000Z",
    "showTime": "7:00 PM",
    "allSeats": [
      {
        "identifier": "A",
        "row": [
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a86cdd104e75df31cf67f3"
      },
      {
        "identifier": "B",
        "row": [
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a86cdd104e75df31cf67f4"
      },
      {
        "identifier": "C",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a86cdd104e75df31cf67f5"
      },
      {
        "identifier": "D",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a86cdd104e75df31cf67f6"
      },
      {
        "identifier": "E",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a86cdd104e75df31cf67f7"
      },
      {
        "identifier": "F",
        "row": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "_id": "61a86cdd104e75df31cf67f8"
      }
    ],
    "_id": "61a86cdd104e75df31cf67f2",
    "createdAt": "2021-12-02T06:51:09.130Z",
    "updatedAt": "2021-12-02T06:51:09.130Z",
    "__v": 0
  },
  "errors": []
}
```

### PUT /movies/6190689fba679222a49e5912/seats/61a86d4f104e75df31cf67fa

> Request body

```JSON
"allSeats": [
		{
			"identifier": "A",
			"row": [
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "B",
			"row": [
				0,
				1,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "C",
			"row": [
				0,
				0,
				-1,
				-1,
				-1,
				0,
				0,
				0
			]
		},
		{
			"identifier": "D",
			"row": [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "E",
			"row": [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			"identifier": "F",
			"row": [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}
	]
```

> Response body = No Content (HTTP Status code 204). Resource was modified

### POST /movies/6190689fba679222a49e5912/purchases

> Request body

```JSON
{
	"userId": "6190699eba679222a49e5916",
	"movie": {
		"date": "2021-12-05",
		"time": "7:00 PM",
		"seats": [
			"A1",
			"A2"
		],
		"total": 15
	},
	"payment": {
		"cardNumber": "1234567812345678",
		"cardHolder": "Santiago Salazar",
		"expirationMonth": "12",
		"expirationYear": "22",
		"cvv": "123"
	}
}
```

> Response body (HTTP Status code 201)

```JSON
{
  "meta": {},
  "data": {
    "userId": "6190699eba679222a49e5916",
    "movieId": "6190689fba679222a49e5913",
    "movieDate": "2021-12-05T00:00:00.000Z",
    "movieTime": "7:00 PM",
    "seats": [
      "A1",
      "A2"
    ],
    "total": 15,
    "cardNumber": "1234567812345678",
    "cardHolder": "Santiago Salazar",
    "expirationDate": "1222",
    "cvv": "123",
    "_id": "61a86ee9104e75df31cf680f",
    "createdAt": "2021-12-02T06:59:53.654Z",
    "updatedAt": "2021-12-02T06:59:53.654Z",
    "__v": 0
  },
  "errors": []
}
```

### GET /users

> Response body (HTTP Status code 200)

```JSON
{
  "meta": {},
  "data": [
    {
      "_id": "6190699eba679222a49e5916",
      "firstName": "Santiago",
      "lastName": "Salazar",
      "email": "santiago@test.com",
      "phoneNumber": "(778) 555-5555",
      "movieLikes": [
        "6190689fba679222a49e5910"
      ],
      "updatedAt": "2021-12-02T06:24:19.887Z"
    }
  ],
  "errors": []
}
```

### GET /users/6190699eba679222a49e5916

> Response body (HTTP Status code 200)

```JSON
{
  "meta": {},
  "data": {
    "_id": "6190699eba679222a49e5916",
    "firstName": "Santiago",
    "lastName": "Salazar",
    "email": "santiago@test.com",
    "phoneNumber": "(778) 555-5555",
    "movieLikes": [
      "6190689fba679222a49e5910"
    ],
    "updatedAt": "2021-12-02T06:24:19.887Z"
  },
  "errors": []
}
```

### PUT /users/6190699eba679222a49e5916/like

> Request body

```JSON
{
	"movieLikes": [
		"6190689fba679222a49e5910",
		"6190689fba679222a49e5913"
	]
}
```

> Response body = No Content (HTTP Status code 204). Resource was modified

### GET /users/6190699eba679222a49e5916/purchases

> Response body (HTTP Status 200)

```JSON
{
  "meta": {},
  "data": [
    {
      "_id": "61a86ee9104e75df31cf680f",
      "userId": "6190699eba679222a49e5916",
      "movieId": "6190689fba679222a49e5913",
      "movieDate": "2021-12-05T00:00:00.000Z",
      "movieTime": "7:00 PM",
      "seats": [
        "A1",
        "A2"
      ],
      "total": 15,
      "cardNumber": "1234567812345678",
      "cardHolder": "Santiago Salazar",
      "expirationDate": "1222",
      "cvv": "123",
      "createdAt": "2021-12-02T06:59:53.654Z",
      "updatedAt": "2021-12-02T06:59:53.654Z",
      "__v": 0
    },
    {
      "_id": "61a8667e367a642eff85c75b",
      "userId": "6190699eba679222a49e5916",
      "movieId": "6190689fba679222a49e5912",
      "movieDate": "2021-12-05T08:00:00.000Z",
      "movieTime": "9:00 PM",
      "seats": [
        "D3",
        "D4",
        "D5",
        "D6"
      ],
      "total": 30,
      "cardNumber": "1234567812345678",
      "cardHolder": "Jose Arteaga",
      "expirationDate": "0222",
      "cvv": "111",
      "createdAt": "2021-12-02T06:23:58.216Z",
      "updatedAt": "2021-12-02T06:23:58.216Z",
      "__v": 0
    }
  ],
  "errors": []
}
```
