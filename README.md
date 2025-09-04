# NodeJS_Playground

Go to https://github.com/coreybutler/nvm-windows/releases and download nvm-setup.zip or nvm-setup.exe and install nvm

If node or npm are already installed before installing nvm, uninstall them, remove the PATH variables in Environmental variables(both ins system variables and user variables), then install the nvm.

once Node Version Manager installation is completed, go to CMD, and check it with `nvm -v`
Then,
`nvm install latest` installs latest versions of both node and npm
then check if both of them installed or not using `node -v` and `npm-v`

once you install node, check if it activated using `node list`
This command shows all versions of Node.js that NVM has installed. You should see a new version number in the list.

Activate the new version: If the version is in the list but not marked as active (with an asterisk \* next to it), you need to activate it. Run the command:
`nvm use <version_number>`
(Replace <version_number> with the version you just installed, like 18.17.0).

Verify the versions again: After running nvm use, check your Node.js and npm versions again to confirm the command worked.

`node -v`
`npm -v`
