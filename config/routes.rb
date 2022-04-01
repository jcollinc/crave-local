Rails.application.routes.draw do
  
  resources :order_items, only: [:index, :create, :destroy]
  resources :orders
  resources :menu_items
  resources :menus, only: [:index] 
  resources :restaurants, only: [:index, :show]
  get "/restaurants/:id/coords", to: "restaurants#get_coordinates"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  get "/current_user", to: "users#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
