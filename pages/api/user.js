import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  console.log('User Request')
  if (req.method === 'POST') {
    const { email, username, password } = req.body;
    if (!email) {
      res.status(400).json({message: 'Missing Email'});
    } else if (!password) {
      res.status(400).json({message: 'Missing Passowrd'});
    } else if (!username) {
      res.status(400).json({message: 'Missing Username'})
    } else {
      res.send(200);
    }
  } else if (req.method === 'GET') {
    // Handle Login
    res.send(200);
  } else {
    res.send(500);
  }
  //const users = await prisma.User.findMany({});
  //res.send(users);
}