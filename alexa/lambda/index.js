// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to <sub alias="capture">Capsure</sub>! You can send comments or set reminders. What would you like to do?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

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

const RemindersSetHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'reminders_set'; 
    },
    async handle(handlerInput) {
        let request = handlerInput.requestEnvelope.request;
        
        let name = request.intent.slots.name.value;
        let medicine = request.intent.slots.medicine.value;
        let interval = request.intent.slots.interval.value;
        let startdate = request.intent.slots.startdate.value;
        console.log(`interval: ${interval}, startdate: ${startdate}`);
        let path = 'reminders-set';
        let params = `name=${encodeURIComponent(name)}&medicine=${encodeURIComponent(medicine)}&interval=${encodeURIComponent(interval)}&startdate=${encodeURIComponent(startdate)}`;
        
        const response = await httpAction(path, params);
        
        return handlerInput.responseBuilder.speak(`You've successfully added the reminder for ${name} to take ${medicine} every ${interval} starting at ${startdate}. What else would you like to do?`).reprompt("What else would you like to do?").getResponse();
    }
};
const NotesPostHandler ={
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'notes_post';
    },
    async handle(handlerInput) {
        let request = handlerInput.requestEnvelope.request;
        
        let name = request.intent.slots.name.value;
        let medicine = request.intent.slots.medicine.value;
        let text = request.intent.slots.text.value;
        
        let path = 'feedback-post';
        let params = `name=${encodeURIComponent(name)}&medicine=${encodeURIComponent(medicine)}&text=${encodeURIComponent(text)}`;
        
        const response = await httpAction(path, params);
        
        return handlerInput.responseBuilder.speak(`You've successfully added the comment for ${name}'s ${medicine}: "${text}". What else would you like to do?`).reprompt("What else would you like to do?").getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can send comments or set reminders. What would you like to do?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        NotesPostHandler,
        RemindersSetHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
