<h1 align="center">Home Broker</h1>

<p align="center">
  <img alt="Full Stack immerion - Full Cycle" src=".github/banner.PNG" width="100%">
</p>

## Project

A Home Broker with real-time updates and that uses a B3 simulator.

## Features

- Real-time chart update with Web Socket;
- Processing of buy and sell orders with Go;
- Architecture using microservices;

## Technologies/Libraries/Environment

General:

- Windows 10 Home | 22H2
- [Visual Studio Code | 1.98.2](https://code.visualstudio.com/)
- [Insomnia | 10.3.1](https://insomnia.rest/)
- [Postman | 11.34.5](https://www.postman.com/)
- NPM | 10.2.4
- Docker | 26.0.2
- Docker Compose | 2.26.1
- Git | 2.34.1

Back-end (API):

- [Node.JS | 20.18.3](https://nodejs.org/en)
- Nest.JS | 11.10.4
- TypeScript
- Mongoose (MongoDB Connection)
- Websocket | Socket.IO
- Kafka Connection

Database:

- MongoDB | 8.0.3

Front-end (Web application):

- [Node.JS | 20.18.3](https://nodejs.org/en)
- Next.JS
- TypeScript
- Kafka Connection
- Websocket | Socket.IO

Simulador da B3:

- Go | 1.24.1
- Kafka Connection

Tópicos:

- Apache Kafka

## Architecture

<p align="center">
  <img alt="Architecture" src=".github/architecture.PNG" width="100%">
</p>

## Database

<p align="center">
  <img alt="Database" src=".github/" width="100%">
</p>

## Websockets and Change Stream

<p align="center">
  <img alt="Websockets and Change Stream" src=".github/websockets_change-stream.PNG" width="100%">
</p>

## How to run

### Apache Kafka

1. Acesse a pasta do repositório;
2. Acesse a pasta do projeto:
```bash
  cd go
```
3. Execute o comando abaixo para criar e iniciar o container com o Kafka:
```bash
  docker-compose up
```

### Go

1. Acesse a pasta do repositório;
2. Acesse a pasta do projeto:
```bash
  cd go
```
3. Execute o comando abaixo para iniciar o projeto em Go:
```bash
  go run cmd/main/main.go
```

### Database

1. Acesse a pasta do repositório:
2. Execute o comando abaixo para iniciar o container com o banco de dados:
```bash
  docker-compose up
```

### Back-end (API)

1. Acesse a pasta do repositório;
2. Acesse a pasta do projeto:
```bash
  cd nestjs-api
```
3. Execute o comando abaixo para iniciar o projeto em Go:
```bash
  npm run start:dev
```

### Images Server

1. Acesse a pasta do repositório;
2. Acesse a pasta do projeto:
```bash
  cd nestjs-api
```
3. Execute o comando abaixo para iniciar o servidor:
```bash
  npm run asset-images
```

### Back-end (API) - Consumer Kafka

1. Acesse a pasta do repositório;
2. Acesse a pasta do projeto:
```bash
  cd nestjs-api
```
3. Execute o comando abaixo para iniciar o consumidor do Kafka na API:
```bash
  npm run consumer
```

### Front-end (Web Application)

1. Acesse a pasta do repositório;
2. Acesse a pasta do projeto:
```bash
  cd next-frontend
```
3. Execute o comando abaixo para iniciar a aplicação web:
```bash
  npm run dev
```

### Data Generator for the Database

1. Acesse a pasta do repositório;
2. Acesse a pasta do projeto:
```bash
  cd nestjs-api
```
3. Execute o comando abaixo para iniciar a aplicação web:
```bash
  npm run command simulate-assets-price
```

## Improvements

- validação das requests
- validação com websockets
- autenticação na api e no next.js
- user event driven para atualizar o saldo
- separar a finalização da ordem, da atualização do saldo do ativo
- criar event socket para atualizar o saldo do ativo na carteira
- criar um notification no next.js + websocket para mostrar quando uma ordem foi executada
- criar um saldo em reais para carteira
- usar cache do lado servidor para consultar ativos e orders com preço fixo depois do horário de negociação
- evitar que o websocket envie notificações se não houverem clientes
- evitar que usuário não pertencente as orders de se enscrver no websocket de notificações daquela order
- reprocessamento da finalização das orders em caso de falha
- se for venda, verificar se o saldo é suficiente
- testes

## License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.