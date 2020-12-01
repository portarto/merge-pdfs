const fs = require('fs');
const PDFMerger = require('pdf-merger-js');

const folder = process.argv[2];
const outFilename = process.argv[3];

const merger = new PDFMerger();
const getPdfPath = (folder, pdf) => `${folder}\\${pdf}`;

const merge = async () => {  
  const pdfs = await fs.promises.readdir(folder);

  pdfs.forEach(pdf => merger.add(getPdfPath(folder, pdf)));

  await merger.save(getPdfPath(folder, outFilename));
}

merge()
  .then(console.log('done'))
  .catch(error => console.log('error', error))
;
