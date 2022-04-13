class ReservationsController < ApplicationController
    
    def index
        render json: Reservation.all
    end
    
    
    # do i need to get user_id and listing_id?

    def create
        @current_user = User.find_by(id: session[:user_id]) 
            
            newRes = Reservation.create(check_in: params[:check_in], check_out: params[:check_out], user_id: @current_user.id)
            byebug
            if newRes.valid?
                render json: newRes, status: :created
            else
                render json: {errors: ["Unprocessable entity"]}, status: 422
            end
    end
   
        
    def show
        res = Reservation.find(params[:id])
    end

    private

    def reservation_params
        params.require(:reservation).permit(:check_in, :check_out)
    end



end
