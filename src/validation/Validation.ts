import _ = require('underscore');

module Validation {
    export interface IErrorCustomMessage { (config: any, args: any): string; }

    export interface IPropertyValidator {
        isAcceptable(s: any): boolean;
        customMessage?: IErrorCustomMessage;
        tagName?: string;
    }

    export interface IStringValidator extends IPropertyValidator {
        isAcceptable(s: string): boolean;
    }

    //NEED TO DO MORE FROM HERE

    export class MessageValidation {
        static customMsg = "Please check this field";

        static defaultMessages = {
            aircraftaddress: "Please enter a valid aircraft address.",
            numofaircraft: "Please enter a valid number of aircraft.",
            icaoaircrafttypedesignator: "Please enter a valid icao aircraft type designator.",
            comcapabilitycode: "Please enter a valid communication capability code.",
            datalinkcomcapabilitycode: "Please enter a valid datalink communication capability code.",
            navcapabilitycode: "Please enter a valid navigation capability code.",
            othernavcomcapabilities: "Please enter a valid other navigation capabilities.",
            standardcomcapabilities: "Please enter a valid standard capabilities.",
            survcapabilitycode: "Please enter a valid surveillance capability code.",
            registration: "Please enter a valid aircraft registration.",
            waketurbulence: "Please enter a valid wakeTurbulence.",
            locationindicator: "Please enter a valid location indicator.",
            estimatedoffblocktime: "Please enter a valid extimated off block time ( ISO ).",
            aircraftidentification: "Please enter a valid aircraft identification.",
            name: "Please enter a valid name.",
            title: "Please enter a valid title.",
            identifier: "Please enter a valid identifier.",
            identifierdomain: "Please enter a valid identifierdomain.",
            flighttype: "Please enter a valid flight type.",
            gufi: "Please enter a valid gufi (codespace).",
            remarks: "Please enter a valid remarks.",
            alongroutedistance: "Please enter a valid along route distance.",
            designator: "Please enter a valid designator.",
            altitude: "Please enter a valid altitude.",
            temperature: "Please enter a valid temperature.",
            winddirection: "Please enter a valid wind direction.",
            windspeed: "Please enter a valid wind speed.",
            description: "Please enter a valid description.",
            pos: "Please enter a valid pos.",
            position: "Please enter a valid position (srsName).", //need to check
            predictedgroundspeed: "Please enter a valid predicted ground speed.",
            absolutetime: "Please enter a valid absolute time ( ISO ).",
            relativetime: "Please enter a valid relative time from initial prediction point.",
            routedesignator: "Please enter a valid route designator.",
            flightlevel: "Please enter a valid flight level.",
            cruisingspeed: "Please enter a valid sruising speed.",
            flightrulescat: "Please enter a valid flight rules category.",
            providertype: "Please enter a valid provider type.",
            timestamp: "Please enter a valid timestamp ( ISO ).",
            type: "Please enter a valid type.",
            uniquemessageidentifier: "Please enter a valid unique message identifier.",
            actualdeparturetime: "Please enter a valid actual time of departure ( ISO ).",
            linkage: "Please enter a valid linkage.",
            value: "Please enter a valid value.",
            performancecode: "Please enter a valid performance based code.",
            standardcapabilities: "Please enter a valid standard capabilities.",
            callingcode: "Please enter a valid selective calling code.",
            propertytype: "Please enter a valid property type.",
            operatorflightplanversion: "Please enter a valid operator flight plan version.",
            refmessageidentifier: "Please enter a valid referenced message identifier.",
            custom: MessageValidation.customMsg 
        };
        static ValidationMessage = MessageValidation.defaultMessages;

        static GetValidationMessage(validator: any) {
            var msgText = MessageValidation.GetValidationMessage[validator.tagName];

            if (msgText === undefined || msgText === "" || !_.isString(msgText)) { //TO DO: FIX ERROR & check tagName of on basicvalidator file
                msgText = MessageValidation.customMsg;
            }
        }
    }
}
export = Validation;