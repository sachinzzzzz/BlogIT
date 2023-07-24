import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import User from "@/models/user"
import bcryptjs from "bcryptjs"
import connect from "@/utils/db"

const handler = NextAuth({
   
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connect()

        try{

          const user = await User.findOne({email:credentials.email})

          if(user){
            //check pass

            const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password );
            if(isPasswordCorrect){
              // console.log("s")
              return user
            }else{
              throw new Error("Wrong Credentials!")
            }
          }else{
            throw new Error("user not Found")
          }
        }catch(err){
          throw new Error(err) 
        }
      }
    })
  ],
  pages:{
    error:"/dashboard/loading"
  }
})

export {handler as GET, handler as POST}