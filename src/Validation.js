export const minLength = len => val => val && val.length >= len;
export const maxLength = len => val => !val || val.length <= len;
