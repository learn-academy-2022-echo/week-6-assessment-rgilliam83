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
    Index method would be used here. .all is most like the record query used to display all data, which can be verified by looking in the controller.

action: "POST" location: /students
    CREATE is the controller method used here. This will add a new student to the database.

action: "GET" location: /students/new
    NEW is the controller method used here. This will display an HTML form to create a new student. 

action: "GET" location: /students/2
    SHOW is the controller method used here. specifically, student id 2 information will be shown.

action: "GET" location: /students/2/edit
    EDIT is the controller method used here. Student id 2 will be modified in database.

action: "PATCH" location: /students/2
    UPDATE is the controller method used here. after changes made to student id 2, this will update the changes through migration.

action: "DELETE" location: /students/2
    DESTROY is the method used here. All information about student id 2 will be deleted from database.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    As a developer: 
        I can see all task prioritized by level of importance  on home page.
        
        I can select specific task and be routed to where title, date, time, description, and status of task item is shown.
        
        I can go back to home page from show page by clicking link in nav bar.
        
        I can add new task to list using button.
        
        A new task form will add new task to list.
        
        Submit button on from will allow task list to be updated with new task.
        
        I can click on a link to navigate back from New Page to the Home page.
    
        I can delete task from list by clicking button.
    
        I can click on a button that will direct me to Edit To-Do List Item page.
        
        I can click on a button that will update my To-Do List Item.