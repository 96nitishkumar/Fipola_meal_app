Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

 namespace :user_block do 
  resources :users, only: [:show, :create]

  resources :otps, only: [:create]
  get 'verify', to:'otps#verify_otp'
 end



end
