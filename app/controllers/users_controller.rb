class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create] 

    # when a user signs up, they are automatically logged in
    def create
        user = User.create!(user_params) 
        session[:user_id] = user.id 
        render json: user, status: :created
    end

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
