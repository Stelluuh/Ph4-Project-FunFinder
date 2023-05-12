class ActivitiesController < ApplicationController
    def index
        activities = Activity.all
        render json: activities
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

       # def show
    #     activity = find_activity
    #     render json: activity
    # end

    # def update
    #     activity = find_activity
    #     activity.update!(activity_params)
    #     render json: activity, status: :accepted
    # end

    # def destroy
    #     activity = find_activity
    #     activity.destroy
    #     head :no_content
    # end

    private

    # def find_activity
    #     activity = Activity.find(params[:id])
    # end

    def activity_params
        params.permit(:name, :description, :childs_age, :duration)
    end
end
