import CurrentUser from "./currentUser";
import { useUsers, useSessions, useEvents } from "./hooks/api.hooks";
import  CurrentEvent from "./events.js";

function AdminUI(){
    const users = useUsers();
    const events = useEvents();

    return (
        <div className = "admin-ui">
            <h1 className="dashboard-title">
                Vitals Viewer
            </h1>
            <div className = "overall">
                {users.map((user,i) => {
                    return (
                        <CurrentUser 
                            key={i}
                            id={user._id}
                            name={user.name}
                        />
                    );
                })}
            </div>
            <h1 className="dashboard-title">
                Events Viewer
            </h1>
            {events.map((u, i) => {
                return (
                    <CurrentEvent key ={i} timestamp = {u.timeStamp} description = {u.description} />
                )
            })}
        </div>
    );
}
export default AdminUI