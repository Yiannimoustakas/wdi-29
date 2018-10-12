class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    user = User.create user_params   # strong params

    if user.persisted?
      # Account created successfully!
      session[:user_id] = user.id   # Log in the new user!!
      redirect_to user_path(user)   # go to the show page for this user
    else
      # Account not created: show error

      # Set a flash key to show on the next page: it will be an array of error strings
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path  # /users/new, show the form again (with errors)
    end


  end

  def show
    # raise '🌴'
    # console
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  # strong params, the doorman for the form fields
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
