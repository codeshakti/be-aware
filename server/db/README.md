### From / to a json array file and a local server

```bash
$ mongoimport -d beaware -c projects --drop --jsonArray --file data/projects.json

$ mongoexport -d beaware -c projects --jsonArray -o data/projects.json

$ mongoimport -d beaware -c users --drop --jsonArray --file data/users.json

$ mongoexport -d beaware -c users --jsonArray -o data/users.json

$ mongoimport -d beaware -c orgs --drop --jsonArray --file data/orgs.json

$ mongoexport -d beaware -c orgs --jsonArray -o data/orgs.json
```

### From / to a json array file and a remote mongo server

```bash
$ mongoimport -h <host>:<port> -d <database-name> -c <collection-name> -u <username> -p <password> --drop --jsonArray --file <json-array-file>

$ mongoexport -h <host>:<port> -d <database-name> -c <collection-name> -u <username> -p <password>  --jsonArray -o <json-array-file>
```