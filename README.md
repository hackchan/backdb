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
## Usage
```js

const setupDatabase = require('backdb') 

setupDatabase(config).then(db => {
    const {Agent, Metric} = db
}).catch(err => console.log(err))
```