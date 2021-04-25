# svc-company

A service that returns data about companies and their shares.

## routes

### /api/companies

This will return a list of companies, their latest close price and a snow flake score.

The following params are available:

```
limit: integer 

```
This will limit the size of the companies returned

```
page: integer
```
This will paginate the results

```
includeClosePrices: boolean
```
If true the response will include a full list of previous close prices

## dev

To run the service:

```
cp repo/prod/* repo/dev
yarn install
yarn dev
```

To run the tests:

```
yarn test
```

To run the lint:

```
yarn lint

yarn lint:fix
```

## db

To do backup the db:
```
yarn db:backup
```

## running the app

```
PORT=8080 yarn start
```
