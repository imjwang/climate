import { FirestoreProvider } from "@/context/firestoreStore"
import { CssBaseline, CssVarsProvider } from "@mui/joy"
import '@fontsource/public-sans';

export default function App({ Component, pageProps }) {
  return (
    <CssVarsProvider>
      <CssBaseline />
        <FirestoreProvider>
    <Component {...pageProps} />
    </FirestoreProvider>
      </CssVarsProvider>
  )
}
