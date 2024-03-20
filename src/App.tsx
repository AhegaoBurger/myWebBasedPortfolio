// import './App.css'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Mail, File, Github, Linkedin } from "lucide-react"


function App() {

  return (
    <>
      <div className='min-h-full flex flex-col items-center justify-center'>
        <Avatar className='size-60 m-8 top-2'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl">Artur Shirokov</h1>
        <h3 className="scroll-m-20 text-2xl font-normal tracking-tight">Software Developer</h3>
        <div className='flex flex-col items-center mt-4 space-y-3'>
          <a href="mailto:artur.wiseman@proton.me">
            <Button variant="default">
              <Mail className="mr-2 h-4 w-4" /> artur.wiseman@proton.me
            </Button>
          </a>
          <a href="https://amethyst-node-d29.notion.site/Artur-Shirokov-56f2b434c3de4a5ea60bf87d8461d7bd">
            <Button>
              <File className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </a>
        </div>
        <footer className='absolute bottom-5 flex space-x-2'>
          <a href="https://github.com/AhegaoBurger">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/artur-shirokov-9b9454252/">
            <Linkedin />
          </a>
        </footer>
      </div>
    </>
  )
}

export default App
