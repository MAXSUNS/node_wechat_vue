function isValidPhone(str) {
  var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  return myreg.test(str);
}

module.exports = {
  isValidPhone
}
