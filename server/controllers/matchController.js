
const parseResume = require("../services/resumeParser");
const { extractSkills, extractSkillsFromJD } = require("../services/skillExtractor");
const matchSkills = require("../services/matcher");
const extractName = require("../services/nameExtractor"); 

const matchResume = async (req, res) => {
  try {
    const jdText = req.body.jobDescription;
    const filePath = req.file.path;

    // resume parsing
    const resumeText = await parseResume(filePath);

    
    const name = extractName(resumeText);

    const resumeSkills = extractSkills(resumeText);

    // extract skills ONLY from JD
    const jdSkills = extractSkillsFromJD(jdText);

    // matching
    const matchResult = matchSkills(resumeSkills, jdSkills);
  console.log("Match Result:", name); // 
    res.json({
      name: name, 
      resumeSkills,
      jdSkills,
      matchingJobs: [
        {
          jobId: "JD001",
          role: "Software Developer",
          skillsAnalysis: matchResult.skillsAnalysis,
          matchingScore: matchResult.matchingScore,
        },
      ],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing request" });
  }
};

module.exports = { matchResume };
// const parseResume = require("../services/resumeParser");
// const { extractSkills, extractSkillsFromJD } = require("../services/skillExtractor");
// const matchSkills = require("../services/matcher");

// const matchResume = async (req, res) => {
//   try {
//     const jdText = req.body.jobDescription;
//     const filePath = req.file.path;

//     // resume parsing
//     const resumeText = await parseResume(filePath);
//     const resumeSkills = extractSkills(resumeText);

//     // extract skills ONLY from JD
//     const jdSkills = extractSkillsFromJD(jdText);

//     // matching
//     const matchResult = matchSkills(resumeSkills, jdSkills);

//     res.json({
//       name: "Candidate",
//       resumeSkills,
//       jdSkills, 
//       matchingJobs: [
//         {
//           jobId: "JD001",
//           role: "Software Developer",
//           skillsAnalysis: matchResult.skillsAnalysis,
//           matchingScore: matchResult.matchingScore,
//         },
//       ],
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error processing request" });
//   }
// };

// module.exports = { matchResume };
