import prisma from '../../lib/prisma';
//const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await createUser(req, res);
  }
}

const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email) {
    res.status(400).json({ message: 'Missing Email' });
  } else if (!password) {
    res.status(400).json({ message: 'Missing Passowrd' });
  } else if (!username) {
    res.status(400).json({ message: 'Missing Username' })
  } else {
    try {
      const existingUsername = await prisma.User.findUnique({ where: { username } });
      if (existingUsername) {
        res.status(400).json({ message: 'Username already taken' })
        return
      }
      const existingEmail = await prisma.User.findUnique({ where: { email } });
      if (existingEmail) {
        res.status(400).json({ message: 'Email already taken' })
        return
      }
      const hashPwd = await bcrypt.hash(password, 10);
      const data = { email, username, password: hashPwd };
      await prisma.User.create({data});
      res.send(201);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({message: 'Error creating user'});
    }
  }
}