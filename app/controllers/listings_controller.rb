class ListingsController < ApplicationController


    def search 
        parsedstring = CGI.escape(params[:location])
        url = "https://airbnb13.p.rapidapi.com/search-location?location=#{parsedstring}&checkin=2022-05-16&checkout=2022-05-17&adults=1&children=0&infants=0&page=1"
        api = RestClient.get(url, headers={'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com','X-RapidAPI-Key': '383737d655msh5c51b656428ee73p1c3e16jsnf76f5d938716'})
        firstresponse = {message: JSON.parse(api)}
        finalresponse = firstresponse[:message]['results']
        render json: finalresponse
    end

    def show
        listing = Listing.find_by!(id: params[:id])
        render json: listing
    end



    
end


