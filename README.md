# Cypress - WebJump
# Requisitos para configurar e executar esse projeto:

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Cypress] - framework de testes automatizados


## 👨🏻‍💻 Como executar o projeto

1 - Ter instalado o [Node.js](https://nodejs.org/) v16 ou superior para executar;

2 - Clonar o repositório;

Execute os comandos abaixo para instalar das dependências do projeto e execução dos testes:

```sh
npm install
npx cypress run
```
## 📚 Bibliotecas usadas
[Chance](https://chancejs.com/) v1.1 - gerador de dados aleatórios;

[Cypress-Ifrane](https://www.npmjs.com/package/cypress-iframe) v1.0 - testar Ifrane em Cypress requer código personalizado, esse pacote adiciona suporte a iframe ao Cypress. 

## 🔗 Page Object

Com a finalidade de facilidade na leitura e entendimento dos testes, fazer reuso de código e facilitar as mudanças foi adotado alguns conceitos do padrão Page Object.

1 - Arquivo HomePage.js(\cypress\pages\HomePage.js): Conjunto de interações com a tela Home;

2 - Arquivo locators.js(\cypress\support\locators.js): Conjunto de localizadores personalizados para encontra e retorna itens/elementos na página da Web.
