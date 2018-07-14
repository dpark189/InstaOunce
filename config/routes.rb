Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: 'json' } do
    resources :users
    resource :session, only: [:show, :create, :destroy]
    resources :posts, except: [:new]
    get 'api/posts/:postId/comments', to: 'comments#post_comments', as: 'post_comments'
    get 'api/comments/:commentId/comments', to: 'comment#comment_comments', as: 'comment_comments'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
