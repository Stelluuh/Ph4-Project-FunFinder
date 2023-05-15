class SchedulesController < ApplicationController
    # I need to set up full CRUD in a way to ensure that any scheduleds created by a user are associeted with their account only.

    def index
        schedules = current_user.schedules
        render json: schedules
    end

    # def show
    #     render json: current_user.schedules.find(params[:id])
    # end

    def create
        schedule = current_user.schedules.create!(schedule_params)
        render json: schedule, status: :created
    end

    def update
        #find the schedule OF LOGGED IN USER that matches the ID from route params
        schedule = current_user.schedules.find(params[:id])
        #update the schedule with the data from the form
        schedule.update!(schedule_params)
        render json: schedule, status: :accepted
    end

    def destroy
        #find the schedule OF LOGGED IN USER that matches the ID from route params
        schedule = current_user.schedules.find_by(id: params[:id])
        # if schedule exists, destroy it
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
