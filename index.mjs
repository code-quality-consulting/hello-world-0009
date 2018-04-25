export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        const world = "mundo";
        return "¡Hola " + world + "!";
    }
    return "Hello " + name + "!";
}
