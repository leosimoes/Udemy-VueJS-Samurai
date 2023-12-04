# Udemy - Vue Samurai - Domine os conceitos do VueJS

Projeto do curso "Vue Samurai - Domine os conceitos do VueJS" da Udemy


## Resultados

![Image-04-Cards](/printscreens/Image-04-Cards.jpg)

![Image-05-About](/printscreens/Image-05-About.jpg)


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

8. Adicionar `TrailCard` component:
- Em `src/components`, criar o arquivo `TrailCard.vue`.
- TrailCard deve ter as propriedades framework, explanation, image, color, link.
- Em `src/App.vue`, usar `v-for` e adicionar `<TrailCard />` em `template`, e `TrailCard` em `components` de `export`.
- Em `public`, criar arquivo `trails.json` com objetos de cards. 
- Gerar imagens para os cards com `https://stability.ai/stable-diffusion`.

![Image-04-Cards](/printscreens/Image-04-Cards.jpg)

9. Adicionar Rotas
- Executar `npm install vue-router` no terminal.
- Em `src` criar `router.js`
- Adicionar router em `src/main.js`.
- Criar pasta `views` em `src`.
- Em `src/views`: criar:
    * `Home.vue` com o código de `App.vue`.
    * `About.vue` com novo código.
- Alterar `App.vue` com `<router-view />` em seu template.


## Referências
Udemy - Vue Samurai: Domine os conceitos do VueJS - Frederico Fortes:
https://www.udemy.com/course/curso-vue-js-vue-samurai-domine-os-conceitos-do-vuejs