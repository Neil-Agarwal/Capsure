const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
/**
* An HTTP endpoint that acts as a webhook for HTTP request event
* @param {string} name
* @returns {object}
*/
module.exports = async (name) => {

  // Prepare workflow object to store API responses
  
  let workflow = {};
  
  // [Workflow Step 1]
  
  console.log(`Running airtable.query[@0.1.2].select()...`);
  
  workflow.selectQueryResult = await lib.airtable.query['@0.1.2'].select({
    table: `notes`,
    where: {
      'Name': `${name}`
    },
    limit: {
      'count': 0,
      'offset': 0
    }
  });
  return workflow.selectQueryResult;
};
