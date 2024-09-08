import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance" 
import { Users } from "../components/Users"
import { useSearchParams } from "react-router-dom"


export const Dashboard = () => {
  const [searchParams] = useSearchParams();

  // Get a specific query parameter
  const userId = searchParams.get("id");
  const userName = searchParams.get("name");

    return (
      <div>
      <Appbar username={userName}/>
        <div className="m-8">
            <Balance />
            <Users />
        </div>
    </div>
  )
}