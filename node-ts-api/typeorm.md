If are going to use typeorm w/ sqlite, follow steps one, else follow steps two
# 1
Run the following line
```
yarn add typeorm sqlite3
```
And add the following lines on package.json scripts
```
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js",
"new-db": "ts-node-dev ./node_modules/typeorm/cli.js migrations:run"
```
And uncomment 
- line 8 from server.ts
- lines 1 and 3 from src/db/connection.ts
# 2
Delete src/db
Delete ormconfig.json
Delete line 8 from server.ts