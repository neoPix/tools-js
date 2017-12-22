export default (length = 8) => (Math.random() * Number.MAX_VALUE).toString(36).substr(0, length);
