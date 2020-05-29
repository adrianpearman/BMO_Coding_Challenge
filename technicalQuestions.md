# Questions

1. How long did you spend on the coding assignment? What would you add to your
   solution if you had more time? If you didn&#39;t spend much time on the coding test
   then use this as an opportunity to explain what you would add.
2. What was the most useful feature that was added to the latest version of your
   chosen language? Please include a snippet of code that shows how you&#39;ve used
   it.
3. How would you track down a performance issue in production? Have you ever
   had to do this?
4. How would you improve the API that you just used?
5. Please describe yourself using JSON.

# Answers

1. In total, I had spent 5 hours working on the application. If I had more time to work on it, I would add a single restaurant view to highlight an individual restaurant.
2. JS Optional Chaining. It allows you to call a nested object value that may not be defined yet.
   E.g
   const user = {}
   let list = user.groceries.list ~ this will through an error
   let list = user?.groceries?.list? ~ this will not through an error
3. To track down performance issues in production; for the frontend code, I would firstly utilize the audit tools in the chrome dev tools as it allows for a detailed view of how the content is initially loaded. From that information, I can then look to optimize the loaded assets by either resizing or switching to more efficient datatypes.
4. To improve the API, I would love to see an option to filter the returned restaurants based on their price rating. According to their documentation, all the search parameters allow for different results to be returned, however, I found the price parameter to not change the returned values.
5.

{
"firstName": "Adrian",
"lastName": "Pearman",
"fullName": "Adrian Pearman",
"age": 28,
"university": "Saint Mary's University",
"hobbies": ["Sports", "Music", "Cooking","Travelling", "Reading"],
"favourites":{
"color": "Red",
"foods":["Pizza", "Tacos", "Pasta", "Pancakes"]
}
}
