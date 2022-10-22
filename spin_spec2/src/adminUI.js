import CurrentUser from "./currentUser";
import { useUsers } from "./hooks/api.hooks";

function AdminUI(){
    const users = useUsers();
    return (
        <>
            <h1 className="dashboard-title">
                Vitals Viewer 22233
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
        </>
    );
}
export default AdminUI