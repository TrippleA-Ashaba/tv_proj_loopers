const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Looper VueTV!",
		};
	},
	methods: {
		tvOn() {},
		tvOff() {},
	},
}).mount("#app");
