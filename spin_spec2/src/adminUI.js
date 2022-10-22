import "./overall-layout.css"
import CurrentUser from "./currentUser";
import { useUsers, useSessions, useEvents} from "./hooks/api.hooks";
function AdminUI(){
    const users = useUsers();
    const sessions = useSessions();
    const event = useEvents()

    return (
    <div class = "overall">
        {users.map((user,i) => {
            return (
                <CurrentUser 
                    key={i}
                    name={user.name}
                />
            );
        })}
    </div>
  

    );
}
export default AdminUI