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
    # ---2) The controller is responsible for routing external requests to internal actions. Inside the controller, what the developer wants to happen is being defined. Through the ApplicationController to the BlogPostController. when the index method is triggered, the higher order function BlogPost.all is activated.
    @posts = BlogPost.all
  end

  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
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
      # ---8)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
