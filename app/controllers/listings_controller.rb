class ListingsController < ApplicationController
    

    def get_listings
        require 'uri'
        require 'net/http'
        require 'openssl'
        
        url = URI("https://mashvisor-api.p.rapidapi.com/rental-rates?state=Il&source=airbnb&city=Chicago")
        
        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE
        
        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Host"] = 'mashvisor-api.p.rapidapi.com'
        request["X-RapidAPI-Key"] = '383737d655msh5c51b656428ee73p1c3e16jsnf76f5d938716'
        
        response = http.request(request)
        puts response.read_body
    end

    def index
        listings = Listing.all()
        render json: listings
    end
end

