const productsListResponse = {
  "data": [
    {
      "id": "123asdasd23423",
      "name": "iPad GRATIS",
      "description": "iPad 12' sfsdfsd fsd",
      "price": 100.00,
      "store": {
        "name": "Store Test",
        "id": 645879789456456
      }
    },
    {
      "id": "123asdasd33rsfe",
      "name": "iPad DOS",
      "description": "iPad 9' sdfsd fsdsfdsfsdsdfsdfdsf",
      "price": 100.00,
      "store": {
        "name": "Store Test",
        "id": 645879789456456
      }
    },
    {
      "id": "123asdasd45433",
      "name": "iPad TRES",
      "description": "iPad 10' sdfsdfdsfs s s ss  ss ",
      "price": 100.00,
      "store": {
        "name": "Store Test",
        "id": 645879789456456
      }
    },
  ]
};

const productsGetResponse = {
  "data": {
    "id": 645789456564,
    "name": "iPad",
    "description": "iPad 242 122sdf sdfsfsfsdsf'",
    "price": 100.00,
    "store": {
      "name": "Store Test",
      "id": 645879789456456
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
      "id": "123asdasdgfgfdgd",
      "name": "Ripley 1",
      "category": "Retail"
    },
    {
      "id": "123asdasdcvcvcxvwwww",
      "name": "Ripley 2",
      "category": "Retail"
    },
    {
      "id": "123asdasdfdfsfswq",
      "name": "Ripley 3",
      "category": "Retail"
    },
    {
      "id": "123asdasd2r2r232",
      "name": "Ripley 4",
      "category": "Retail"
    },
    {
      "id": "123asdasd",
      "name": "Ripley 5",
      "category": "Retail"
    },
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
