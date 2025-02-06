import Content from './component/Content'
import Footer from './component/Footer'
import Header from './component/Header'
import './App.css'

function App() {
 

  return (
    <>
    <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
      
    </>
  )
}

export default App
