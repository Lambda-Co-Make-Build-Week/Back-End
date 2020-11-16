# Back-End

Back-End repository for Co-Make Project.

Back-End Developers: Unit 4 - Mike Hill

## Deployed on Heroku [Co-Make Build Week Project](https://co-make-tattlenyourneighbors.herokuapp.com/)

## Users Schema

#### Axios call for registering a new user:

`axios.post(https://co-make-tattlenyourneighbors.herokuapp.com/auth/register)`

- Required fields to register:

###### Request Body:

```
{
  "username": "example",
  "email": "example@email.com",
  "password": "password",
}
```

###### Returns:

```
{
  {
    "id": 1,
    "username": "example"
    "email": "example@email.com",
    "password": "$2a$08$0etMJmlr3.7JokXFU95QC"
  }
}
```

`axiosWithAuth().post(https://co-make-tattlenyourneighbors.herokuapp.com/auth/login, credentials)`

- Required fields to login:

###### Request Body:

```
{
  "username": "example",
  "password": "password"
}
```

###### Returns:

```
{
    "message": "Welcome to Co-Make ",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImQiLCJpZCI6MSwiaWF0IjoxNjAzMDg0MTc3LCJleHAiOjE2MDMxMTI5Nzd9"
}
```

## Project Schema

###### Request Body:

```
{
  "issue_name": "test",
  "issue_description": "testing",
  "issue_img": "someurl"
}
```

###### Returns:

```
{
  {
    "id": 7,
    "issue_name": "test",
    "issue_description": "testing",
    "issue_img": "some url",
  }
}
```

***Comments***
```
{
  "comment": "test"
}
```

######Returns:
```
{
  "id": "test",
  "comment": "testing"
}
```

#### Axios call for getting issues and comments:

`axios.get(https://co-make-tattlenyourneighbors.herokuapp.com/issues)` (requires token)
`axios.get(https://co-make-tattlenyourneighbors.herokuapp.com/issues/:id/comments)` (requires token)

## Endpoints

|    Route     | Method | Endpoint              | Description                                                                 | Required                  |
| :----------: | :----: | --------------------- | --------------------------------------------------------------------------- | ------------------------- |
|   **Auth**   | POST   | /auth/register        | Creates a new user                                                          | email, username, password |
|              | POST   | /auth/login           | Logs in a user, returns a token to be added to the header of other requests | username, password        |
| **Projects** | POST   | /issues               | Adds a new issue, returns the added issue                                   | token                     |
|              | GET    | /issues               | Returns a list of issues                                                    | token                     |
|              | GET    | /issues/:id           | Returns a issue based on id                                                 | token                     |
|              | PUT    | /issues/:id           | Update with changes to a issue by id                                        | token                     |
|              | DELETE | /issues/:id           | Deletes the issue by id                                                     | token                     |
| **Comments** | GET    | /issues/:id/comments  | Returns list of comments by issue                                           | token                     |
|              | POST   | /issues/:id/comments  | Adds a new comments by issue                                                | token                     |

