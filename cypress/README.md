# QA Automation Project

Projeto de automação de testes desenvolvido com Cypress, utilizando arquitetura Page Object Model (POM), testes E2E, testes de API e integração contínua com GitHub Actions.

---

# Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome Report
- GitHub Actions
- Git/GitHub

---

# Funcionalidades

- Automação E2E
- Testes de API com `cy.request()`
- Estrutura Page Object Model (POM)
- Relatórios automáticos com Mochawesome
- Integração contínua (CI/CD)
- Execução automática dos testes via GitHub Actions

---

# Estrutura do Projeto

```bash
cypress
 ├── e2e
 │    ├── login.cy.js
 │    ├── cart.cy.js
 │    ├── checkout-validation.cy.js
 │    └── api.cy.js
 │
 ├── pages
 │    ├── LoginPage.js
 │    ├── InventoryPage.js
 │    └── CheckoutPage.js
 │
 └── reports
```

---

# Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

---

## Abrir Cypress em modo visual

```bash
npx cypress open
```

---

## Rodar testes em modo headless

```bash
npx cypress run
```

---

# Relatórios

Após executar os testes em modo headless:

```bash
npx cypress run
```

será gerado um relatório Mochawesome em:

```bash
cypress/reports/mochawesome.html
```

---

# Pipeline CI/CD

O projeto possui integração contínua utilizando GitHub Actions.

A cada `git push`, os testes são executados automaticamente em ambiente Linux.

---

# Cenários Automatizados

## Login
- Login válido
- Login inválido

## Carrinho
- Adicionar produto ao carrinho
- Validar itens adicionados

## Checkout
- Campos obrigatórios
- CEP obrigatório
- Fluxo de compra válido

## API
- Validação de status code
- Validação de response body

---

# Autor

Lucas Rodrigues