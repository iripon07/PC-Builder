import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Provider>
      {
        <SessionProvider session={session}>{getLayout(<Component{...pageProps} />)}</SessionProvider>
      }
    </Provider>
  );
}


