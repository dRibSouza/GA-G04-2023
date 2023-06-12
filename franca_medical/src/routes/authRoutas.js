const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../components/LoginComponent');


const router = express.Router();

router.post('/register', (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({ email, password });

  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao registrar o usuário' });
    });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res.status(401).json({ error: 'Senha incorreta' });
          }

          // Autenticação bem-sucedida, você pode gerar um token de acesso aqui

          res.status(200).json({ message: 'Autenticação bem-sucedida' });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao fazer login' });
    });
});

module.exports = router;