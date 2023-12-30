
import HomePage from './pages/HomePage/HomePage.jsx'
import {Route,Routes,Router, Navigate} from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage' ;
import PageLayout from './Layouts/PageLayout/PageLayout.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import {auth } from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {
  const [authUser,loading] = useAuthState(auth);
  
  return (
      <PageLayout>
        <Routes>
          <Route path='/' element={authUser ?  <HomePage /> :<Navigate to='/auth' />} />
          <Route path='/auth' element={!authUser  ? <AuthPage/> : <Navigate to='/' />} />
          <Route path='/:username' element={<ProfilePage />} />
        </Routes>
      </PageLayout>
      
  )
}

export default App;
