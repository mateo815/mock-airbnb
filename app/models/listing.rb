class Listing < ApplicationRecord
    has_many :reservations
    has_many :users, through: :reservations

    validates :api_id, uniqueness: true
end
