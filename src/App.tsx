import { Header } from "./components/header.tsx";
import { Footer } from "./components/footer.tsx";
type AppProps = {
  children: React.ReactNode
}

function App({ children }: AppProps) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default App
