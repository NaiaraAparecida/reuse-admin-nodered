# ♻️ ReUse – Painel Administrativo (Node-RED)

Este repositório contém o **painel administrativo e backend** do projeto **ReUse!**, desenvolvido em **Node-RED**, com **Node-RED Dashboard** como interface de administração e endpoints REST para integração com o aplicativo **ReUse Mobile** e, futuramente, o **ReUse Web**.

---

## 🧭 Visão geral

O **ReUse Admin** é o núcleo de controle da plataforma:
- Oferece **API REST** (`/api/config`, `/api/items`, `/api/trades`, etc.).
- Disponibiliza um **painel visual** para administradores ajustarem parâmetros do sistema.
- Gerencia **auditoria**, **feature flags**, **limites de imagens**, **banner dinâmico**, entre outros.
- Emite atualizações em **tempo real via WebSocket** (`/ws/config`).
- É executado em **Docker**, podendo ser integrado com os módulos *mobile* e *web*.

---

## 🧩 Estrutura atual

reuse-admin-nodered/
├─ data/
│ ├─ reuse_config.json # Configuração ativa do sistema
│ ├─ reuse_audit.jsonl # Log de auditoria
│ └─ outros arquivos gerados em runtime
│
├─ reuse-admin-nodered-main/ # Projeto Node-RED com flows e dashboard
│ ├─ flows.json # Flows principais (API + Backoffice)
│ ├─ package.json # Dependências Node-RED
│ ├─ settings.js # Configurações internas (opcional)
│ ├─ Dockerfile # Imagem base Node-RED personalizada
│ └─ docker-compose.yml # Subida local
│
├─ .env # Variáveis de ambiente (não subir)
├─ .gitignore
└─ README.md # Este arquivo



---

## 🚀 Funcionalidades principais

### 🔧 API REST
| Endpoint | Método | Descrição |
|-----------|---------|------------|
| `/api/config` | GET / PUT | Lê e salva as configurações do sistema |
| `/api/items` | GET / POST | Gerencia os itens disponíveis para troca/doação |
| `/api/trades` | GET / POST / PATCH | Controla as transações entre usuários |
| `/api/admin/items/:id/archive` | POST | Arquiva item (admin) |

### 🌐 WebSocket
| Path | Evento | Descrição |
|------|---------|------------|
| `/ws/config` | `config-updated` | Notifica mobile/web quando o admin altera configurações |

### 🧱 Painel Administrativo (Dashboard)
- **Feature Flags** → Ativa/Desativa funcionalidades (Trocas, Push, Manutenção).  
- **Parâmetros** → Define “Máx. imagens” e texto de Banner.  
- **Ações** → Carregar / Salvar / Recarregar App.  
- **Status** → Mostra última atualização e últimas 5 auditorias.  
- **Tema ReUse** → Interface verde (#0BAF6A) com layout 2 colunas.

---

## ⚙️ Variáveis de ambiente

Crie um arquivo `.env` (baseado no `.env.example`):

REUSE_API_BASE_URL=http://localhost:1880

REUSE_ADMIN_TOKEN=changeme


| Variável | Função |
|-----------|--------|
| `REUSE_API_BASE_URL` | URL base para acessar a API (ex: durante testes locais) |
| `REUSE_ADMIN_TOKEN` | Token usado para autenticação admin nas rotas protegidas |

---

## 🐳 Como executar localmente (Docker)

```bash
docker compose up -d
```

Depois, acesse:

Painel: http://localhost:1880/ui

API: http://localhost:1880/api/config

Use o token configurado no .env para acessar endpoints protegidos (Authorization: Bearer ...).

---

## 🧰 Como abrir o projeto no Node-RED

Inicie o container (docker compose up).

Acesse http://localhost:1880
.

Vá até a aba ReUse Backoffice v2 (UX) para editar o painel.

Vá até ReUse API para ajustar endpoints REST.

Qualquer ajuste → clique em Deploy no canto superior direito.

---

## 🍃 Tema ReUse (Dashboard)

| **Elemento** | **Cor** |
|:--------------|:--------|
| Primary | `#0BAF6A` |
| Page background | `#f5f7f9` |
| Group background | `#ffffff` |
| Group text | `#0BAF6A` |
| Widget background | branco *(default)* |

---

### 📐 Layout recomendado

| **Grupo** | **Largura** |
|:-----------|:------------:|
| Feature Flags | 6 |
| Parâmetros | 6 |
| Ações | 12 |
| Status | 12 |
---

## 🧠 Boas práticas e versionamento
## 📦 Git

Mantenha node-red-data/, data/, e node_modules/ no .gitignore.

Nunca comite .env ou *.cred.json.

Sempre faça commit e push após alterações relevantes nos flows:

```bash
git add .
git commit -m "feat: ajustes no painel e API"
git push
```

---

## 🔄 Deploy

Durante o desenvolvimento:

O botão Deploy no Node-RED já aplica localmente.

Para publicar em produção, basta:

```bash
docker compose down
git pull origin main
docker compose up -d --build
```

---

🧾 Auditoria

Todas as alterações de configuração são registradas em data/reuse_audit.jsonl.

O painel exibe as 5 últimas alterações (atualização automática a cada 30s).

---
## 🤝 Contribuindo

Contribuições são bem-vindas!
Abra uma issue ou envie um pull request com suas melhorias.

---

## 📬 Contato

LinkedIn: www.linkedin.com/in/naiara-cruz

Email: naiaraaparecida95@gmail.com

Portfólio: https://portfolio-site-naiara.netlify.app/

---

## 🧠 Autoria

Desenvolvido por:

👩‍💻 Naiara Aparecida da Silva Cruz

💼 Desenvolvedora Front-End & UX/UI Designer

🏫 FIAP — Startup 2025

