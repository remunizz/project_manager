# project_manager

## Construção
1. Instalar [Node.js](http://nodejs.org/)
2. instalar [Mongodb](https://www.mongodb.org/)
2. Clonar repositório
3. Ir para o diretório "project_manager"
5. `npm install`

## Acesso
1. Ir para o diretório "project_manager"
2. Iniciar Mongodb `mongod`
3. `node app.js`
4. Iniciar seu navegador
5. Ir para o caminho "http://localhost:3000"

## Como criar usuários para login?
1. Iniciar mongo por shell `mongo`
2. Ir para project_manager `use project_manager`
3. Inserir usuario `db.usuarios.insert({nome : "Meu Nome", email : "meuemail@email.com", senha: "Minha senha"});`
4. Testar
