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
  (Replace <version_number> with the version you just installed, like 18.17.0).

- Verify the versions again: After running nvm use, check your Node.js and npm versions again to confirm the command worked.

`node -v`
`npm -v`

- Whenever npm.ps1 restricted issue showup(usually shows up only once) you should unrestrict for the current user to run powershell scripts. using `Set-ExecutionPolicy -Scope CurrentUser Unrestricted` command on VSCode Terminal.

- To install express module using npm
  `npm install express` or `npm install express@<version-number>`

- To use a function of a module, we have to export that function using
  `module.exports.<function-name> = <function-name>;`

  then call `var <varible-name> = require('<module-name>.js)`
  and access the functions of it using
  `<variable-name>.<function-name>`
