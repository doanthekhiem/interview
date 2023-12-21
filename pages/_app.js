import { ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter } from "next/font/google";
import Head from "next/head";
import MuiThemeConfig from "../mui.config";
import "./../app/globals.css";

const inter = Inter({ subsets: ["vietnamese"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VibrantX</title>
        <meta name="keywords" content="VibrantX" />
        <meta name="description" content="Explore and Earn on Aptos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={MuiThemeConfig}>
        <div className={inter.className}>
          <GoogleOAuthProvider clientId="891054951439-ke1btjjsh05sschhtdvd72t8g9kumsll.apps.googleusercontent.com">
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </div>
      </ThemeProvider>
    </>
  );
}
