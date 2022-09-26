# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) rails created all the files associated with this particular controller. From this command, the controller is used as well as the view folder. The output in the terminal would be as follows:
        # create app/controller/blog_posts_controller.rb
        #     invoke erb
        #     create   app/views/main
        #     invoke helper
        #     create   app/helpers/main_helper.rb
        #     invoke assets
        #     invoke   scss
        #     create     app/assets/stylesheets/main.scss

        #  now methods can be added to the controller file that was created in the generate command. Inside the controller what the developer wants to happen is defined when the method is reached.

        
class BlogPostsController < ApplicationController
  def index
    # ---2) The controller is responsible for routing external requests to internal actions. Inside the controller, what the developer wants to happen is being defined. Through the ApplicationController to the BlogPostController. when the index method is triggered, the higher order function BlogPost.all is activated. BlogPost.all goes to the mvc BlogPost and returns all data in an array.
    @posts = BlogPost.all
  end

  # ---3) in the show method, one item is returned from the mvc that is assigned to the instance variable @post in the blogpost table, identified by id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new method is used to return needed data in order to create a new entry in the blogpost table. a form is created enabling the user to input datga into the table.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) at this point, create enables the database to accept new information. @post is assigned to the new query, generating a new blog post entry based on the set parameters.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) edit is used to change information in a data entry, identified by id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) the update method is used to reflect updates made to database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) here a if statement is used redirecting function back to the blog post that was intended to be destroyed, if @post was not destgroyed as instructed.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) a private key word must be used when blog_post_params is called making it secured.
  private
  def blog_post_params
    # ---10) for the blog_post table, the colums are title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
