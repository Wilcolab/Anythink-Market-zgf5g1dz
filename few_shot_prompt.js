function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[-_\s](.)/g, (match, char) => char.toUpperCase())
        .replace(/^(.)/, (match) => match.toLowerCase());
}

// Test cases
console.log(toCamelCase("first name"));        // firstName
console.log(toCamelCase("user_id"));           // userId
console.log(toCamelCase("SCREEN_NAME"));       // screenName
console.log(toCamelCase("mobile-number"));     // mobileNumber