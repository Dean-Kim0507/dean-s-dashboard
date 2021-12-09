# Dean-s-dashboard
Link: https://dean-dashboard.herokuapp.com/
Basic demo responsive dashboard 

## Stack
Front - React, Redux
Backend - Nodejs, Express
DB - Postgre SQL

## Database ERD

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
