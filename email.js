let email = "james.C.smith@rhi-group.com";

let name = email.substring(0,email.lastIndexOf("@")).toLowerCase();

let domain = email.substring(email.lastIndexOf("@") +1).toLowerCase();

console.log(name);
console.log(domain);
