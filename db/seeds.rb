# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Listing.destroy_all
User.destroy_all
Reservation.destroy_all

chi = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8S3g3kFNmxGYJqbw8H4_3C36_Z2T22GRhA&usqp=CAU"
bkn = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iINABp4PbTLjPYz4YByenbna3AsUB93F3A&usqp=CAU"


Listing.create(location: "Chicago", description: "Nice place in heart of city", price: 100, available: true, image_url: chi)
Listing.create(location: "New York", description: "Right in the heart of Brooklyn", price: 50, available: true, image_url: bkn)

User.create(name: "Matt", email: "matt@aol.com", password: "t")

Reservation.create(user_id: 6, listing_id: 13, check_in: "05/05/2022", check_out: "05/11/2022")

