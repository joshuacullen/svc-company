# svc-company

A service that returns data about companies and their shares.

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