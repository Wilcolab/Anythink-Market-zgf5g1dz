/**
 * Converts a given string to camelCase format.
 * 
 * @param {string} str - The input string to be converted. 
 * Must contain only alphabetic characters and spaces.
 * @throws {Error} Throws an error if the input is not a string 
 * or contains invalid characters (non-alphabetic).
 * @returns {string} The camelCase version of the input string.
 * 
 * @example
 * // Returns: 'phoneCall'
 * camelCase('phone call');
 * 
 * @example
 * // Throws an error
 * camelCase('90%&*56');
 */

/**
 * Converts a given string to dot.case format.
 * 
 * @param {string} str - The input string to be converted. 
 * Must contain only alphabetic characters and spaces.
 * @throws {Error} Throws an error if the input is not a string 
 * or contains invalid characters (non-alphabetic).
 * @returns {string} The dot.case version of the input string.
 * 
 * @example
 * // Returns: 'phone.call'
 * dotCase('Phone Call');
 * 
 * @example
 * // Returns: 'hello.world'
 * dotCase('Hello World');
 */
function camelCase(str) {
    if (typeof str !== 'string' || !/^[a-zA-Z\s]*$/.test(str)) {
        throw new Error('Invalid input: Please provide a string containing only alphabetic characters and spaces.');
    }

    return str
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
try {
    console.log(camelCase('phone call')); // Outputs: phoneCall
    console.log(camelCase('90%&*56')); // Throws an error
} catch (error) {
    console.error(error.message);
}

function dotCase(str) {
    if (typeof str !== 'string' || !/^[a-zA-Z\s]*$/.test(str)) {
        throw new Error('Invalid input: Please provide a string containing only alphabetic characters and spaces.');
    }

    return str
        .toLowerCase()
        .split(' ')
        .join('.');
}

// Example usage:
try {
    console.log(dotCase('Phone Call')); // Outputs: phone.call
    console.log(dotCase('Hello World')); // Outputs: hello.world
} catch (error) {
    console.error(error.message);
}

