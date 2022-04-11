class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :check_in, :check_out
  has_one :user
  has_one :listing
end
