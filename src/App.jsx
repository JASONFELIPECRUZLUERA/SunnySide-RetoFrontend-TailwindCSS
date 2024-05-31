import { Main } from './Components/Main'
import { Header } from './Components/Header'
import { About } from './Components/About'
import { TestimonialContainer } from './Components/TestimonialContainer'
import { Gallery } from './Components/Gallery'
import { Footer } from './Components/Footer'

function App() {


  return (

      <main className='max-w-[1440px] mx-auto relative'>
      <Header />
      <Main />
      <About />
      <TestimonialContainer />
      <Gallery />
      <Footer />
    </main>

  )
}

export default App
