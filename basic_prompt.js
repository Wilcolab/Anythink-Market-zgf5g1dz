function camelCase(str1, str2) {
    return str1.toLowerCase() + str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase();
}

console.log(camelCase('potato', 'garlic')); // potatoGarlic