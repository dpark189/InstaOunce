# Welcome to InstaOunce

[Live Link] (https://insta-ounce.herokuapp.com)



![](https://lh3.googleusercontent.com/UZFJF0NdfJL4mORiQGw7OavxYF6kYRK3fW8kr_z8D1RF5fSYZmT-XfJ5WRxd2vFmQTpUDJzqIi72IO0nJxAUGOFrhB11N-qt0XpzoogCBf4o_7F9ybPqruVwwI9tdqsz2FKOttjmUUYLNEfa2GXVQ9VcwbcjBEdaIFNCJIthTSYBzJBBaqhFCkHjQcYPT7GrQU-jNQjq1QBVB83R0dlT5qTUg-SvUa_N3VYjdiCUZEVauwX3c-JSuNWMeIQXpPbnlO3Dmi-Tr9cPVvP_F08F8xER20Aq6HZAjLLxbyEi8oC2avWNxNQAGQrdLGO6yEFRwIXQ50o9gcHMd-lMe_oCGuUfkKfiviUtX-MGUEntX4FJu76qV3HYZMafE4qvozbAuh8Qswly5tIVQfpXznHvFisBm4riInCgFHu-rozcfKzMQhb93IeQfrmuksOpUYPIUYnNerAf1QN-oEOG-Xn31nBfI6IeUSM9cfDwzgLQShLDCoQpWuQ_MMNhwwT0NqMT3_uZ--9ei0RRaOguhM2WuC5ZHBKucrZX9ecAY0Xv6A9ZTQfGaH4KqTWYYXFVIuWxg5TqffHfCYPidPliqWMecZTaGxX-cktUJQaIYQg=w600-h348-no)

InstaOunce is a full-stack web application inspired by Instagram. The purpose of this app is to provide users with a way to share pictures, thoughts through posts, build small communities via hashtags, and ultimately connect people together. InstaOunce uses Ruby on Rails for the backend, a PostgreSQL database, and React/Redux architectural framework for the frontend.

## Technology
InstaOunce is built using the following: 
*  Backend:
   *  Ruby on Rails and PostGreSQL are used to keep track of information and data associations using a RESTful API.
   *  AWS stores media files posted by users.
*  Frontend: 
   *  React.js and Redux are used to manage the frontend DOM and user interactions while maintaining a normalized state which synchoronizes with backend data through the use of AJAX, Jbuilder and custom routes created in Ruby on Rails.
   
## Features

![](https://lh3.googleusercontent.com/lhHeDsKqeQ2_5ojgKS2UNHqTvjXg1mUWsbPrEusgKmisKtV7UkUo-Xf-O4eOV4ZGRMOYnhzSi92PYjHG2d68Ub4rcXRDteklBgJHT6hmO6TR-5BInjzIOVDekNRFI1i922cLTScDvrv9jmOPC1YS-ENrZ9_MCl_SX-n_IYr9Im_Ti7s-LgCytJn4n_Xji2J-hcK1Y1LuLPBs9RamwnF167_stbzGxwN_vhjmQlEtkyKPskzbmT0UlV6C8_e4FISjzipFfJnN_tcABC6Qzt43lCirxc016LH5MOuqhjhdv3c1Uqj5KiaiVDm-yATx0vp481BDXa_m2Vfw5aXfC-UnP3HWJh-AeMau-Uoh_JYrFRzPwR5Ke9j0jTF_G2rlZm95gZPboX8SUOBSZabLztL2ydVgFk0crrUYMAlEpThTdHYHZRZUVGyT2LemeXMPuIOI3w_siYQQDsISWzngXbXIITdSceKlAM2MfqDMLdg8xZojEx_4vLmO9sMd8sRoI0mo2LaFiUpylqAs34UiRswSyu8cY5T-oGBLmtAu7EPl8QhrbUDZkO_01IwWdsYEpbyr4LFj-saaAYiWLF8tuv_4FRXIb2bQlR8x0wzYwJo=w600-h338-no)

*  User authentication using BCrypt.
*  Users can create posts containing captions and multiple images which can then be seen by their followers and other authorized users.
*  The Ruby on Rails backend will automatically parse a new posts captions for hashtags and either create a new hashtag if it does not yet exist or create an assocation with an existing hashtag.
*  Clicking on a hashtag within a post's caption will render a hash tag page that displays all posts associated with that hashtag
*  A User's feed will display posts made by their favorite users through the follow system

![](https://lh3.googleusercontent.com/jCilSci3nqtU9GCwcqD8jnzuUcS9AA96XsBaNokDFC66MbxWMlF-jh_yRDeHouTBhKO8F2dtitD_57VrUIu-5QUQc471-lWgTVrAs0LVt8OjyKPt3iGNHe7h5Rygs0H0eFfsMC9gb45x8mdt8zTU2zcNQAjZ-QK2xSrIgnZ4_Jczif_IS6piq_xP4J-IDqyU797Wb3Ip0TBt3ngtW01DjsANYqoVp5PaRxeWOaeUwduuMJbxAG9C9Ydj4pFIRQgCTGvLkU6KfZqCsQ8ntSCzHZY3ZxBsyquVVyljx8-om3DGiE3eqxbd4JGoCWiuUbDsa7jUKpKE0UQFffYuj_irLKywIIoIUQdQU_xoGteI9ummausNuiX84GZ_G8px9SdWEFOeRYyGcDVMiTyV6Ai--7w5tD8qzifw_AL5h7-r-SGu7p9yyiUO7lBL63tgqeARhDlZBjOj_XAU5Dr_Dph3rxIUsuCmkZXlvSJ0cCZ_HQwCBXv3v7iEpTxiGzB0IrUn12LMK6zctOa6qWjO0siA1PCS9jpT21QLSO_EanC1uEacz6_t11MZW38DdL_i3-NRe4_iSE7kKPHXDvVHkG8VSjm_Y4x0ukIlLbHSeuw=w800-h447-no)

*  Upon logging in a user will immediately see a stories container that displays updates on users they follow who have posted within the last 5 days, ordered by the most recent update first.
*  Users can follow and unfollow other users.
*  Users can like and unlike posts made by other users, which increments or decrements the given post's like counter dynamically.
*  Users can comment and view comments on posts.
*  Users who wish to see posts made by users other than those they follow can go to the explore page to view posts from all users.
   *  Posts displayed in the explore page make use of modals to fully display the post.
*  Users also have the option to customize their avatar and edit their own profiles.

## Polymorphic assocations
Likes and hashtags make use of polymorphic associations. This was done to allow for the expansion of features. A soon to be implemented feature would allow users to like individual comments in addition to posts, and for hashtags written in a post's comment section to automatically generate an assocation between the post and the hashtag. As of 7/27/2018 this feature has not yet been implemented.

![](https://lh3.googleusercontent.com/Nc4RF9rrDzgpoqyMru5vO5ii6fVQCjIaBccgLSwMkMwikhwImyAa0_M09ZQEf8AMlddSkZNpCnmMR-KAaMUp_HaAopSx5eSyxfYBA5o9Pig5if6xPCc7HWJ2snbnHudyWs-LAMZj5z-nZF-QrhFFMlzPRKMT-TWWqbuvSrtOOWI29BtHZrA1rnYbOSNTyPrunhpcU_cfjIbdUW6yb2MrMxwg_Nk3ZneK4QJtOXQN5WuhPBO5eQrmhoABGGDCYvpwiuKUViflKxW3mpIXeBgVwD_W8--0zTSDU-8jtdq8gencB-n31t0wLJjtHrN25FsG3dqoumdjZZMav3gBYBPCujgRKEhR36CzGi1q5hMYnkOAtfNYvb_4I91mDBMAUF-TyUOH3vp6EcNdUCQzSOt7UJf7YcAU5vrEPO_cYD8PbHNxaBteYyZPKDx-wQYI0cV26OHqwefzINxti3fEdWKpXL9zJvBJ0NxUfZd7qQvqWK2E9LtbsPDcV1cwE0ZoinjjFBA14T3cBOI0bRw4KLtrqSwPPmRuWlNn56VxM4CCb8iM5k3zYBUAEL8DHK1WdGZ34qjF0Eh5nn6ecgfEH3KPlbB_j4r6Au4Q8T0csbc=w643-h163-no)

## Postscript

### Updates 8/10/2018
*  Implemented infinite scroll for user feed.
   *  Scrolling to bottom of a user's feed will load additional posts.
   *  10 posts will be fetched at a time to decrease unnecessary data transfers from database.
*  Implemented a search function that searches for users with matching usernames
*  Multiple images can be uploaded for a post.
*  Image carousel implemented, allowing for users to flip through images

### Short Term Future Features
*  Users will have the option to post videos.
*  Users can like comments and hashtags witten in the body of a comment belonging to a post will create an assocation between the post and the hashtag

### Long Term Future Features (not in any order)
*  Refactoring code for efficiency regarding backend server requests via AJAX.
*  Full test suite using RSpec and Jest.
*  Real time notifications through the use of websockets when a user's post or comment receives a comment/like, when they gain a new follower, or when there is an update from a user they follow.
*  More robust styling via additional CSS and JavaScript.

This is currently a work in progress, so please feel free to send me a message if you have any suggestions or comments!



