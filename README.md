# Udemy - Vue Samurai

Project for the Udemy course "Vue Samurai".


# Steps

The steps for developing the project were:

1. Install package manager, packages
- Node and npm: `https://nodejs.org/en/download`
- Vue: `npm install vue` in terminal
- Vue CLI: `npm install -g @vue/cli` in terminal

2. Check NodeJS, npm and VueJS versions:
- `node -v`
- `npm -v`
- `vue --version`

![Image-01-cmd-NpmNodeVue-Versions](/printscreens/Image-01-cmd-NpmNodeVue-Versions.jpg)

3. Create project in the desired directory using the `vue create udemy-vuejs-samurai` command in terminal.

![Image-02-cmd-VueCreate](/printscreens/Image-02-cmd-VueCreate.jpg)

4. Test the project with `npm run serve` and open `http://localhost:8080/` in the browser.

![Image-03-NpmRunServe-localhost](/printscreens/Image-03-NpmRunServe-localhost.jpg)

5. Add BootstrapVue:
- Run the command `npm install bootstrap-vue-3` in the terminal.
- In `package.json` and `package-lock.json`, check if `bootstrap-vue-3": "^0.5.1` is in "dependencies".
- In `main.js` change the code to:
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.mount('#app');
```

6. Remove `HelloWorld` component:
- In `src/components`, delete the `HelloWorld.vue` file.
- In `src/App.vue`, remove references from the `HelloWorld` component.


## References
Udemy - Vue Samurai - Frederico Fortes Bichara:
https://www.udemy.com/course/curso-vue-js-vue-samurai-domine-os-conceitos-do-vuejs