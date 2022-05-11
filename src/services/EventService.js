import axios from "axios";

const apiClient = axios.create({
	baseURL: process.env.VUE_APP_API_BASE_URL,
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default {
	getEvents() {
		return apiClient.get("/events");
	},
	getEvent(id) {
		return apiClient.get(`/events/${id}`);
	},
};
