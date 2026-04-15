const PDFParser = require("pdf2json");

const parseResume = (buffer) => {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (errData) => {
      console.error("Error parsing PDF:", errData.parserError);
      reject("Error parsing PDF");
    });

    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      let text = "";

      pdfData.Pages.forEach((page) => {
        page.Texts.forEach((textItem) => {
          try {
            text += decodeURIComponent(textItem.R[0].T) + " ";
          } catch (error) {
            text += textItem.R[0].T + " ";
          }
        });
      });

      resolve(text);
    });

    
    pdfParser.parseBuffer(buffer);
  });
};

module.exports = parseResume;

// const PDFParser = require("pdf2json");

// const parseResume = (filePath) => {
//   return new Promise((resolve, reject) => {
//     const pdfParser = new PDFParser();

//     pdfParser.on("pdfParser_dataError", (errData) => {
//       console.error("Error parsing PDF:", errData.parserError);
//       reject("");
//     });

//     pdfParser.on("pdfParser_dataReady", (pdfData) => {
//       let text = "";

//       pdfData.Pages.forEach((page) => {
//         page.Texts.forEach((textItem) => {
//           try {
//             text += decodeURIComponent(textItem.R[0].T) + " ";
//           } catch (error) {
//             text += textItem.R[0].T + " ";
//           }
//         });
//       });

//       resolve(text);
//     });

//     pdfParser.loadPDF(filePath);
//   });
// };

// module.exports = parseResume;