import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Layout from './Component/Patial/Layout'
import RentPage from './Pages/RentPage/RentPage'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='rent' element={<RentPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
