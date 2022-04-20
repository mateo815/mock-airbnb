class SessionsController < ApplicationController

    skip_before_action :authorize, only: :login

    def personal_reservations
        user = User.find_by!(id: session[:user_id])
        render json: user.reservations, status: :ok
    end

    def login 
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, methods: [:personal_reservations]
        else 
            render json: {errors: ["Invalid email or password"]},status: :unauthorized
        end
    end

    def is_logged_in
        render json: {loggedin: logged_in?}, status: :ok
    end

    def logout
        session.delete :user_id
        head :no_content
    end

    
end
