
import { ApiAiClient } from "api-ai-javascript";
import { applyMiddleware, createStore } from 'redux';
import $ from 'jquery'



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
                $(document).ready(function() {                
                    $('#autoscroll').animate({scrollTop:$('#autoscroll').height()}, 'slow');
                    $('input:text').val("");
                    return false;
            });
            
            const { result: {action }} = response;
            handleAction(action,fulfillment.speech);
            console.log(userData);

            }
    }
}

var userData = 
{
    initialRecount: "",
    type: "",
    isFromWork: "",
    where: "Thailand",
    sueWho: ""
};



var prevAction = "";

function handleAction(actions,speech){
    switch(actions){
        case "input.welcome":
            //start saving information
            userData.initialRecount= speech;
            prevAction = "input.welcome";
            break;


        //sexualHarasssment
        case "classificationSexualHarassment":
            //record only if prev is input.welcome
            if(prevAction = "input.welcome"){
                userData.type = "sexualHarassment";
            }
            prevAction = "input.welcomeclassificationSexualHarassment";
            break;

        case "ClassificationSexualHarassment.ClassificationSexualHarassment-yes":
            //record only if prev is input.welcome
            if(prevAction = "input.welcomeclassificationSexualHarassment"){
                userData.isFromWork = true;
                userData.sueWho = "Consultant, Firm";
            }
            prevAction = "input.welcomeclassificationSexualHarassmentClassificationSexualHarassment.ClassificationSexualHarassment-yes";
            break;

        case "sueConsultant":
            //record only if prev is input.welcome
            if(prevAction = "input.welcomeclassificationSexualHarassment"){
                userData.isFromWork = false;
                userData.sueWho = "Consultant";
            }
            prevAction = "input.welcomeclassificationSexualHarassmentsueConsultant";
            break;            
        default:
            console.log("default");
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

