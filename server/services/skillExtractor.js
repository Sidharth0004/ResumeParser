const skillsList = require("../utils/skillList");

const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};


const extractSkills = (text) => {
  const foundSkills = [];
  const lowerText = text.toLowerCase();

  skillsList.forEach((skill) => {
    const escapedSkill = escapeRegex(skill.toLowerCase());
    const regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

    if (regex.test(lowerText)) {
      foundSkills.push(skill);
    }
  });

  return foundSkills;
};

//  NEW FUNCTION
const extractSkillsFromJD = (text) => {
  const foundSkills = [];
  const lowerText = text.toLowerCase();

  skillsList.forEach((skill) => {
    const escapedSkill = escapeRegex(skill.toLowerCase());
    const regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

    if (regex.test(lowerText)) {
      foundSkills.push(skill);
    }
  });

  return foundSkills;
};

//  EXPORT BOTH
module.exports = { extractSkills, extractSkillsFromJD };


// const skillsList = require("../utils/skillList");

// const extractSkills = (text) => {
//   const foundSkills = [];

//   const lowerText = text.toLowerCase();

//   skillsList.forEach((skill) => {
//     if (lowerText.includes(skill.toLowerCase())) {
//       foundSkills.push(skill);
//     }
//   });

//   return foundSkills;
// };

// module.exports = extractSkills;