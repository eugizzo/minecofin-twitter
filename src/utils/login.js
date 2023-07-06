const DEFAULT_EMAIL = "admin@nlpminecofin.com";
const DEFAULT_PASSWORD = "password";

export default (email, password) => {
  if (DEFAULT_EMAIL === email && DEFAULT_PASSWORD === password) {
    return true;
  }

  return false;
};
