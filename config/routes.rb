Rails.application.routes.draw do

  root "home#index"

  resources :piekus

  get "/signup", to: "users#new"
  get "/profile", to: "users#show"

  resources :users, only: [:create]

  get "/login", to: "sessions#new"
  get "logout", to: "sessions#destroy"

  resources :sessions, only: [:create]

end
