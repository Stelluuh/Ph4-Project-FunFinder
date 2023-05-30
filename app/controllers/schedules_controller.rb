class SchedulesController < ApplicationController
    # I need to set up full CRUD in a way to ensure that any scheduleds created by a user are associeted with their account only.

    def index
        schedules = current_user.schedules
        render json: schedules
    end
    
    def create
        schedule = current_user.schedules.create!(schedule_params)
        render json: schedule, status: :created
    end

    def update
        schedule = current_user.schedules.find(params[:id])
        schedule.update!(schedule_params)
        render json: schedule, status: :accepted
    end

    def destroy
        schedule = current_user.schedules.find_by(id: params[:id])
        schedule.destroy
        head :no_content
     
    end

    private


    def current_user
        User.find(session[:user_id])
    end

    def schedule_params
        params.permit(:time_of_day, :user_id, :activity_id)
    end


end
