import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar/"
import { useAuthStore } from "../hooks"



//const authStatus = 'not-authenticated'; //'not-authenticated'


export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  if ( status === 'cheching' ) {
    return (
      <h3>Cargando...</h3>
    )
  }

  useEffect(() => {
    checkAuthToken();
  }, [])
  
  return (
    <Routes>
      {
        (status === 'authenticated')
        ?  (
          <>
            <Route path="/" element={ <CalendarPage/> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/>
          </>
          )
        : (
          <>
            <Route path="/auth/*" element={ <LoginPage/> }/>
            <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
          </>
          )
      }    
    </Routes>
  )
}

