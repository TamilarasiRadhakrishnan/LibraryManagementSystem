const { Parser } = require("json2csv");

const convertToCsv = (data, fields) => {
    try {
        const json2csvParser = new Parser({ fields });
        return json2csvParser.parse(data);
    } catch (err) {
        throw new Error("Failed to convert JSON to CSV");
    }
};

module.exports = { convertToCsv };
