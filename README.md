#Twitter SPA

After the clone, go the path twitter-spa/ and run npm install.

Apollo graphQL seem to have some issues so couldn't continue with the same.

So instead I have used http-server, by npm install http-server -g.

Once done, Open in visual studio(or any other ide). Open IDE terminal and run this command json-server --watch db.json. http://localhost:3000 will have the json I have created and that is what I am using.

Open CMD and go to the path where the project is created and run ng serve -o.

Login Page appears, enter <test@test.com> / <Test@123> and click on submit. Redirects to home.

On home page, enter "karmasakshi" to get correct details.

You can also type any random value in the adress bar and it should take you to 404 page.

Thank You.

