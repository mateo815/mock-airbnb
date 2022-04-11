# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Listing.destroy_all
User.destroy_all

Listing.create(location: "Chicago", description: "Nice place in heart of city", price: 100, available: true)
Listing.create(location: "New York", description: "Right in the heart of Brooklyn", price: 50, available: true)

User.create(name: "Matt", email: "matt@aol.com", password: "t")


