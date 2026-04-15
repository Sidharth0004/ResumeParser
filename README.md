🚀 Resume Matcher (ATS-Based Skill Matching System)

A full-stack application that analyzes a candidate’s resume against a given Job Description (JD) and calculates a matching score based on skills.

📌 Features
📄 Upload Resume (PDF)
📝 Paste Job Description
🧠 Extract skills from Resume & JD
🔍 Perform skill-based matching
📊 Calculate Matching Score (%)
✅ Show matched & missing skills
👤 Extract candidate name from resume
⏳ Extract years of experience (if available)
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Backend
Node.js
Express.js
Libraries Used
pdf2json (Resume parsing)
Regex (Skill & data extraction)
⚙️ How It Works
User uploads a resume and enters a job description.
Backend parses the resume PDF into text.
Skills are extracted from:
Resume
Job Description
Matching logic compares both skill sets.

Matching score is calculated:

Score = (Matched Skills / JD Skills) × 100
Result is displayed with:
Matching Score
Skill Analysis (✔ / ❌)
📂 Project Structure
server/
│
├── controllers/
│   └── matchController.js
│
├── services/
│   ├── resumeParser.js
│   ├── skillExtractor.js
│   ├── matcher.js
│   ├── nameExtractor.js
│   └── experienceExtractor.js
│
├── utils/
│   └── skillList.js
│
└── routes/
    └── matchRoutes.js
🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/resume-matcher.git
cd resume-matcher
2️⃣ Install dependencies
npm install
3️⃣ Run the server
npm run dev

Server will run on:

http://localhost:5000
📊 Example Output
{
  "name": "John Doe",
  "resumeSkills": ["Java", "React", "Node.js"],
  "jdSkills": ["Java", "Go", "React"],
  "matchingJobs": [
    {
      "skillsAnalysis": [
        { "skill": "Java", "matched": true },
        { "skill": "Go", "matched": false },
        { "skill": "React", "matched": true }
      ],
      "matchingScore": 66
    }
  ]
}
⚠️ Limitations
PDF parsing may break words (e.g., "MongoDB" → "Mon go DB")
Short skills like "Go", "C" may cause false matches
Experience extraction works only if explicitly mentioned
