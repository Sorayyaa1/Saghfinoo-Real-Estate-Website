import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Layout from './Component/Patial/Layout'
import RentPage from './Pages/RentPage/RentPage'
import HomeDetails from './Pages/HomeDetails/HomeDetails'
import PropertyNotFound from './Component/UI/PropertyNotFound'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='rent' element={<RentPage />} />
            <Route path='rent/:HomeId' element={<HomeDetails />} />
            <Route path='rent/propertyNotFond' element={<PropertyNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
