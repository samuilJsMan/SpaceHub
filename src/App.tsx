import { Header } from "./components/layout/header.tsx";
import { Footer } from "./components/layout/footer.tsx";
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
