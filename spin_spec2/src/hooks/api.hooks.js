import axios from "axios";
import React, { useState, useEffect} from "react";

const URL = "http://localhost:5000";

const config = {
    withCredentials: false,
    baseURL: URL
};

const useData = (route, field) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(route, config)
            .then((r) => setData(r.data[field]));
    }, []);

    return data;
}

export const useUsers = () => {
    return useData("/users", "users");
}

export const useSessions = () => {
    return useData("/sessions", "sessions");
}

export const useEvents = () => {
    return useData("/events", "events");
}