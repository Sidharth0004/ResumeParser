const skillsList = require("../utils/skillList");

const parseJD = (text) => {
  const lowerText = text.toLowerCase();

  //  Extract Skills
  const jdSkills = [];
  skillsList.forEach((skill) => {
    if (lowerText.includes(skill.toLowerCase())) {
      jdSkills.push(skill);
    }
  });

  // 🔹 Extract Experience (simple regex)
  let experience = 0;
  const expMatch = text.match(/(\d+)\+?\s*(years|year)/i);
  if (expMatch) {
    experience = parseInt(expMatch[1]);
  }

  // 🔹 Extract Salary
  let salary = null;
  const salaryMatch = text.match(/(\d+\s?LPA|₹?\d{1,3}(,\d{3})+)/i);
  if (salaryMatch) {
    salary = salaryMatch[0];
  }

  return {
    skills: jdSkills,
    experience,
    salary,
  };
};

module.exports = parseJD;