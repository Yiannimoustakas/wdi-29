class MixtapesController < ApplicationController

  # Run the check_if_logged_in method in application_controller.rb
  # which redirects users to the login page if they are not logged
  # in - they need to be logged in to create and edit mixtapes
  # (because mixtapes belong_to users)
  # BUT they don't have to login to browse the mixtapes,
  # i.e. index and show actions
  before_action :check_if_logged_in, except: [:index, :show]

  def new
    @mixtape = Mixtape.new
  end

  def create
    # Multi-step way to create a new Mixtape record in the database
    # for when we have to add some data that is not in the submitted
    # form (i.e., the user ID from the currently logged-in user):
    # First make a .new object, set the extra field, then .save

    @mixtape = Mixtape.new( mixtape_params )  # strong params
    @mixtape.user = @current_user
    # could also write: mixtape.user_id = @current_user.id
    @mixtape.save
    # OR: @mixtape = @current_user.mixtapes.create mixtape_params

    if @mixtape.persisted?
      redirect_to mixtapes_path # redirect to index
    else
      # @mixtape did not get saved to the DB

      flash[:errors] = @mixtape.errors.full_messages # an array of error strings we can print
      # redirect_to new_mixtape_path

      # Render a *different* action's template (new instead of create)
      # We do this so the form can be pre-populated with the values typed
      # in by the user when they submitted it the first time
      render :new
    end


  end

  def index
    @mixtapes = Mixtape.all
  end

  def show
    @mixtape = Mixtape.find params[:id]  # key comes from /mixtapes/:id
  end

  def edit
    @mixtape = Mixtape.find params[:id]  # key comes from /mixtapes/:id
  end

  def update
    @mixtape = Mixtape.find params[:id]  # key comes from /mixtapes/:id

    # Check that the owner of this mixtape is STILL the logged-in user
    # (i.e. the ID in the edit form action was not tampered with)
    unless @mixtape.user == @current_user
      redirect_to(mixtapes_path) # this alone does not stop the action
      return  # stop the rest of the action from running! i.e. the update below
    end

    # check whether the update actually changed the DB or not
    # (.update returns true if it did change the DB, false if there was an error)
    if @mixtape.update( mixtape_params )
      # successfully updated the DB
      redirect_to mixtape_path(@mixtape) # redirect to show page
    else
      # error updating
      flash[:errors] = @mixtape.errors.full_messages
      render :edit   # Render the edit template to show the form, even though this is the update action
    end

  end # update

  def destroy
    mixtape = Mixtape.find params[:id]  # key comes from /mixtapes/:id
    mixtape.destroy
    redirect_to mixtapes_path
  end

  private
  def mixtape_params
    params.require(:mixtape).permit(:name, :image)
  end

end # class
