class SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    #LOGIN
    # from routes: post '/login', to: 'sessions#create'
    def create
        #first find the user by their username
        #if the user exists and the password is correct then we login
            # what this does is check if the user exists. adding .authenticate is a method given by bcrypt that checks if the password is correct.
        # byebug
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) 
            session[:user_id] = user.id # this is what actually logs the user in. It sets the session user_id to the user's id. This is how we keep track of the user that is logged in.
            render json: user, status: :created # we render the user as json
        else # we render an error:
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end
    
    #LOGOUT
    # from routes: delete '/logout', to: 'sessions#destroy'
    def destroy
        # byebug
        session.delete :user_id # we delete the session
        head :no_content # we send a response with no content
    end


end
