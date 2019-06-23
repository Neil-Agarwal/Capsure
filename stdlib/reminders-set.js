const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
/**
* An HTTP endpoint that acts as a webhook for HTTP request event
* @param {string} name
* @param {string} medicine
* @param {string} time
* @param {string} instructions
* @returns {object} workflow The result of your workflow steps
*/
module.exports = async (name, medicine, time, instructions) => {

  // Prepare workflow object to store API responses
  
  let workflow = {};
  
  // [Workflow Step 1]
  
  console.log(`Running airtable.query[@0.1.2].insert()...`);
  
  workflow.insertQueryResult = await lib.airtable.query['@0.1.2'].insert({
    table: `Reminders`,
    fields: {
      'Name': `${name}`,
      'Medicine': `${medicine}`,
      'Time': `${time}`,
      'Additional Instructions': `${instructions}`
    }
  });

  return workflow;
};
