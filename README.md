# Welcome to InstaOunce

[Live Link] (https://insta-ounce.herokuapp.com)

InstaOunce is a single page web app inspired by Instagram. Connect with other users and share pictures with friends and followers. 

## Technology
InstaOunce is built using the following: 
*  Backend:
   *  Ruby on Rails and PostGreSQL are used to keep track of information and data associations using a RESTful API.
   *  AWS stores media files posted by users.
*  Frontend: 
   *  React.js and Redux are used to manage the frontend DOM and user interactions while maintaining a normalized state which synchoronizes with backend data through the use of AJAX, Jbuilder and custom routes created in Ruby on Rails.
   
## Features
*  User authentication using BCrypt.
*  Users can create posts containing captions and images which can then be seen by their followers and other authorized users.
*  The Ruby on Rails backend will automatically parse a new posts captions for hashtags and either create a new hashtag if it does not yet exist or create an assocation with an existing hashtag.
*  Clicking on a hashtag within a post's caption will render a hash tag page that displays all posts associated with that hashtag
*  A User's feed will display posts made by their favorite users through the follow system
*  Upon logging in a user will immediately see a stories container that displays updates on users they follow who have posted within the last 5 days, ordered by the most recent update first.
*  Users can follow and unfollow other users.
*  Users can like and unlike posts made by other users, which increments or decrements the given post's like counter dynamically.
*  Users can comment and view comments on posts.
*  Users who wish to see posts made by users other than those they follow can go to the explore page to view posts from all users.
   *  Posts displayed in the explore page make use of modals to fully display the post.
*  Users also have the option to customize their avatar and edit their own profiles.

## Polymorphic assocations
Likes and hashtags make use of polymorphic associations. This was done to allow for the expansion of features. A soon to be implemented feature would allow users to like individual comments in addition to posts, and for hashtags written in a post's comment section to automatically generate an assocation between the post and the hashtag. As of 7/27/2018 this feature has not yet been implemented.

## Postscript

### Short Term Future Features Estimated to be Complete By 8/3/2018
*  More robust production Readme.
*  Multiple images can be posted on a single post.
*  If a post has multiple images, clicking arrow icons on the sides of the post will flip through each image.
*  Users will have the option to post videos.
*  Users can like comments and hashtags witten in the body of a comment belonging to a post will create an assocation between the post and the hashtag

### Long Term Future Features (not in any order)
*  Refactoring code for efficiency regarding backend server requests via AJAX.
*  Full test suite using RSpec and Jest.
*  Real time notifications through the use of websockets when a user's post or comment receives a comment/like, when they gain a new follower, or when there is an update from a user they follow.
*  More robust styling via additional CSS and JavaScript.

This is currently a work in progress, so please feel free to send me a message if you have any suggestions or comments!

