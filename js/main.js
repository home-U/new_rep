const currentUrl = window.location.href;
const parsedUrl = new URL(currentUrl);

const protocol = parsedUrl.protocol;
const hostname = parsedUrl.hostname;
const path = parsedUrl.pathname;

console.log(parsedUrl);

window.localStorage.setItem("URL", parsedUrl);

// window.location.href = "home";
console.log(protocol, hostname, path);
console.log(protocol);
console.log(hostname);
console.log(path);

