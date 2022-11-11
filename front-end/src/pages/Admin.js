import CurrentUser from "../currentUser";
import { useUsers, useEvents } from "../hooks/api.hooks";
import  CurrentEvent from "../events.js";
import "../app12.css";
import Header from "../components/Header";

function Admin(){
    const users = useUsers();
    const events = useEvents();

    return (
        <>
            <Header/>
            <div className = "admin">
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
        </>
    );
}
export default Admin