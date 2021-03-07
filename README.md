# FullThrottle Labs - Assessment Project
## Member Activity Viewer Application
[![Netlify Status](https://api.netlify.com/api/v1/badges/14e8226e-bbdd-4e47-963c-9ad2dc786462/deploy-status)](https://app.netlify.com/sites/ftl-assessment/deploys)

This project contains a Single Page Web Application made using React, deployed on netlify at [this link](https://ftl.cyogian.dev) with a backend JSON API Server made with [json-server.js](https://github.com/typicode/json-server) deployed on repl at [this link](https://json-server.cyogian.repl.co/) with source code on [this public github repo](https://github.com/cyogian/json-server).  

> Do Check the JSON-Server repo to have further insight about backend of this app aka JSON API.

### The Project Hierarchy 
**src**-+  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**components**-+ \<pure functional components depend on props\>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**activityPeriod** \<Activity Period List Item - Reusable \>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**header**  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**footer**  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**member**  \<Member List Item - Reusable\>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**containers**-+ \<components with own state depend on props & own state change\>   
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**main** \<the main page of site that shows `MemberList` made with `member` component\>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**activityPeriods** \<the modal that shows `ActivityPeriodList` made with `activityPeriod` component\>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**utilities**-+  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**axios** \<baseUrl configured instance of axios for fetching data\>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|-**static** \<all other files such as logo...\>  

## Features
- MemberList
  - View
  - Search
  - Click Member To Open Activity Viewer Modal
  - Pagination : not yet implemented

- Activity Viewer
  - View
  - Filter By Date
 
## Note
 > Select Dates between 01-03-2021 to 10-03-2021 for getting results as the data contain most activities of this period
