# Dev Tinder

 # authRouter
 -POST/signup
 -POST/login
 -POST/logout


# profieRouter
 -GET/profile/view
 -PATCH/profile/edit
 -PATCH/profile/password


 # connectionRequestRouter
 -POST/request/send/interested/:userId
 -POST/request/send/ignored:userId
 -POST/request/review/accepted/:requested
 -POST/request/review/rejected/:requestId


 # userRouter
 -GET/user/connections
 -GET/user/requests
 -GET/user/feed- gets you the profile of the other on platform

 statusLignore,interested,accepted,rejected