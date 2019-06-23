const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
/**
* An HTTP endpoint that acts as a webhook for HTTP request event
* @param {string} name
* @param {string} medicine
* @returns {object} workflow The result of your workflow steps
*/
module.exports = async (name, medicine) => {

  // Prepare workflow object to store API responses
  
  let workflow = {};
  
  // [Workflow Step 1]
  
  console.log(`Running airtable.query[@0.1.2].delete()...`);
  
  workflow.deleteQueryResult = await lib.airtable.query['@0.1.2'].delete({
    table: `Reminders`,
    where: {
      'Name': `${name}`,
      'Medicine': `${medicine}`
    },
    limit: {
      'count': 0,
      'offset': 0
    }
  });

  return workflow;
};
