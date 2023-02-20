import { FirestoreProvider } from "@/context/firestoreStore"
import { AlertProvider } from "@/context/alertContext";
import { CssBaseline, CssVarsProvider } from "@mui/joy"
import '@fontsource/public-sans';

export default function App({ Component, pageProps }) {
  return (
    <CssVarsProvider>
      <CssBaseline />
        <FirestoreProvider>
          <AlertProvider>
    <Component {...pageProps} />
          </AlertProvider>
    </FirestoreProvider>
      </CssVarsProvider>
  )
}
