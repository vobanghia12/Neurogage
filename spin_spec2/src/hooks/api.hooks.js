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

// refetches the data every second
export const useMetrics = (user) => {
    const [heartrate, setHeartrate] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(`/metrics/${user}`, config)
                .then((r) => setHeartrate(r.data.heartRate));
        }, 1000);

        return () => clearInterval(interval);
    }, [user]);

    return heartrate;
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

export async function createSession(userId, baseline, name, location, lighting, sound, notes) {
    return axios.post("/sessions", { userId, baseline, name, location, lighting, sound, notes }, config);
}

export async function createEvent(userId, eventId, description) {
    return axios.post("/sessions", { userId, eventId, description }, config);
}