class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users
    end

    # when a user signs up, they are automatically logged in
    def create
        user = User.create!(user_params) 
        session[:user_id] = user.id # this is the line that logs the user in by saving their id in the session hash
        render json: user, status: :created
    end

    # when a user logs in, they are automatically logged in
    # def show
    #     user = find_by(id: session[:user_id])
    #     render json: user, status: :ok
    # end

    def show 
        render json: @current_user
    end

    private

    def find_user
        user = User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end

end
