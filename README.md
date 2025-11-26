## Manager Email

**Subject:** New Property Search Protocol  
**From:** Chief Leasing Officer  
**To:** Leasing Agent – Charlottesville, VA (ZIP 22903)  
**Date:** August 24, 2025  

Good Afternoon,

Thank you for all your hard work as the head of our leasing department in Charlottesville, Virginia. Before the rush for housing begins, we need a more effective method for comparing rates with other rental properties in the area. This will allow prospective tenants to have a smoother experience when searching for their future homes!

Given the University of Virginia (UVA) community, the local housing market is already competitive, so we need this workflow completed quickly.

To accomplish this, you are responsible for building an **n8n Agent Workflow** that accepts input in the form of:

> **“X bedrooms, X bathrooms, XXXX dollars”**  
> *(representing bedroom count, bathroom count, and maximum rent)*

The goal of the workflow is to send an email (preferably via Gmail) to the user containing a list of rentals that meet the criteria listed, along with each property’s **distance to the University of Virginia’s School of Data Science** (our reference point).

### Required Workflow Components
- **Webhook** to accept the input parameters  
- **Gemini search** to gather listings and relevant information  
- **Email send** with results in **table format**  
  - If parameters are missing or unrecognizable, send an email informing the user

Good luck! We hope to see your model up and running soon as we need these listings live as soon as possible.

Thank you,  

**YS**


## Core Concepts:

What are we building? **An n8n Agent Workflow**

It is important to know what a workflow even is. A workflow is a model that completes a certain task(s) through building blocks called nodes. The model automoates these tasks through these nodes that are built off of eachother. For example, in our case, we will provide some inputs, search based on those inputs, and output something all from writing three parameters. Think of this as a linear model, Input -> Doing something with the input -> Output. These models can be as long or as short as the task requires them to be, for our purposes, reference the model below to see the ideal representation!

## How to run:

This model will be run locally through Docker. To set up, follow these commands and make sure to have Docker installed on your machine.

Create your Docker volume

    docker volume create n8n_data

Next, lets run n8n in Docker
     
    docker run -it --rm --name n8n \
    -p 5678:5678 \
    -v n8n_data:/home/node/.n8n \
    -e N8N_SECURE_COOKIE=false
    docker.n8n.io/n8nio/n8n

You can access the n8n interface here: http://localhost:5678/

Now that we have it running, its time to start building our nodes. Our model needs to begin with a webhook node in order for it to allow an HTTP POST request.  Select the POST HTTP Method within the node and customize the Path (ex. rent-criteria). This node acts as our entry point for the entire model, without these key components, we won't be able to build off of this node.  The inside of the node should look similar to this:

