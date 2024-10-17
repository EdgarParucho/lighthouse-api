const isValidPassword = (value) => {
  const requirements = [/[a-z]/, /[A-Z]/, /[0-9]/, /[!@#$%^&*]/];
  let matchCount = 0;
  for (let regex of requirements) if (regex.test(value)) matchCount++;
  return matchCount >= 3; 
};

module.exports = {
  isValidPassword,
}