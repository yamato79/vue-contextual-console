# Vue Contextual Console

Add configurable contextual output to console.

## Installation


```bash
npm install -----
```

```javascript
import VueContextualConsole from "vue-contextual-console";

Vue.use(VueContextualConsole);
```

## Configuration

Listed below are the available configuration options.

| Option           | Default   | Description                                                                                                |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| enabled          | true      | Sets if the plugin's console logging is enabled. Useful in only setting it to true under development mode. |
| colors.primary   | "#3490DC" | Color for \$console.primary();                                                                             |
| colors.secondary | "#9561E2" | Color for \$console.secondary();                                                                           |
| colors.info      | "#38C172" | Color for \$console.info();                                                                                |
| colors.success   | "#BCDEFA" | Color for \$console.success();                                                                             |
| colors.warning   | "#F6993F" | Color for \$console.warning();                                                                             |
| colors.error     | "#E3342F" | Color for \$console.error();                                                                               |
| colors.warn      | ""        | Color for \$console.warn();                                                                                |
| colors.error     | ""        | Color for \$console.error();                                                                               |

```javascript
import VueContextualConsole from "vue-contextual-console";

Vue.use(VueContextualConsole, {
	enabled: process.env.NODE_ENV == "development",
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
});
```

## Usage

The plugin exposes an instance variable and from there you can call the other commands. To output text into the console with a primary color you can do it this way. Please see the configuration options above and all the children of the colors configuration is a function you can call. e.g. this.$console.secondary or this.$console.caution.

```javascript
export default {
	mounted() {
		this.$console.primary("Mounted!");
	},
};
```
