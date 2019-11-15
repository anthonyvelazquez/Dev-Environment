# Development Environments

## Visual Code

To replace settings:
~/.config/Code/User on Linux (in my case, an, Ubuntu derivative)
C:\Users\username\AppData\Roaming\Code\User on Windows 10
~/Library/Application Support/Code/User/ on Mac OS X
To replace extensions:
~/.vscode/extensions on Linux and Mac OS X
C:\Users\username\.vscode\extensions on Windows 10

### Angular

Create a new angular project and add the development dependencies into the Angular project's package.json. Remove the tslint package as well. Copy over the .eslintrc and .prettierrc files into the Angular project's main directory. Do npm install and it should be good to go
