const validateFields = (requiredFields, requestBody) => {
    const missingFields = requiredFields.filter(
        (field) => !Object.keys(requestBody).includes(field) || !requestBody[field]
    );

    if (missingFields.length > 0) {
        return `Missing required fields: ${missingFields.join(", ")}`;
    }

    return null;
};

module.exports = { validateFields };
