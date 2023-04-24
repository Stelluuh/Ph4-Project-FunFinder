class SchedulesController < ApplicationController

    def index
        schedules = Schedule.all
        render json: schedules
    end

    def show
        schedule = find_schedule
        render json: schedule
    end

    def create
        schedule = Schedule.create!(schedule_params)
        render json: schedule, status: :created
    end

    def update
        #find the schedule that matches the ID from route params
        schedule = find_schedule
        #update the schedule with the data from the form
        schedule.update!(schedule_params)
        render json: schedule, status: :accepted
    end

    def destroy
        #find the schedule that matches the ID from route params
        schedule = find_schedule
        # if schedule exists, destroy it
        schedule.destroy
        head :no_content
     
    end

    private
    
    def find_schedule
        schedule = Schedule.find(params[:id])
    end

    def schedule_params
        params.permit(:time_of_day, :user_id, :activity_id)
    end
end
