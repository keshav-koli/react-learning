import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './root'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import User from './components/User'
import Github, { githubData } from './components/Github'

// ? 1 method for routing 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [{
//       path: '',
//       element: <Home />
//     },
//     {
//       path: 'about',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     },
//     ]
//   },
// ])
// ? Second method for routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route path='github' element={<Github />}  loader={githubData}/>
    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router}>
    </RouterProvider> */}
  </StrictMode>,
)
