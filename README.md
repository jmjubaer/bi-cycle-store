# By-Cycle Store API 

### 1. Add products(Bycycle) into the database.
- **API Address:** **`http://localhost:5000/api/products`**
- **Method:** `POST`
- **Request Body: Request body model**

```json
  {
    "name": "BMX StuntRider",
    "brand": "TrickFlow",
    "price": 260,
    "type": "BMX",
    "description": "A compact and strong BMX bike for tricks and stunts.",
    "quantity": 20,
    "inStock": true
  }
```

- **Response:** This is the response model.

```json
{
    "success": true,
    "message": "Bicycle created successfully",
    "data": {
        "name": "BMX StuntRider",
        "brand": "TrickFlow",
        "price": 260,
        "type": "BMX",
        "description": "A compact and strong BMX bike for tricks and stunts.",
        "quantity": 20,
        "inStock": true,
        "createdAt": "2024-12-02T15:03:06.792Z",
        "updatedAt": "2024-12-02T15:03:06.792Z",
        "_id": "674dcc2a124f45083c89b11b",
        "__v": 0
    }
}
```

### 2. Get all products(Bycycle) from the database.
#### Note: If pass the `name`, `brand`, `type` by searchTearm, filter the data by the searchTerm.

#### 1. With serachTerm
- **API Address:** **`http://localhost:5000/api/products?searchTerm=TrickFlow`**
- **Method:** `GET`

- **Response:** This is the response model.

```json
{
    "success": true,
    "message": "Bicycles retrieved successfully",
    "data": [
        {
            "_id": "674dcc2a124f45083c89b11b",
            "name": "BMX StuntRider",
            "brand": "TrickFlow",
            "price": 260,
            "type": "BMX",
            "description": "A compact and strong BMX bike for tricks and stunts.",
            "quantity": 20,
            "inStock": true,
            "createdAt": "2024-12-02T15:03:06.792Z",
            "updatedAt": "2024-12-02T15:03:06.792Z",
            "__v": 0
        },
        {
            "_id": "674dd7258be56a2eb6e5cd70",
            "name": "BMX StuntRider",
            "brand": "TrickFlow",
            "price": 260,
            "type": "BMX",
            "description": "A compact and strong BMX bike for tricks and stunts.",
            "quantity": 20,
            "inStock": true,
            "createdAt": "2024-12-02T15:49:57.104Z",
            "updatedAt": "2024-12-02T15:49:57.104Z",
            "__v": 0
        }
    ]
}
```

#### 1. Without serachTerm
- **API Address:** **`http://localhost:5000/api/products`**
- **Method:** `GET`

- **Response:** This is the response model.

```json
{
    "success": true,
    "message": "Bicycles retrieved successfully",
    "data": [
        {
            "_id": "674c9378a676df9dd04494ce",
            "name": "Roadster 5000",
            "brand": "SpeedX",
            "price": 1000,
            "type": "Road",
            "description": "A premium road bike designed for speed and performance.",
            "quantity": 20,
            "inStock": true,
            "createdAt": "2024-12-01T16:48:56.088Z",
            "updatedAt": "2024-12-01T16:48:56.088Z",
            "__v": 0
        },
        {
            "_id": "674dc8d7124f45083c89b115",
            "name": "MountainClimber X5",
            "brand": "PeakRider",
            "price": 500,
            "type": "Mountain",
            "description": "A durable mountain bike for steep and rocky trails.",
            "quantity": 12,
            "inStock": true,
            "createdAt": "2024-12-02T14:48:55.665Z",
            "updatedAt": "2024-12-02T14:48:55.665Z",
            "__v": 0
        },
        {
            "_id": "674dcbd0124f45083c89b117",
            "name": "Roadster Elite 2.0",
            "brand": "SwiftGear",
            "price": 320,
            "type": "Road",
            "description": "A lightweight road bike built for maximum speed.",
            "quantity": 18,
            "inStock": true,
            "createdAt": "2024-12-02T15:01:36.726Z",
            "updatedAt": "2024-12-02T15:01:36.726Z",
            "__v": 0
        },
        {
            "_id": "674dcc15124f45083c89b119",
            "name": "HybridFlex 700",
            "brand": "AdaptRide",
            "price": 290,
            "type": "Hybrid",
            "description": "A versatile bike combining the best of road and mountain bikes.",
            "quantity": 25,
            "inStock": true,
            "createdAt": "2024-12-02T15:02:45.219Z",
            "updatedAt": "2024-12-02T15:02:45.219Z",
            "__v": 0
        }
    ]
}
```

### 3. Get specific product(Bycycle) by ID.
- **API Address:** **`http://localhost:5000/api/products/674c9378a676df9dd04494ce`**
- **Method:** `GET`

- **Response:** This is the response model.

```json
{
    "success": true,
    "message": "Bicycles retrieved successfully",
    "data": {
        "_id": "674c9378a676df9dd04494ce",
        "name": "Roadster 5000",
        "brand": "SpeedX",
        "price": 1000,
        "type": "Road",
        "description": "A premium road bike designed for speed and performance.",
        "quantity": 20,
        "inStock": true,
        "createdAt": "2024-12-01T16:48:56.088Z",
        "updatedAt": "2024-12-01T16:48:56.088Z",
        "__v": 0
    }
}
```

### 4. Update the product(Bycycle).
- **API Address:** **`http://localhost:5000/api/products/674dd7258be56a2eb6e5cd71`**
- **Method:** `PUT`
- **Request Body: Request body model**

```json
{
  "price": 350,
  "quantity": 15
}
```
- **Response:** This is the response model.

```json
{
    "success": true,
    "message": "Bicycles updated successfully",
    "data": {
        "_id": "674dd7258be56a2eb6e5cd70",
        "name": "BMX StuntRider",
        "brand": "TrickFlow",
        "price": 350, // update Price
        "type": "BMX",
        "description": "A compact and strong BMX bike for tricks and stunts.",
        "quantity": 15,  // update quantity
        "inStock": true, 
        "createdAt": "2024-12-02T15:49:57.104Z",
        "updatedAt": "2024-12-02T16:42:54.080Z", // update the time
        "__v": 0
    }
}
```


### 5. Delete a product(Bycycle).
- **API Address:** **`http://localhost:5000/api/products/674de504aa105dd2c145b775`**
- **Method:** `DELETE`

- **Response:** This is the response model.

```json
{
    "success": true,
    "message": "Bicycles deleted successfully",
    "data": {}
}
```
