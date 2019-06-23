const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
/**
* An HTTP endpoint that acts as a webhook for HTTP request event
* @param {string} name
* @param {string} medicine
* @param {string} text
* @returns {object} workflow The result of your workflow steps
*/
module.exports = async (name, medicine, text) => {

  // Prepare workflow object to store API responses
  
  let workflow = {};
  
  // [Workflow Step 1]
  
  console.log(`Running googlesheets.query[@0.1.1].insert()...`);
  var currDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  
  workflow.insertQueryResult = await lib.googlesheets.query['@0.1.1'].insert({
    spreadsheetId: null,
    range: `Sheet1`,
    bounds: 'FIRST_EMPTY_ROW',
    fields: {
      'Name': `${name}`,
      'Medicine': `${medicine}`,
      'Time': currDate.toString(),
      'Text': `${text}`
    }
  });

  return workflow;
};
