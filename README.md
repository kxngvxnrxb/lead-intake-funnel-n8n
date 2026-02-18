# Lead Intake Funnel + n8n Automation

This project demonstrates a lead intake system where a form submission is processed through an **n8n workflow** to log lead data and trigger automated follow-ups.

The purpose of this project is to showcase:
- Funnel form integration
- Workflow automation
- API integration
- Data logging and notification flows

---

## Workflow Overview

Flow:

1. User submits a lead form (name, email, service, budget, message)
2. n8n receives the submission via Webhook
3. Lead data is processed and structured
4. Data is appended to Google Sheets for tracking
5. An automated email response is sent

---

## Features

- Webhook-based lead intake
- Data processing and formatting in n8n
- Google Sheets integration for logging leads
- Automated email response
- Real workflow execution (no mock data)

---

## Repository Structure

frontend/ → Angular lead intake form
workflow/ → Exported n8n workflow (JSON)
assets/ → Screenshots and demo media

---

## Screenshots

Add screenshots showing:

- Funnel form
- n8n workflow
- Google Sheets log entry
- Email response received

---

## Tools Used

- Angular
- n8n
- Google Sheets API
- Email integration

---

## Notes

This project is a demonstration of automation workflows and frontend integration.  
Credentials and API keys are not included in this repository.
