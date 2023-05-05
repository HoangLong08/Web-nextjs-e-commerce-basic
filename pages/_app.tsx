import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <main className={`${open_sans.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </PersistGate>
    </Provider>
  );
}
