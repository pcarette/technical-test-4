# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ? 
- Which feature did you develop and why ? 
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? 

# Submission 

## What bugs did you find ? How did you solve these and why ?


Il y avait 3 bugs facilement visibles, 2 bugs sur le front et 1 sur le back : 
- La soumission du formulaire ne se faisait pas correctement (onChange -> onClick)
- le retour vers la user list n'avait pas lieu (history.push(`/user`))

- le mot de passe était apparent à chaque requête get vers la route des utilisateurs : ({select : false})



Je les ai résolus pour permettre la mise à jour des documents de la collection user et pour apporter des normes de sécurités minimales sur le projet


## Which feature did you develop and why ?

I developped a way to change availability status of a user to a potential user admin and allows him to change password of user in his own organisation. All the prerequistes were here (especially password encryption middleware in the UserSchema), we just needed conditional password changing in UserView & add availability selectbox field

It seems to be a pretty good efficient feature, with huge impact on users with less costs for the company.


## Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ?

This is the most concerning part of the project. There's missing many things : 

- no routes folder
- no services encapsulated functions for business logic
- NO DATA VALIDATION, only req.body spread into the mongoose requests (very dangerous, several exploits and datadumps possible, even in other databases)

I did the minimum security best practices to set up the user route controller and services, and finally joi schemas to fit with mongoose schemas, same work need to be done with "project" and maybe other parts of the app

-many components in the same part, pretty unreadable jsx
-no data validation (with Yup for example)
-no specific services for api calls

I did a small architecture to split components, pages, and added at the very end some naming conventions, same work need to be done with "project" and maybe other parts of the app

Assuming we have data validation in backend, i didn't use yup, but it could be useful when we'll need to scale
