## Script
```
npm run start
```
## Running Port 
8080
## APIs
### Get all todo-list
```
GET /todo-list
```

### Get todo by id
```
GET /todo-list/:id
```
### Create new todo-list
```
POST /todo-list
```
body
```json
{
    "todo": "Your todo name"
}
```
### Mark todo as complete
```
PUT /todo-list/:id/complete
```

### Delete todo
```
DELETE /todo-list/:id
```
