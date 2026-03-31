import { collections, dbConnect } from "@/lib/dbConnect";
import { compare } from "bcryptjs";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        // Add logic to verify credentials
        const {email,password} = credentials;
        if(!email || !password){
          return null;
        }
        const user = await (await dbConnect(collections.USERS)).findOne({email});
        if (!user) {
          return null;
        }
        if(!user.password){
          return null;
        }
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
          return null;
        }
        return user
      }
    })
  ],
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}