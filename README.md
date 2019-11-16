# Development Environments

## Visual Code

To replace the settings, copy the settings.json file into:
- (Linux) ~/.config/Code/User
- (Win) C:\Users\username\AppData\Roaming\Code\User
- (Mac) ~/Library/Application Support/Code/User

To replace extensions, copy the .vscode folder into:
- (Linux/Mac) ~/.vscode/extensions
- (Win) C:\Users\username\.vscode\extensions

### Angular

Create a new angular project and add the development dependencies into the Angular project's package.json. Remove the tslint package as well. Copy over the .eslintrc and .prettierrc files into the Angular project's main directory. Do npm install and it should be good to go
