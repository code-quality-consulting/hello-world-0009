export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        if (name === "") {
            const world = "mundo";
            return "¡Hola " + world + "!";
        }
        return "¡Hola " + name + "!";
    }
    return "Hello " + name + "!";
}

export function makeGreeter() {
    return function () {
        return "Hello world!";
    }
}
