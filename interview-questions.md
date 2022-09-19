# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: you would add the foreign key through a new migration generated in rails. To keep tract of changes, the most recent migration will be named foreign_key_students. In the above example, it was explained that a foreign key was not initially added and needed to be added after the rails application was created. So, a new, updated, version of the rails application had to be created.  In the foreign_key_students migration, using new_column to add a new column for the foreign key. This foreign key, cohort_id, will refer to the cohort table.

Researched answer: Migrations are a way to alter the database schema in real time, creating a updated version of the database.  In the above example, a foreign key was not intially created at the time the rails application was created and needs to be added after the fact. A new migration would have to be created to generate a foreign key, essentially a new version of the database. new_column adds a new column to a data table. The foreign key column will be named cohort_id. Follwing the new changes, rails db:migrate is ran in terminal.

2. Which RESTful routes must always be passed params? Why?

Your answer: Create, update, destroy must be passed params. To identify what needs to be retrieved or destroyed, 'show' and 'destroy' are required to be passed params. in order for the database to be modified to add information, 'create', as does 'update', will use params to fill columns. 

Researched answer: The RESTful routes that must always be passed params are show, edit, update, and destroy. These routes, in order to identify what to retrieve, must be passed params. Which will be identified by id.

3. Name three rails generator commands. What is created by each?

Your answer: Rails generate, invoked by using rails g, uses established templates, to create a large number of things to save development time using installed Gems. For example, models, controllers, or tables. Generate establishes the MVC resource route and db migration. the naming convention for models must be sigular in nature and PascalCase. Rails g controller does as the name implies, creates the controller for the MVC, enables the user to create methods in order to retrieve and send responses. 

Researched answer: Rails g model creates a model that handles the data in the database. When invoked, a migration file and model file are generated. the naming conventions for model PascalCase and are singular. Rails g controller generates a controller. The controller manages the methods and routes, creating a bridge between the user and the app. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
