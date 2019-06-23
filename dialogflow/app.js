'use strict';

// Imports for Dialogflow
const { dialogflow } = require('actions-on-google');

const express = require('express');
const bodyParser = require('body-parser');

const app = dialogflow();

// Imports for node rest client
const Client = require('node-rest-client').Client;
const client = new Client();

app.intent('notes-post', async (conv, {name, medicine, text}) => {
	let path = 'feedback-post';
    let params = `name=${encodeURIComponent(name)}&medicine=${encodeURIComponent(medicine)}&text=${encodeURIComponent(text)}`;
    
	const response = await httpAction(path, params);

    conv.ask(`You've successfully added the comment for ${name}'s ${medicine}: "${text}". What else would you like to do?`);
});

var http = require('http');
function httpAction(path, params, callback) {
    return new Promise(((resolve, reject) => {
    var options = {
        host: 'theturnipteam.api.stdlib.com',
        path: '/service@dev/' + path + '?' + params,
        method: 'GET'
    };
    
    const request = http.request(options, (response) => {
      response.setEncoding('utf8');
      let returnData = '';

      response.on('data', (chunk) => {
        returnData += chunk;
      });

      response.on('end', () => {
        resolve(JSON.parse(returnData));
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
    request.end();
  }));
}

// Imports for express
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.set('port', (process.env.PORT || 5000));

// Express function
expressApp.post('/webhook', app);

expressApp.listen(expressApp.get('port'), function () {
    console.log('Webhook started');
});