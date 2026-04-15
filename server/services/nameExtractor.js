// Extract email from resume text
const extractEmail = (text) => {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  const match = text.match(emailRegex);
  return match ? match[0] : null;
};

// Extract name from email (fallback)
const extractNameFromEmail = (email) => {
  if (!email) return null;

  const namePart = email.split("@")[0];

  // remove numbers
  const cleaned = namePart.replace(/[0-9]/g, "");

  // split by dot, underscore
  const parts = cleaned.split(/[._]/);

  const name = parts
    .filter(Boolean)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");

  return name || null;
};

// Extract name from resume text (primary)
const extractNameFromText = (text) => {
  const lines = text.split("\n").map(line => line.trim());

  for (let line of lines) {
    if (
      line.length > 0 &&
      !line.includes("@") &&
      !/\d/.test(line) // avoid phone numbers
    ) {
      return line;
    }
  }

  return null;
};

// Final function (best approach)
const extractName = (text) => {
  //  Try from resume
  let name = extractNameFromText(text);

  //  Fallback → email
  if (!name || name.length < 3) {
    const email = extractEmail(text);
    name = extractNameFromEmail(email);
  }

  // Final fallback
  return name || "Candidate";
};

module.exports = extractName;