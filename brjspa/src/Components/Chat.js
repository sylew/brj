
import { ApiAiClient } from "api-ai-javascript";
import { applyMiddleware, createStore } from 'redux';




const accessToken= '77f5acee6c974ba08874379fab70aafc';
const client = new ApiAiClient({accessToken})

const ON_MESSAGE = 'ON_MESSAGE';

export const sendMessage = (text, sender='user') => ({
    type: ON_MESSAGE,
    payload : {text, sender}
});

const messageMiddleware = () => next => action => {
    next(action);
    
    if(action.type === ON_MESSAGE){
        const { text } = action.payload;

        client.textRequest(text)
            .then( onSuccess )
        
            function onSuccess(response){
                const { result: {fulfillment }} = response;
                next(sendMessage(fulfillment.speech, 'bot'));
                var msg = new SpeechSynthesisUtterance(fulfillment.speech);
                window.speechSynthesis.speak(msg);
            }
    }
}

const initState = [{ text: 'hey'}];

const messageReducer = (state = initState, action) => {
    switch (action.type) {

        case ON_MESSAGE:
            return [ ...state, action.payload ];

        default:
            return state;
    }
};

export const store = createStore(messageReducer, applyMiddleware(messageMiddleware))

