# WorldSafe Lead Generation  Chat Tool

## Description

WorldSafe has a marketing opportunity to capture new customer leads by directing curious business managers looking for security specialist to an AI Chat bot that can answer questions and eventually capture contact information for an analyst or sales person to later contact.

This tool will live within the WorldSafe brand and on a separate domain of the current online business offerings.
## Requirements 

An initial demo application has been created by Aaron Ware but it requires some updates in order to get it to a production ready service. The main highlights are:
- Upgrade the LLM models to a more capable and faster version
- Integrate an embeddings model to offer RAG capabilities that will allow us to source expert, industry data when answering questions by perspective customers
- Improve security to harden bots and malicious users from attacking the application
- Integrate new backend tools with the frontend client
- Update the method for capturing lead data from MongoDB to a cheaper data storage solution and email WorldSafe employees with contact information.
- Deploy new applications and route through WorldSafe.life

---
## Risks

- Adding RAG capabilities will naturally slow down chat latency as it's an extra step for each response. We combat that by using faster LLM models to reduce total latency, however faster models may also produce less intuitive output. This will be a balance between speed and quality of output. 
- The frontend, client application is not secured via an authentication procedure which increases the footprint for attacks. We'll use best practice procedures like CAPTCHA, honeypots, rate-limiting, etc. in order to reduce this footprint.
- LLM Hallucinations can impact responses sent to potential leads. We can do our best to fine tune the output and increase reliability but this risk isn't 100% defensable. 
- General Disclaimer: Software may have bugs. We'll warrant repairs for the first 3 months. Work outside of this scope or timeline will be consider new work.

---
## Additional Service Fees
- WorldSafe will be responsible for application and database hosting fees as well as any additional services necessary for the application to function (e.g. emailing LLM API access, and embedding providers). At the perceived usage, these cost should be nominal or free. We proposed that to build on top of Cloudflare which offers reliable and affordable infrastructure for a majority of these costs.

---
## Project Work

| **Task**                | **Subtask**          | **Task Description**                                              | **Required Time** |
| ----------------------- | -------------------- | ----------------------------------------------------------------- | ----------------- |
| Prepare AI Model        | RAG Implementation   | Create embeddings from sourced content. Upload in Vector Database | 2                 |
|                         | RAG Integration      | Connect Vector database to LLM                                    | 2                 |
|                         | Model Training       | Fine-tuning and system prompting to achieve acceptable accuracy   | 5                 |
|                         | Quality Assurance    | QA testing to ensure model functions as expected                  | 3                 |
| Application Development | Frontend Development | Integrate Backend                                                 | 8                 |
|                         | Capture Lead Data    | Create form for WorldSafe backend data submission                 | 2                 |
|                         | Server Development   | Update OpenAI models into server application                      | 10                |
|                         | Notify Lead          | Capture and email new lead data                                   | 2                 |
| Implementation          | Deployment           | Deploy production app, api, and database                          | 5                 |
|                         |                      |                                                                   |                   |
| **Total Hours**         |                      |                                                                   | **39**            |

---
## Pricing

Billable rate is $125 at 39 hours for a total of $4875. Equal Sons will compensate Aware Ware for the previously rendered services from this total cost.