# Dean-s-dashboard
Link: https://dean-dashboard.herokuapp.com/
<br />
Basic demo responsive dashboard with quote list and mocked cards.

## Technologies
Front - React, Redux <br/>
Backend - Nodejs, Express <br />
DB - Postgre SQL (deploy to Heroku cloud)
Normalized Databse
## Database ERD
![Untitled](https://user-images.githubusercontent.com/68558143/145468349-c352decc-a1c5-437b-a676-93ef88855a38.jpg)

## Initial Setup

Create the PostgreSQL database (these instructions may need to be adapted for your operating system):

```
psql
CREATE DATABASE travel;
\q
```

In the Fe folder, install dependencies and then seed the database:

```
cd Be
npm install
npm run seed
```

In the Fe folder, install dependencies:

```
cd Fe
npm install
```

### Running the Application Locally

In one terminal, start the front end:

```
cd Fe
npm run start
```

In a separate terminal, start the back end:

```
cd Be
npm run start
```
