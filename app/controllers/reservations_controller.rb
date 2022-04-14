class ReservationsController < ApplicationController
    
    def index
        render json: Reservation.all
    end
    
    
    # do i need to get user_id and listing_id?

    def create
        current_user = User.find_by(id: session[:user_id]) 
        listing = Listing.create(location: params[:location], description: params[:description], price: params[:price], apiId: params[:apiId]) unless listing[:apiId].exists
        if current_user
            res = Reservation.create(check_in: params[:check_in], check_out: params[:check_out], listing_id: listing.id,  user_id: current_user.id)
           
            if newRes.valid?
                render json: res, status: :created
            else
                render json: {errors: ["Unprocessable entity"]}, status: 422
            end
        else
            render json: {errors: ["Unauthorized user"]}, status: 401
        end
    end
   
        
    def show
        res = Reservation.find(params[:id])
    end

    private

    def reservation_params
        params.permit(:check_in, :check_out, :listing_id, :user_id)
    end

    def listing_params
        params.permit(:location, :price, :description)
    end



end
