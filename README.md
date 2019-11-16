# Development Environments

## Visual Code

To replace the settings, copy the settings.json file into:
- (Linux) ~/.config/Code/User
- (Win) C:\Users\username\AppData\Roaming\Code\User
- (Mac) ~/Library/Application Support/Code/User

To replace extensions, copy the .vscode folder into:
- (Linux/Mac) ~/.vscode/extensions
- (Win) C:\Users\username\.vscode\extensions

### How to use in Angular Project

1. Create a new angular project
2. Add the development dependencies from this package.json into the Angular project's package.json
3. Remove the tslint package if it exists in the project's package.json
4. Copy over the .eslintrc and .prettierrc files into the Angular project's main directory
5. Run npm install and modify the rules if needed
