export function makeGreeting(name = "world", language) {
    if (language === "Spanish") {
        return "¡Hola mundo!";
    }
    return "Hello " + name + "!";
}
