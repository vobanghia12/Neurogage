import CurrentUser from "./currentUser";
import { useUsers, useSessions, useEvents } from "./hooks/api.hooks";
import  CurrentEvent from "./events.js";
function AdminUI(){
    const users = useUsers();
    const sessions = useSessions();
    const events = useEvents();
    return (
        <>
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
            <div class = "overall">{
            events.map((u, i) => {
                return (
                    <CurrentEvent key ={i} timestamp = {u.timeStamp} description = {u.description} />
                )
            })
        }</div>
        </>
    );
}
export default AdminUI