class ActivitiesController < ApplicationController
    
    def index
        activities = Activity.all
        render json: activities
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end


    private


    def activity_params
        params.permit(:name, :description, :childs_age, :duration)
    end
end
