# Udemy - Vue Samurai - Domine os conceitos do VueJS

Projeto do curso "Vue Samurai - Domine os conceitos do VueJS" da Udemy


# Passos

Os passos para o desenvolvimento do projeto foram:

1. Instalar gerenciador de pacotes, pacotes
- Node e npm: `https://nodejs.org/en/download`
- Vue: `npm install vue` no terminal
- Vue CLI: `npm install -g @vue/cli` no terminal

2. Verificar versões de NodeJS, npm e VueJS:
- `node -v`
- `npm -v`
- `vue --version`

![Image-01-cmd-NpmNodeVue-Versions](/printscreens/Image-01-cmd-NpmNodeVue-Versions.jpg)

3. Criar projeto no diretório desejado usando o comando `vue create udemy-vuejs-samurai` no terminal.

![Image-02-cmd-VueCreate](/printscreens/Image-02-cmd-VueCreate.jpg)

4. Testar o projeto com `npm run serve` e abrir `http://localhost:8080/` no navegador.

![Image-03-NpmRunServe-localhost](/printscreens/Image-03-NpmRunServe-localhost.jpg)

5. Adicionar BootstrapVue: 
- Execute o comando `npm install bootstrap-vue-3` no terminal.
- Em `package.json` e `package-lock.json`, verificar se `bootstrap-vue-3": "^0.5.1` está em "dependencies".
- Em `main.js` altere o código para:
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

6. Remover `HelloWorld` component:
- Em `src/components`, excluir o arquivo `HelloWorld.vue`.
- Em `src/App.vue`, remover referências do componente `HelloWorld`.

7. Adicionar `AppHeader` component:
- Em `src/components`, criar o arquivo `AppHeader.vue`.
- Em `src/App.vue`, adicionar `<AppHeader />` em `template` e `AppHeader` em `components` de `export`.


## Referências
Udemy - Vue Samurai: Domine os conceitos do VueJS - Frederico Fortes Bichara:
https://www.udemy.com/course/curso-vue-js-vue-samurai-domine-os-conceitos-do-vuejs