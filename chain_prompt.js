function toKebabCase(input) {
    // Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Remove numerical characters
    let result = input.replace(/[0-9]/g, '');

    // Remove symbols (keep only alphanumeric and spaces)
    result = result.replace(/[^a-zA-Z\s]/g, '');

    // Convert to lowercase and replace spaces with hyphens
    result = result.toLowerCase().replace(/\s+/g, '-');

    // Remove leading/trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    return result;
}
