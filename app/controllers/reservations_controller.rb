class ReservationsController < ApplicationController
    
    def index
        render json: Reservation.all
    end
    

    def create
        current_user = User.find_by(id: session[:user_id]) 
        listing = Listing.find_by(api_id: params[:api_id])
        if listing.nil? 
            new_listing = Listing.create(location: params[:location], description: params[:description], price: params[:price], api_id: params[:api_id])
            res = Reservation.create(check_in: params[:check_in], check_out: params[:check_out], listing_id: new_listing.id,  user_id: current_user.id)
            render json: res, status: :created
        elsif listing
            newres = Reservation.create(check_in: params[:check_in], check_out: params[:check_out], listing_id: listing.id,  user_id: current_user.id)
            render json: newres, status: :created
        else
            render json: {errors: ["Unprocessable entity"]}, status: 422
           
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
