import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from './components/ui/button';
import './App.css'
import { CarouselDemo } from './components/demo/CarouselDemo';
import { SharePost } from './components/ui/sharePost';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>Hello,</Button>
      <CarouselDemo></CarouselDemo>
      <SharePost></SharePost>
    </>
  )
}

export default App
