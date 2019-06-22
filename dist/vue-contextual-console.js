/**
 * Vue Contextual Console
 * @author Jonathan Tordesillas <tordesillas.jonathan@gmail.com>
 */

const DefaultOptions = {
	enabled: true,
	colors: {
		primary: "#3490DC",
		secondary: "#9561E2",
		success: "#38C172",
		info: "#BCDEFA",
		caution: "#F6993F",
		danger: "#E3342F",
		warn: "",
		error: "",
	},
};

const VueContextualConsole = {
	install(Vue, UserOptions) {
		const options = { ...DefaultOptions, ...UserOptions };
		const logger = (message, type) => {
			if (options.enabled) {
				switch (type) {
					case "log":
						console.log(message);
						break;
					case "table":
						console.table(message);
						break;
					case "warn":
						console.warn(
							"%c" + message,
							"color:" + options.colors[type]
						);
						break;
					case "error":
						console.error(
							"%c" + message,
							"color:" + options.colors[type]
						);
						break;
					default:
						console.log(
							"%c" + message,
							"color:" + options.colors[type]
						);
				}
			}
		};

		Vue.prototype.$console = {
			log: (message) => logger(message, "log"),
			table: (data) => logger(data, "table"),
			warn: (message) => logger(message, "warn"),
			error: (message) => logger(message, "error"),
			primary: (message) => logger(message, "primary"),
			secondary: (message) => logger(message, "secondary"),
			success: (message) => logger(message, "success"),
			info: (message) => logger(message, "info"),
			caution: (message) => logger(message, "caution"),
			danger: (message) => logger(message, "danger"),
			test: function() {
				this.log("Log");
				this.table([["ID", "Name"], ["1", "Default item."]]);
				this.warn("Warn");
				this.error("Error");
				this.primary("Primary");
				this.secondary("Secondary");
				this.success("Success");
				this.info("Info");
				this.caution("Caution");
				this.danger("Danger");
			},
		};
	},
};

export default VueContextualConsole;
