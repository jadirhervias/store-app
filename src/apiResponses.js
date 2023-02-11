const productsListResponse = {
  "data": [
    {
      "id": "123asdasd23423",
      "name": "iPad 10",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 4000.00,
      "store": {
        "name": "Store Test 1",
        "id": 645879789456451
      }
    },
    {
      "id": "123asdasd33rsfe",
      "name": "iPad 11",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 5500.00,
      "store": {
        "name": "Store Test 1",
        "id": 645879789456451
      }
    },
    {
      "id": "123asdasd45433",
      "name": "iPad 12 PRO",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 10500.00,
      "store": {
        "name": "Store Test 1",
        "id": 645879789456451
      }
    },
  ]
};

const productsGetResponse = {
  "data": {
    "id": "123asdasd23423",
    "name": "iPad 10",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 4000.00,
    "store": {
      "name": "Store Test 1",
      "id": 645879789456451
    },
    "modified_time": "10:00:00 04-04-2019",
    "created_time": "10:00:00 04-04-2019"
  }
};

const productsCreateResponse = {
  "code": 0,
  "data": {
    "id": "321a3546ada",
    "modified_time": "10:00:00 04-04-2019",
    "created_time": "10:00:00 04-04-2019"
  },
  "message": "The product has been created."
};

const productsUpdateResponse = {
  "code": 0,
  "data": {
    "id": "321a3546ada",
    "modified_time": "10:00:00 04-04-2019",
    "created_time": "10:00:00 04-04-2019"
  },
  "message": "The product has been updated."
};

const productsDeleteResponse = {
  "code": 0,
  "message": "The product has been deleted."
};

const storesListResponse = {
  "code": 0,
  "data": [
    {
      "id": "645879789456451",
      "name": "Store Test 1",
      "category": "Retail"
    },
    {
      "id": "645879789456452",
      "name": "Store Test 2",
      "category": "Retail"
    },
    {
      "id": "645879789456453",
      "name": "Store Test 3",
      "category": "Retail"
    }
  ],
  "message": "The stores have been retrieved."
};

const storesGetResponse = {
  "code": 0,
  "data": {
    "id": "321asdas3da",
    "name": "Tienda Pepes",
    "category": "Calzado",
    "created_time": "10:00:00 04-04-2019",
    "modified_time": "10:00:00 04-04-2019"
  },
  "message": "The store has been retrieved."
};

const storesCreateResponse = {
  "code": 0,
  "data": {
    "id": "321a3546ada",
    "modified_time": "10:00:00 04-04-2019",
    "created_time": "10:00:00 04-04-2019",
  },
  "message": "The store has been created."
};

const storesUpdateResponse = {
  "code": 0,
  "data": {
    "id": "321a3546ada",
    "modified_time": "10:00:00 04-04-2019",
    "created_time": "10:00:00 04-04-2019",
  },
  "message": "The store has been updated."
};

const storesDeleteResponse = {
  "code": 0,
  "message": "The store has been deleted."
};

const apiResponses = {
  products: {
    productsListResponse,
    productsGetResponse,
    productsCreateResponse,
    productsUpdateResponse,
    productsDeleteResponse
  },
  stores: {
    storesListResponse,
    storesGetResponse,
    storesCreateResponse,
    storesUpdateResponse,
    storesDeleteResponse
  },
};

export default apiResponses;
