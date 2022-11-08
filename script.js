const { createApp } = Vue;

createApp({
	data() {
		return {
			on: false,
			message: "Looper VueTv!",
			channels: [
				"https://i.gifer.com/2of.gif",
				"https://i.gifer.com/NHBl.gif",
				"https://i.gifer.com/9dDE.gif",
			],
			visible: 0,
		};
	},
	methods: {
		onOff() {
			this.on = !this.on;
		},
		next() {
			if (this.visible >= this.channels.length - 1) {
				this.visible = 0;
			} else {
				this.visible++;
			}
		},
		prev() {
			if (this.visible <= 0) {
				this.visible = this.channels.length - 1;
			} else {
				this.visible--;
			}
		},
	},
}).mount("#app");
