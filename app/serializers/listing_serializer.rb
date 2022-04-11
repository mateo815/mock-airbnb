class ListingSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :price, :available
end
