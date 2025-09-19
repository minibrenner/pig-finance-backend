# 🐷 Pig Finance - Backend

Este é o repositório do backend para o projeto Pig Finance, um aplicativo de finanças pessoais completo. Esta API é responsável por toda a lógica de negócio, autenticação, e comunicação em tempo real.

## 🚀 Visão Geral

O Pig Finance é uma plataforma multi-usuário que permite um controle financeiro detalhado, com funcionalidades inovadoras como o lançamento de despesas via WhatsApp e dashboards interativos.

### ✨ Funcionalidades Principais

-   **Autenticação & Multi-Usuário:** Sistema de login, perfis, e convites para gerenciamento compartilhado.
-   **Dashboard Mensal:** Visualização rápida de saldos, receitas, despesas e status de pagamentos.
-   **Gestão Completa:** Cadastro de contas, cartões, extratos, metas (cofrinhos) e transferências.
-   **Lançamento por WhatsApp:** Envio de mensagens ou fotos de notas fiscais para registro rápido.
-   **Comunicação em Tempo Real:** Atualizações instantâneas na interface graças ao Socket.IO.
-   **Integração com Web e Mobile:** API central para servir tanto a plataforma web quanto o aplicativo móvel.

## 🛠️ Tecnologias Utilizadas

-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Comunicação Real-time:** Socket.IO
-   **Banco de Dados:** PostgreSQL
-   **ORM:** Prisma
-   **Containerização:** Docker

## 🏁 Como Rodar o Projeto Localmente

Siga os passos abaixo para ter o ambiente de desenvolvimento do backend rodando na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPO_BACKEND>
    cd pig-finance-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o Banco de Dados com Docker:**
    * Certifique-se que o Docker Desktop está rodando.
    * (Instrução futura: criar um `docker-compose.yml` para subir o PostreSQL).
    ```bash
    docker-compose up -d
    ```

4.  **Configure as variáveis de ambiente:**
    * Renomeie o arquivo `.env.example` para `.env`.
    * Preencha as variáveis, principalmente a `DATABASE_URL`.

5.  **Rode as migrations do Prisma:**
    ```bash
    npx prisma migrate dev
    ```

6.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

O servidor estará rodando em `http://localhost:3333`.

---

_**Dica:**_ Copie e adapte este mesmo `README` para os outros repositórios, alterando a descrição e, principalmente, a seção "Tecnologias Utilizadas" e "Como Rodar" para refletir as especificidades do frontend (React) e do mobile (React Native/Expo)._

---

#### **2. Criar Templates de Issue**

Isso padroniza a forma como bugs são reportados e novas funcionalidades são solicitadas.

**Ação:** No seu repositório `pig-finance-backend`, crie a seguinte estrutura de pastas e arquivos:

1.  Crie uma pasta chamada `.github` na raiz do projeto.
2.  Dentro de `.github`, crie outra pasta chamada `ISSUE_TEMPLATE`.
3.  Dentro de `ISSUE_TEMPLATE`, crie os dois arquivos abaixo:

**Arquivo 1: `bug_report.md`**
```yaml
---
name: 🐞 Relatório de Bug
about: Crie um relatório para nos ajudar a melhorar
title: "[BUG] - "
labels: bug
assignees: ''

---

**Descreva o bug**
Uma descrição clara e concisa do que é o bug.

**Como reproduzir**
Passos para reproduzir o comportamento:
1. Vá para '...'
2. Clique em '....'
3. Role até '....'
4. Veja o erro

**Comportamento esperado**
Uma descrição clara e concisa do que você esperava que acontecesse.

**Screenshots (se aplicável)**
Se possível, adicione screenshots para ajudar a explicar o seu problema.

**Ambiente:**
 - OS: [ex: Windows 11, Ubuntu 22.04]
 - Versão do Node [ex: 18.18.0]
