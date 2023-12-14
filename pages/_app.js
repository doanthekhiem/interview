import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter } from "next/font/google";
import Layout from "../components/layout/layout";
import "./../app/globals.css";

const inter = Inter({ subsets: ["vietnamese"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="891054951439-ke1btjjsh05sschhtdvd72t8g9kumsll.apps.googleusercontent.com">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleOAuthProvider>
    </div>
  );
}