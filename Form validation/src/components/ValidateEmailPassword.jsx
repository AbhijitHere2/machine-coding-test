export const validateEmail = (email)=>{

  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  const hastAt = atIndex > 0;
  const hasDotAfterAt = dotIndex > atIndex +1;
  const hasTextAfterDot = dotIndex < email.length -1;

  return hastAt && hasDotAfterAt && hasTextAfterDot
}

export const validatePassword =(password)=>{


  return password.length >= 6;

}