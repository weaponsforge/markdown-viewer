## markdown-viewer

> React (CRA) markdown experiments.

### Requirements

- NodeJS v12+
- Text editor/IDE (VSCode is recommended)

### Content

- Installation
- Usage

## Installation

1. Clone this repository.  
`git clone https://github.com/weaponsforge/markdown-viewer.git`
2. Install dependencies.  
`npm install`
3. Temporarily edit `package.json` when working on localhost, to workaround CRA's internal `PUBLIC_URL` naming mechanism. Remove `/markdown-viewer` from the **homepage** key:  
   ```
   {
     "homepage": "https://weaponsforge.github.io",
     "name": "markdown-viewer",
     ...
   }
   ```
   > **NOTES:** 
   > - Remember to restore back to `"homepage": "https://weaponsforge.github.io/markdown-viewer"` when deploying to Github Pages. **/markdown-viewer** is required when the CRA is deployed under a `https://{username}.github.io/{repo-name}` Github Pages hosting.
   > - Set the GitHub repository's secret variable `secret.REACT_APP_PUBLIC_URL=/markdown-viewer`

## Available Scripts

### `npm start`
Run the local react app for development.  

### `npm run build`
Bulid the app for production deployment. 

### `npm run static`
- Requires `npm run build`.
- Run the static build app from a localhost web server. 

### `npm run lint`
Check the codebase for lint errors.

### `npm run lint:fix`
Fix lint erros from the codebase.

@weaponsforge  
20210820