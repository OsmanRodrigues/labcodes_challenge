## Dev Setup

### Backend

The project needs a `.env` file with all the environment variables expected by the project. To do so you can copy the `env.example` file and edit your own `.env`.

We're using docker compose to manage all the required infra (Postgres and Redis) for the application to run. To create all the images and run them as a daemon, you have to have docker-compose installed and run:

```
$ docker-compose up -d
```

We highly recommend you to create a [Python virtual environment](https://docs.python.org/3/tutorial/venv.html) to the project. You may create it whatever way you want, but at Labcodes, we mostly use [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/en/latest/) to manage virtual environments. Assuming you already [have `virtualenvwrapper` installed](https://virtualenvwrapper.readthedocs.io/en/latest/#introduction), the commands to run the projects are:

```
$ mkvirtualenv labcodes_challenge -p /usr/bin/python3
$ pip install -r dev-requirements.txt
$ cd project
$ python manage.py test
$ python manage.py migrate
$ python manage.py runserver
```

We've already prepared a valid DB with pre-populated products. If you want to load it, just run:

```
$ python manage.py loaddata products
```

If you want to create your own products, you can do so via http://localhost:8000/admin but you have to create a super user to access it.

### Frontend

Before running anything, be sure to have `node` and `npm` installed. On Ubuntu 18.04, you may follow [this guide](https://hostadvice.com/how-to/how-to-install-node-js-on-ubuntu-18-04/).

After that, run `make node_setup` or [use `n`](https://www.npmjs.com/package/n) to set up the current `node` and `npm` lts versions. The `make node_setup` command will install [`nvm`](https://github.com/nvm-sh/nvm), so you may need to reset your terminal

Making sure you're using node's LTS version, install all the dependencies:

```
npm i
```

Then, you'll need to run it together with the backend. We created a `make` command to deal with running both in parallel:

```
make dev
```

Our basic react app lies inside the `project/assets/src/` folder.

Before deploying, make sure you have created a proper build by running:

```
make build_frontend
```

## API Docs

The current API has only 3 valid endpoints and none of they requires a logged user.

### `/api/inventory/`

The endpoint is only accessible via **GET** and it lists the products in the inventory. A valid **200** response will have the following JSON body:

```
[
  {
    "name": "Pencil",
    "description": "Graffiti Pencil",
    "code": "P-0142",
    "available_quantity": 150,
  },
  {
    "name": "Pen 0.4",
    "description": "0.40mm Ink Pen",
    "code": "P-0156",
    "available_quantity": 40,
  }
]
```

### `/api/inventory/<code>/`

The endpoint is only accessible via **GET** and it returns the detail of the product in the inventory with the corresponding code. A valid **200** response for the url `/api/inventory/P-0142/` will have the following JSON as its body:

```
{
  "name": "Pencil",
  "description": "Graffiti Pencil",
  "code": "P-0142",
  "available_quantity": 150,
}
```

If the code doesn't exist in the database, the endpoint will return a **404** response.

### `/api/inventory/<code>/update-quantity/`

The endpoint is only accessible via **POST** and it adds or withdrawl a specific amount from the product available quantity. The valid **200** response depends on a valid request body, `{"quantity": -50}` for example, and it will have the following JSON as its body:

```
{
  "available_quantity": 100,  # this is the updated value for the product available quantity
}
```

If the code doesn't exist in the database, the endpoint will return a **404** response.

If the request is using an invalid JSON as data, `{}` for example, the endpoint will return a **400** response with the following JSON as its body:

```
{
  "quantity": ["This field is required."]
}
```
