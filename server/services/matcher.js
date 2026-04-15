const matchSkills = (resumeSkills, jdSkills) => {
  const skillsAnalysis = [];

  let matchCount = 0;

  jdSkills.forEach((skill) => {
    const present = resumeSkills.includes(skill);

    if (present) matchCount++;

    skillsAnalysis.push({
      skill,
      presentInResume: present,
    });
  });

  // calculate score
  const total = jdSkills.length;
  const score = total === 0 ? 0 : Math.round((matchCount / total) * 100);

  return {
    skillsAnalysis,
    matchingScore: score,
  };
};

module.exports = matchSkills;