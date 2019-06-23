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
  
  console.log(`Running airtable.query[@0.1.2].insert()...`);
  var currDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  //currDate = new Date(currDate.getTime() - 14400000);
  
  
  
  workflow.insertQueryResult = await lib.airtable.query['@0.1.2'].insert({
    table: `Notes`,
    fields: {
      'Name': `${name}`,
      'Medicine': `${medicine}`,
      'Time': currDate.toString(),
      'Text': `${text}`
    }
  });

  return workflow;
};
