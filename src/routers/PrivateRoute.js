import  {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
 
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if(loading){
    return <div className='flex justify-center mt-80'>
      <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  }

  if(user){
    return children;
  }

  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;