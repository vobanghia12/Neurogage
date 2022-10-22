import axios from "axios";

const URL = "http://localhost:5000";

const config = {
    withCredentials: true,
    baseURL: URL
};

export const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/users", config)
            .then((r) => setUsers(r.data.users));
    }, []);

    return users;
}