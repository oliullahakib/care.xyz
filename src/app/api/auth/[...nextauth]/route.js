import { collections, dbConnect } from "@/lib/dbConnect";
import { compare } from "bcryptjs";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        // Add logic to verify credentials
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const user = await (await dbConnect(collections.USERS)).findOne({ email });
        if (!user) {
          return null;
        }
        if (!user.password) {
          return null;
        }
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
          return null;
        }
        return user
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === 'google') {
        const db = await dbConnect(collections.USERS);
        const userExist = await db.findOne({ email: user.email });
        if (!userExist) {
          const newUser = {
            name: user.name,
            email: user.email,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            role: 'user'
          }
          await db.insertOne(newUser);
        }
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token, user }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }