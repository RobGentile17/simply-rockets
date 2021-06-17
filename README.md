# Simply Rockets
Simply Rockets allows users to browse through the different rockets currently being used or worked on by SpaceX.  Users can click on the rockets to see an image as well as key information pertaining to each individual rocket and have the ability to like and comment on the specific rockets. 

## Setup
- Fork and clone this repository 
- Open the index.html file in your browser 


## Endpoints
The base Url for this project is: https://api.spacexdata.com/v4

The endpoint needed is: `GET /rockets`

## Core Deliverables

As a user, I can:

- See all rocket names in a div with the id of "rockets". On page load, request data from the api to get all of the rocket objects. When you have this information, you'll need to add a span tag with the rocket's name to the bar at the top.

- Select a rocket from the bar at the top and see the info inside .rocektInfo div.

- Click on the "Like" button to like a rocekt.

- Add a "Comment" under the image likes.

- No persistance needed for likes or comments.