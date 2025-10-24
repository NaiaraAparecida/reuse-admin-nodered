# ReUse Admin (Node-RED) – Starter

Painel administrativo low-code para controlar *feature flags* e parâmetros operacionais da ReUse.
Inclui UI em Node-RED Dashboard, integração via HTTP com as APIs (`GET/PUT/POST /admin/config`),
e auditoria local (`data/reuse_audit.jsonl`).

## 1) Pré-requisitos

- Docker e Docker Compose **ou** Node.js 18+ (para rodar localmente sem Docker)
- Token de admin para sua API (`REUSE_ADMIN_TOKEN`)
- Endpoint base da API (`REUSE_API_BASE_URL`), ex.: `https://api.reuse.app`

## 2) Rodando com Docker (recomendado)

```bash
# 2.1. configure variáveis
cp .env.example .env
# edite .env e preencha REUSE_API_BASE_URL e REUSE_ADMIN_TOKEN

# 2.2. build + up
docker compose up -d --build

# 2.3. acesse
# Editor/Dashboard: http://localhost:1880/ui  (tab "ReUse – Admin")
```

> **Segurança:** coloque o serviço atrás de um reverse proxy (Nginx/Caddy) com auth básica
ou configure `adminAuth` no `settings.js`.

## 3) Rodando local (sem Docker)

```bash
# 3.1. instale Node-RED e palette de dashboard
npm i -g --unsafe-perm node-red
cd ~/.node-red
npm i node-red-dashboard

# 3.2. copie flows.json e settings.js para sua pasta de dados do Node-RED
# (ou use diretamente deste projeto e execute node-red apontando para /data)

# 3.3. exporte as variáveis no terminal (exemplo Linux/macOS)
export REUSE_API_BASE_URL="https://api.reuse.app"
export REUSE_ADMIN_TOKEN="seu_token"

# 3.4. iniciar
node-red
# abra http://localhost:1880  (editor) e http://localhost:1881/ui (dashboard)
```

## 4) Fluxo incluído

- **Carregar**: GET `/admin/config` → popula UI
- **Salvar**: PUT `/admin/config` → persiste e grava auditoria em `data/reuse_audit.jsonl`
- **Invalidar cache**: POST `/admin/config/invalidate` → avisa apps a recarregarem config (opcional)

Campos:
- `enableTrades` (switch)
- `enablePushNotifications` (switch)
- `maintenanceMode` (switch)
- `maxImagesPerItem` (número)
- `bannerText` (texto curto)

## 5) Backend (API) – contrato esperado

```json
{
  "enableTrades": true,
  "enablePushNotifications": true,
  "maintenanceMode": false,
  "maxImagesPerItem": 5,
  "bannerText": "Bem-vindo(a) à ReUse!"
}
```

Endpoints:
- `GET /admin/config`
- `PUT /admin/config`
- `POST /admin/config/invalidate` (opcional)

## 6) Dicas de produção

- Proteja com auth (reverse proxy ou `adminAuth`)
- Faça backup do volume `nodered_data`
- Observabilidade: colete logs e o arquivo `data/reuse_audit.jsonl`
- Versione `flows.json` e promova via CI/CD