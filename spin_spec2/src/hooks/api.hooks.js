import axios from "axios";
import React, { useState, useEffect} from "react";

const URL = "http://localhost:5000";

const config = {
    withCredentials: false,
    baseURL: URL
};

const useData = (route, field, init) => {
    const [data, setData] = useState(init);

    console.log(route);

    useEffect(() => {
        axios.get(route, config)
            .then((r) => setData(r.data[field]));
    }, []);

    return data;
}

// refetches the data every second
export const useMetrics = (user) => {
    const [heartrate, setHeartrate] = useState(0);
    const [rates, setRates] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(`/metrics/${user}`, config)
                .then((r) => {
                    setHeartrate(r.data.heartRate);
                    setRates([...rates, r.data.heartRate]);
                });
        }, 1000);

        return () => clearInterval(interval);
    }, [user, rates]);

    return { heartRate: heartrate, rates };
}

// refetches the data every 5 seconds
export const useEmotions = (user) => {
    const [emotions, setEmotions] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(`/metrics/emotions/${user}`, config)
                .then((r) => {
                    console.log("emotions ", r.data.emotions, user);
                    setEmotions(r.data.emotions);
                });
        }, 1000);
        return () => clearInterval(interval);
    }, [user]);

    return emotions ? emotions : {};
}

export const useUsers = () => {
    return useData("/users", "users", []);
}

export const useSessions = () => {
    return useData("/sessions", "sessions", []);
}

export const useEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get("/events", config)
                .then((r) => setEvents(r.data.events));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return events;
}

export const useBaseline = (user) => {
    return useData(`/sessions/baseline/${user}`, "baseline", 0);
}

export async function createSession(userName, baseline, name, location, lighting, sound, notes) {
    return axios.post("/sessions", { userName, baseline, name, location, lighting, sound, notes }, config);
}

export async function createEvent(userId, description) {
    return axios.post("/events", { userId, description }, config);
}

export async function login(username, password) {
    return axios.post("/oauth/signin", { username, password }, config);
}

let times = 0;

export async function setEmotions(userId, emotions) {
    console.log(times);
    times++;
    if (times % 15 !== 0) {
        return;
    }
    console.log(userId);
    return axios.post(`/metrics/emotions/${userId}`, { emotions }, config);
}