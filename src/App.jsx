import { useAuth } from "./hooks/use-auth"
import Route from "./router/Route"
import Loading from "./component/Loading";
function App() {
  const {initialLoading} = useAuth();//hook useContext
  if(initialLoading)return(
    <Loading/>
  );

  return <Route/>

  
}

export default App
