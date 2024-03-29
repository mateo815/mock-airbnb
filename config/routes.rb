Rails.application.routes.draw do
  

    
      resources :reservations
      resources :listings
      resources :users

  # routes for login logout 
  #signup --> users#signup
  post "/signup", to: "users#signup"
  # shows current user
  get "/me", to: "users#show"

  #login in
  post "/login", to:"sessions#login"
  #logout
  delete "/logout", to:"sessions#logout"
  #check is user is logged in
  get '/logged_in', to:"sessions#is_logged_in"

  get '/listings', to: 'listings#index'

  post '/search', to: 'listings#search'

  post '/reserve', to: 'reservations#reserve'

  get '/users', to: 'users#personal_reservations'


  

end
