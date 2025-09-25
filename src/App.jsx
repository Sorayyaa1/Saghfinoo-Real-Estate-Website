import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Layout from './Component/Patial/Layout'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
