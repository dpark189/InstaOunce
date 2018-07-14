Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: 'json' } do
    resources :users
    resource :session, only: [:show, :create, :destroy]
    resources :posts, except: [:new]
    get 'api/:commentedItemType/:commentedItemId/comments', to: 'comments#comments', as: 'parents_comments'

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
