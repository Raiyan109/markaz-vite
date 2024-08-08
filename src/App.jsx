import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'


function App() {

  return (
    <div className='max-w-7xl mx-auto container'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
