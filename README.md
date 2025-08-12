# 🧪💊 Sistema de Farmácia — CRUD API
# FarmaciaGB

> Projeto construído em **NestJS** e **TypeORM**, com foco em boas práticas, validação e organização de código.

## 🚀 Sobre o Projeto
API REST para gerenciamento de produtos e categorias de uma farmácia.  
Possui CRUD completo, validação de dados, e implementação de autenticação com **bcrypt** e **JWT**.

### ✨ Funcionalidades
- CRUD de **Produtos**
- CRUD de **Categorias**
- Relacionamento entre `Produto` e `Categoria`



## 📂 Estrutura do Projeto
```plaintext
src/
 ├── auth/
 │    ├── bcrypt/
 │    │    └── bcrypt.ts
 │    ├── constants/
 │    │    └── constants.ts
 │    ├── controller/
 │    │    └── auth.controller.ts
 │    ├── entities/
 │    │    └── usuariologin.entity.ts
 │    ├── guard/
 │    │    ├── jwt-auth.guard.ts
 │    │    └── local-auth.guard.ts
 │    ├── services/
 │    │    └── auth.service.ts
 │    ├── strategy/
 │    │    ├── jwt.strategy.ts
 │    │    ├── local.strategy.ts
 │    │    └── auth.module.ts
 ├── categoria/
 │    ├── controllers/
 │    │    └── categoria.controller.ts
 │    ├── entities/
 │    │    └── categoria.entity.ts
 │    ├── services/
 │    │    └── categoria.service.ts
 │    └── categoria.module.ts
 ├── produto/
 │    ├── controller/
 │    │    └── produto.controller.ts
 │    ├── entities/
 │    │    └── produto.entity.ts
 │    ├── services/
 │    │    └── produto.service.ts
 │    └── produto.module.ts
 ├── usuario/
 │    ├── controller/
 │    │    └── usuario.controller.ts
 │    ├── entities/
 │    │    └── usuario.entity.ts
 │    ├── services/
 │    │    └── usuario.service.ts
 │    └── usuario.module.ts
 ├── app.controller.ts
 ├── app.module.ts
 ├── app.service.ts
 └── main.ts
```

## Exemplos de Requisição
Criar Produto
```
{
	"nome":"Paracetamol 250g",
	"preco": 19.99,
	"quantidade": 22,
	"generico":false,
	"dataFabricacao":"2025-03-01",
	"categoria":{
			"id": 1
	},
	"usuario":{
			"id":1
	}
}
```

Criar Categoria 
```
{
	"nome":"Analgésico",
	"descricao":"Um medicamento que alivia a dor. Ele age reduzindo ou bloqueando a percepção da dor pelo sistema nervoso, sem necessariamente tratar a causa da dor."
}
```

Criar Usuario
```
{
	"nome": "Administrador",
	"usuario": "admin@email.com.br",
	"senha": "123456789",
	"foto": "https://i.imgur.com/JR7kUFU.jpg"
}
```

## Tecnologias Utilizadas
- NestJS
- TypeORM
- Class-validator
- bcrypt
- JWT

## Como Rodar o projeto
```
# Clonar repositório
git clone https://github.com/Matheus97px/projeto_final_bloco_02.git

# Entrar na pasta
cd nome-do-repo

# Instalar dependências
npm install

# Rodar o servidor em dev
npm run start:dev

# git checkout para entrar na branch desejada
```

### Branches Disponíveis
- 01_configurando_projeto
- 02_crud_categoria
- 03_crud_produto
- 04_auth_usuario

### Contato

 [Linkedin](https://www.linkedin.com/in/matheuspx97/)

E-mail: matheus97p.q@gmail.com