// Importa o framework Express
import express from 'express';
// Importa o Prisma Client para interagir com o banco de dados
import { PrismaClient } from '@prisma/client';

// Inicia uma instância do Express
const app = express();
// Inicia uma instância do Prisma Client
const prisma = new PrismaClient();

// Adiciona um middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// ROTA DE TESTE: GET /users
// O objetivo desta rota é buscar todos os usuários no banco de dados e retorná-los.
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar usuários.' });
  }
});


// Define a porta em que o servidor irá rodar
const port = 3333;

// Inicia o servidor e o faz "escutar" por requisições na porta definida
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}!`);
});
