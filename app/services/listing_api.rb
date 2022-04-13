class ListingApi
    attr_reader :data

    def initialize(query)
        @query = query
        @data  = get
    end


    private

    def get_and_parse(uri)
        JSON.parse Net::HTTP.get()
    end

    def request_uri
        URI.parese
    end


end