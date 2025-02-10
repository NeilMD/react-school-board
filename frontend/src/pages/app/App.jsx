import { useState } from 'react'
import {Button} from '@/components/ui/button';
import { CarouselDemo } from '../../components/demo/CarouselDemo';


function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <Button className='w-auto' variant="destructive">Button</Button>
        <CarouselDemo></CarouselDemo>
      </div>
    </>
  )
}

export default App
