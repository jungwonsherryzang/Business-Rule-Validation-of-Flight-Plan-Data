# Business Rule Validation of Flight Plan
Developing a business rule validation that checks business rules and criteria of flight plan XML files (FF-ICE files) for an air traffic management 

# BUSINESS RULE VALIDATION
Business rules are the rules that define or constrain some aspects of business and set to either true or false. This can apply to people, processes, corporate behaviors, or computing systems and it is intended to influence the behavior of the business to help the organization to achieve its goals. Business rules are formalized in a language that managers and technologists can understand. Business rules exist for an organization whether or not they are ever written down, talked about or even part of the organization’s consciousness. Building a business rule develops a strategy to provide high-level direction about what an organization should do and business rules to provide detailed guidance about how a strategy can be translated into action.

# FFICE
FFICE stands for Flight and Flow Information for a Collaborative Environment defines all requirements for flight plan information. FFICE data supports ATM industry to achieve strategic and tactical performance management with emphasizing the need for data sharing to improve efficiency and benefits to ATM industry. The data exchange of flight and flow information is the potentially promising system of present and future ATM industry.

The criteria for FFICE Business Rule Validation are provided by the FIXM committee. In simple terms, there are number of FFICM XML Elements that need to exist in the message for it to be business rule valid. The idea of Business Rule Validation of flight plan is when XML messages come in and before it goes out, first, the message is checked against the schema to make sure it is valid, which means that checking the data is in the right place, data values are there and matching the right pattern. Second, the message is checked against the business rules, which means to make sure that all the required elements do exist within the message.

# BUSINESS RULES/CRITERIA OF FLIGHT PLAN

* FIXM v.4.2 root element contains application header and Schema location
* Identifier and identifier domain are added in originator, gufiOriginator, and recipient element.
* Under flight element, gufiOriginator element with identifier and identifier domain is added.
* RelevantAtmServiceProvider element is added with provider and providerType element. This element only exists in AgreedTrajectory, File, FileUpdate,   RevisionRequest and TrialRequest XML files.
* In provider element except FileUpdate file, sub elements should be defined as necessary to identify the provider. Sub elements consist of contact with name and title sub elements, identifier, identifierDomain and name element.
* In provider element in FileUpdate file, sub elements consist of with name and onlineContact with email, linkage and network element, which has a type sub element, and title, identifier, identifier and name element.
* Ffice message type is added
* Type element is added that is proposed using the same message type in the header and in FIXM 4.2 XML files.

## BUSINESS RULE XML ELEMENT EXAMPLE
``` xml
<originator>
    <ns3:contact>
      <ns3:name>BOEING FOC</ns3:name>
      <ns3:title>BOEING_DISPATCHER</ns3:title>
    </ns3:contact>
    <ns3:identifier>BOEINGDMS</ns3:identifier>
    <ns3:identifierDomain>FF-ICE</ns3:identifierDomain>
    <ns3:name>BOEINGDMS</ns3:name>
  </originator>
  <recipient>
    <ns3:identifier>FAA,JCAB,NAVCANADA,ATOP</ns3:identifier>
    <ns3:identifierDomain>FF-ICE</ns3:identifierDomain>
    <ns3:name>FAA,JCAB,NAVCANADA,ATOP</ns3:name>
  </recipient>
  <relevantAtmServiceProvider>
    <provider>
      <ns3:contact>
        <ns3:name>BOEING FOC</ns3:name>
        <ns3:title>BOEING_DISPATCHER</ns3:title>
      </ns3:contact>
      <ns3:identifier>FAA</ns3:identifier>
      <ns3:identifierDomain>FF-ICE</ns3:identifierDomain>
      <ns3:name>FAA</ns3:name>
    </provider>
    <providerType>FFICE_PARTICIPANT</providerType>
  </relevantAtmServiceProvider>
```

## VALIDATION RULES
//These are what I have been working so far!

1. Aircraft Address Validator
2. Aircraft Type Designator Validator
3. Date ISO Validator
4. Communication Capability Code Validator
5. Wake Turbulence Category
6. Data link Communication Capability Code Validator
7. Navi Capability Code Validator
8. Surveillance Capability Code Validator
9. Standard Capability Validator
10. Location Indicator Validator -> We need to define the aerodrome from 'G'. I have finished A to F.
11. Flight Type Validator
12. Gufi Validator
13. Type Validator



//This module is not completely finished yet. Need to add more values and rules relating to flight planning.
