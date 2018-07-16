Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: 'json' } do
    resources :comments, except: [:index]
    get ':commentedItemType/:commentedItemId/comments', to: 'comments#parent_comments', as: 'parent_comments'
    resources :users
    resource :session, only: [:create, :destroy]
    get 'sessions/:id', to: 'sessions#show'
    resources :posts, except: [:new]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
