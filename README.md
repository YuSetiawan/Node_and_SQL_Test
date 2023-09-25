<br />
<p align="center">
  <h3 align="center">REST API & QUERY</h3>
  <table>
     <tr>
    <td><img width="450px" src="https://cdn.discordapp.com/attachments/1066029493287919706/1155774987861495861/image-removebg-preview_5.png"  border="0" border="0" alt="1" /></td>
    <td><img width="450px" src="https://cdn.discordapp.com/attachments/1066029493287919706/1155774988146712626/bcc67d4b-915f-4d8f-bbfc-a3dca281ab6b.jpg" border="0" border="0" alt="2" /></td>
  </tr>
   <tr>
    <td>User table for authentication</td>
    <td>SQL Test querry</td>
  </tr>
  </table>

  <p align="center">
    <a href="https://github.com/YuSetiawan/Node_and_SQL_Test"><strong>Explore the docs »</strong></a> 
    <br/>
    or
    <br/>    
    <a href="https://node-and-sql-test.vercel.app/">Api Demo</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
  - [Documentation](#documentation)

# About The Project

REST API with Node.js :
1. Authentication API
2. Get all job list API
3. Get selected job list API

Structured Query Language (SQL) test :
1. Recapitulation of the number of accounts owned by each customer
2. All transactions made by John Michael are sorted by account number and transaction date

## Built With

These are the libraries and service used for building this backend API

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [PostgreSQL](https://www.postgresql.org)
- [Json Web Token](https://jwt.io)

# Installation

1. Clone this repository

```sh
https://github.com/YuSetiawan/Node_and_SQL_Test
```

2. Change directory to markisak-be

```sh
cd Node_and_SQL_Test
```

3. Install all of the required modules

```sh
npm install
```

4. Create PostgreSQL database, query are provided in [query.sql](./query.sql)

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env.example](./.env.example)

```txt
- Please note that this server requires Google Drive API credentials and Gmail service account
- Otherwise API endpoint with image upload and account register won't work properly
```

6. Run this command to run the server

```sh
npm run start
```

## Documentation

Documentation files are provided in the [docs](./docs) folder

- [Postman API colletion]()
- [PostgreSQL database query](./query.sql)

API endpoint list are also available as published postman documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/22647943/2s9YJW6Rka)
