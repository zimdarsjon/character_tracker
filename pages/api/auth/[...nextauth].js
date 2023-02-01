import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default NextAuth({
  session: { strategy: 'jwt'},
  providers: [CredentialsProvider({
    type: 'credentials',
    credentials: {},
    async authorize(credentials, req) {
      const { username, password } = credentials;
      const user = prisma.User.findUnique({ where: { username } });
      if (!user) throw new Error ('Username does not exist');
      const matchPwd = await bcrypt.compare(password, user.password);
      if (!matchPwd) throw new Error ('Invalid password');

    }
  })],
  pages: {
    // May need to switch to signIn
    login: '../../login'
  }
})