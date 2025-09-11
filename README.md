# NodeJS_Playground

- Go to https://github.com/coreybutler/nvm-windows/releases and download nvm-setup.zip or nvm-setup.exe and install nvm

  - If node or npm are already installed before installing nvm, uninstall them, remove the PATH variables in Environmental variables(both ins system variables and user variables), then install the nvm.

  - Once Node Version Manager installation is completed, go to CMD, and check it with `nvm -v`
    Then,
    `nvm install latest` installs latest versions of both node and npm
    then check if both of them installed or not using `node -v` and `npm-v`

  - Once you install node, check if it activated using `node list`
    This command shows all versions of Node.js that NVM has installed. You should see a new version number in the list.

  - Activate the new version: If the version is in the list but not marked as active (with an asterisk \* next to it), you need to activate it. Run the command:
    `nvm use <version_number>`
    (Replace <version_number> with the version you just installed, like 24.7.0).

  - Verify the versions again: After running nvm use, check your Node.js and npm versions again to confirm the command worked.

- Whenever npm.ps1 restricted issue showup(usually shows up only once) you should unrestrict for the current user to run powershell scripts. using `Set-ExecutionPolicy -Scope CurrentUser Unrestricted` command on VSCode Terminal.

- To install express module using npm
  `npm install express` or `npm install express@<version-number>`

  - To check node modules version
    `npm list <module-name>`

  * To use a function of a module, we have to export that function using
    `module.exports.<function-name> = <function-name>;`

  - then call `var <varible-name> = require('<module-name>.js)`
    and access the functions of it using
    `<variable-name>.<function-name>`

  - If we write `fs.writeFile('<file-name>')` this function will wipe out existing content in that file. So, to append the latest data we need to use `fs.appendFile('<file-name>')` function

* To automatically restart the node server everytime we make a change and save it instead of restarting the server after each change using `node <file-name>`, we need to install `nodemon` module. Either install it locally using `npm i nodemon` or install it globally using `npm install or i -g nodemon`

  - Module package URL - `https://www.npmjs.com/package/nodemon`

  * once we install it run the script with `nodemon <file-name>` instead of `node <file-name>`

  * The `--watch` flag can now replace `nodemon` in your node JS dev environment if Node version is above 18.11.
    Add `--watch` in the dev script of `package.json` -

  ```
    "scripts":{
      "start": "node index.js",
      "dev": "node --watch index.js
      or
      "dev": "node --watch-path= ./src
      --wacth-path=./test
      --watch-preserve-output"
    }
  ```

  - and it will restart the application when changes in your file are detected

  * if you have a larger project that needs to watch for changes in many different files you can use the `--watch-path=./src` flag and it will watch for changes in all of the files within the directory but you still need to specify file that starts your application as well as the directory.
  * you can also use multiple watch path flags to watch multiple directories and,
  * you can add the `--watch-preserve-output` flag to disable the clearing of the console when your node app restarts.
  * But note if you're using `TypeScript` in your node JS project you're still going to need `nodemon` instead of these new `watch flags`.

* The res.sendStatus(200) method in Express.js sends a "200 OK" status code and automatically sets the response body to the default status message "OK".
  - If you want to customize the message displayed in the browser, you need to use res.status() and res.send() or res.json() separately.
