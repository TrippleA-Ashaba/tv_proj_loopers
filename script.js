const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Hello Vue!",
		};
	},
	methods: {
		tvon() {
			return this.tvon;
		},
		tvoff() {
			return this.tvoff;
		},
		tvnext() {
			return this.tvnext;
		},
		tvprevsion() {
			return this.tvprevsion;
		},
	},
}).mount("#app");
