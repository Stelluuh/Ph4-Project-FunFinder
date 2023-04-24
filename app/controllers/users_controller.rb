class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def show 
        user = find_user
        if user
            render json: user
        else
            render json: {error: "User not found"}
        end
    end

    private

    def find_user
        user = User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end
end
