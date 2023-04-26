class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize # we call the authorize method before every single action

  private

  def render_not_found_response invalid
      render json: {error: "#{invalid.model} not found"}
  end

  def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  # the authorize method will be used as a before_action in other controllers. What it does is set the @current_user instance variable to the user who is logged in, based on the session[:user_id].  

    def authorize
        @current_user = User.find_by(id: session[:user_id])

        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

end
