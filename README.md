# ♻️ ReUse – Painel Administrativo (Node-RED)

Este repositório contém o **painel administrativo e backend** do projeto **ReUse!**, desenvolvido em **Node-RED**, com **Node-RED Dashboard** como interface de administração e endpoints REST para integração com o aplicativo **ReUse Mobile** e, futuramente, o **ReUse Web**.

---

## ☁️ Deploy
- **Painel Node-RED:** http://localhost:1880 *(ou instância configurada)*
- **Repositório Principal:** https://github.com/NaiaraAparecida/reuse

---

## ✨ Recursos
- Painel visual em **Node-RED** para administração e monitoramento  
- **Autenticação e controle de tokens** para APIs  
- **Integração com backend e banco de dados** do ReUse  
- Fluxos de **cadastro, aprovação e status de itens**  
- **Monitoramento em tempo real** de atividades da plataforma  
- Sistema **low-code**, simples de escalar e manter  

---

## 🛠 Tecnologias
- **Node-RED**  
- **JavaScript (flows)**  
- **Docker Compose** *(opcional)*  
- **JSON APIs**  
- **Dashboard Node-RED UI**  

---

## 📂 Estrutura do Projeto

reuse-admin-nodered/

├── flows.json # Fluxos principais do Node-RED

├── docker-compose.yml # Configuração opcional de container

├── .env # Variáveis de ambiente

├── README.md

└── package.json


---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/NaiaraAparecida/reuse-admin-nodered.git

# Acesse a pasta
cd reuse-admin-nodered

# Instale dependências (se necessário)
npm install

# Inicie o Node-RED
npx node-red
```
Acesse o painel no navegador:
🔗 http://localhost:1880

---

## 🧩 Integração com o Ecossistema ReUse

| Projeto | Repositório | Descrição |
|-----------|--------|--------|
| ♻️ ReUse Mobile	 | [reuse](https://github.com/NaiaraAparecida/reuse) | Aplicativo principal (React Native + Expo) |
| 🧭 ReUse Admin | [reuse-admin-nodered](https://github.com/NaiaraAparecida/reuse-admin-nodered)| Painel administrativo em Node-RED |
	
---

## 🧱 Roadmap

 - [x] Estrutura inicial de fluxos e painéis

 - [x] Autenticação e variáveis de ambiente (.env)

 - [x] Integração com APIs ReUse

 - [ ] Logs e dashboards analíticos

 - [ ] Controle de permissões e usuários

 - [ ] Deploy com Docker e monitoramento remoto

---

## 🎨 Design e Filosofia

- Interface visual e intuitiva via Node-RED Dashboard

- Configuração sem código para fluxos complexos

- Arquitetura modular e sustentável

- Foco em eficiência, clareza e escalabilidade

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
