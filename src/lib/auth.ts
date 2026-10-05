import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from "resend";
const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db('bangla-news-24');
const resend = new Resend(process.env.RESEND_API_KEY);
export const auth = betterAuth({
emailAndPassword: { 
    enabled: true,
    requireEmailVerification: true, // Optional: require email verification for sign-up
    sendResetPassword: async({user,url,token},request) => {
      void resend.emails.send({
        from:'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: "Reset your password",
        html: `Click the link to reset your password: ${url}`,
      })
    }
  },
    emailVerification:{
    sendVerificationEmail: async({user,url})=> {
      void resend.emails.send({
        from:'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: 'Verify your email address',
                html: `Click the link to verify your email: ${url}`
      })
    },
    sendOnSignUp: true,
		autoSignInAfterVerification: true,
		expiresIn: 7*24*3600 //  7days 

  },
 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_oAUTH_CLIENT_SECRET as string, 
        },
        github: { 
            clientId: process.env.GITHUB_OAUTH_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET as string, 
        }, 
    },
  database: mongodbAdapter(db, {
    client,
  }),
});