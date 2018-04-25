export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        name = "mundo";
        return "¡Hola " + name + "!";
    }
    return "Hello " + name + "!";
}
