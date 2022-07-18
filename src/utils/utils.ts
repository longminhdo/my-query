const validateEmail = (v: string) => {
  if (!v) {
    return false;
  }
  let emailPattern = '[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+';

  return v.match(emailPattern);
};

const validatePhoneNumber = (v: string) => {
  if (!v) {
    return false;
  }
  let phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  return v.match(phonePattern);
};

export { validateEmail, validatePhoneNumber };
