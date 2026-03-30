import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic to verify credentials
        console.log(credentials)
        // For example, check against a database
        const user = { id: 1, name: "John Doe", email: credentials.email }
        if (user) {
          return user
        }
        return null
      }
    })
  ],
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}