# Aunties Programs

Response to a code-exercise for a well-known broadcasting corporation (other broadcasting corporations are available).

## Brief

```
Your team has been asked to work with a new HTTP API that provides an online media player with lists of programmes sorted alphabetically. Your task is to use the API to generate an A-Z listing for the website.

Each of the listing pages should include:

1. a list of programme titles and images
2. the ability to paginate if the letter has more than 20 results
3. navigation to other letters

The API end point follows the following format:
`{base_uri}/ibl/v1/atoz/{letter}/programmes?page={page}`
The base URI is:
`ibl.api.bbci.co.uk`
```

## Process 

I decided to build my response in AngularJS, even though my immediate idea was to do everything with AJAX and jQuery (something I'm very comfortable with).

I have only used Angular a little and wanted more experience with it/a challenge. Despite the time constraints I am pretty happy with my solution because of my lack of experience with Angular and that I'd never worked with a restful API in this fashion, either (a single page app calling a paginated RESTful API.)

## Issues

I'm not happy with the styling at all (because there is none!). I put functionality over styling but would like to come back and add grid for the program tiles at the very least, making it responsive would be the next thing, funky animations as content loads in later on. 

I struggled for some time with the ImageChef bit on this, breaking up the URL, it's such a small problem! I'd like to work better with the supplied breakpoints when making it responsive, I'm a big fan of optimization but haven't been able to put something together for this instance.

Finally, last priority would be to refactor the code and add unit tests, but as discussed I only could spare a few hours to complete this around other tasks.

## Setup

Simply clone this to your computer/server and open Index. AngularJS is served over CDN, there is nothing to install and I have tried to keep it as lightweight as possible.
