class ActivitiesController < ApplicationController
    
    def index
        activities = Activity.all
        render json: activities
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    def activity_description_length
        activities = Activity.all.select{|a| a.description.length <= params[:n].to_i}
        render json: activities
    end

    private


    def activity_params
        params.permit(:name, :description, :childs_age, :duration)
    end
end
