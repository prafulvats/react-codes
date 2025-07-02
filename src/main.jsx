import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AccordionCompo from './AccordionCompo'
import About from './About'
import Error from './Error'
import Header from './Header'
import Footer from './Footer'
// import ContactUs from './ContactUs'
import RestCard from './RestCard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { appStore } from './utils/appStore'
import Shopping from './Shopping'
import Demo from './Demo'
const ContactUs = lazy(() => import ('./ContactUs'))

const appRouter = createBrowserRouter ([
  {
    path: '/',
    element: <AccordionCompo />,
    errorElement: <Error />,
    children: [{
      path:'/Header',
      element: <Header />
    },
    {
      path: '/Footer',
      element: <Footer />
    }]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: 'contact-us',
    element: <Suspense fallback={<>Loading...</>}><ContactUs /></Suspense>,
    // element: <ContactUs />
  },
  {
    path: '/rest/:restId',
    element: <RestCard />
  },
  {
    path: 'shopping',
    element: <Shopping />
  },
  {
    path: 'demo',
    element: <Demo />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore} >
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
