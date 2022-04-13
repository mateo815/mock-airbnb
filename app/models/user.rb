class User < ApplicationRecord
    has_secure_password
    has_many :reservations
    has_many :listings, through: :reservations

    validates :name, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password, {presence: true, on: :create}
end
