export function isNumeric(value: string | FormDataEntryValue | null) {
    return /^-?\d+$/.test(`${value}`);
};

export function hasNumber(value: string | FormDataEntryValue | null) {
    return /\d/.test(`${value}`);
  }