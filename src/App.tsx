import { Link, Outlet} from 'react-router-dom';

function App() {
  

  return (
    <>
      <nav>
        
        <Link to="/home"/>
        <Link to="/login"/>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
