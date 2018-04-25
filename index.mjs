export function makeGreeting(name = "world", language) {
    if (language === "Spanish") {
        name = "mundo";
        return "¡Hola " + name + "!";
    }
    return "Hello " + name + "!";
}
