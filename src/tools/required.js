const required = (field = required('field')) => { throw new Error(`${field} is required`); };

export default required;
