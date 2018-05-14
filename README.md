# backdb

## ssh-keyken and git configuration
```
ssh-keygen -t rsa -b 4096 -C fabiorojas7@gmail.com
git config --global user.name "hackchan"
git config --global user.email "fabiorojas7@gmail.com"
git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
```
## Arguments Npm Script's
```
npm run lint -- --fix

```
## Postgresql basic commands and Install
```
rpm -Uvh https://yum.postgresql.org/10/redhat/rhel-7-x86_64/pgdg-centos10-10-2.noarch.rpm

#yum install postgresql10-server postgresql10
#/usr/pgsql-10/bin/postgresql-10-setup initdb
# systemctl start postgresql-10.service
# systemctl enable postgresql-10.service
# su - postgres -c "psql"
#/var/lib/pgsql/data/postgresql.conf
  listen_addresses = '*'
#/var/lib/pgsql/data/pg_hba.conf
  host   all  all  0.0.0.0/0 md5

CREATE ROLE test  WITH LOGIN PASSWORD '1234567';
CREATE DATABASE playgames;
GRANT ALL PRIVILEGES ON DATABASE playgames TO test;




```
## Usage
```js

const setupDatabase = require('backdb') 

setupDatabase(config).then(db => {
    const {Agent, Metric} = db
}).catch(err => console.log(err))
```