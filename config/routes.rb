Rails.application.routes.draw do
  resources :bins do
    member do
      post :increment
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
