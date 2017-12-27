/**
 * Throws if a required field is empty
 * @param {string} field, The name of the required field
 * @returns {undefined}
 */
const required = (field = required('field')) => { throw new Error(`${field} is required`); };

export default required;
