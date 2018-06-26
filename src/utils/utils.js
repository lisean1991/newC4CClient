export default {
  validateEmail(email = '') {
    return /^([\w!.%+-])+@([\w-])+(?:\.[\w-]+)+$/.test(email);
  },
  validateStrongPassword(password = '') {
    const UPPER_CASE = () => /[A-Z]/.test(password);
    const LOWER_CASE = () => /[a-z]/.test(password);
    const NUMERIIC = () => /[0-9]/.test(password);
    const SPECIAL_CHAR = () => [/[\u0020-\u002F]/, /[\u003A-\u0040]/, /[\u005B-\u0060]/, /[\u007B-\u007E]/].some(reg => reg.test(password));
    const VALIDATORS = [UPPER_CASE, LOWER_CASE, NUMERIIC, SPECIAL_CHAR];
    return VALIDATORS.every(validator => validator());
  },
  anonymousRoutes() {
    return ['login', 'register', 'forgotPassword', 'resetPassword'];
  },
  convertTimeStamp(TimeStamp){
    const timeCvt = eval(TimeStamp.replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));
    return timeCvt.toLocaleDateString();
  }
};

