import { FirestoreProvider } from "@/context/firestoreStore"

export default function App({ Component, pageProps }) {
  return (
    <FirestoreProvider>
      <Component {...pageProps} />
    </FirestoreProvider>
  )
}
