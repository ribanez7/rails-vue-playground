Rails.application.routes.draw do
  get 'consuming_an_api', to: 'consuming_an_api#index'
  get 'consuming_an_api/http_clients'
  get 'consuming_an_api/pagination'

  root to: 'fundamentals#index'
  get 'fundamentals/flavor_of_directives'
  get 'fundamentals/list_rendering'
  get 'fundamentals/interactivity'
  get 'fundamentals/filters'
  get 'fundamentals/components'
  get 'fundamentals/custom_events'
  get 'fundamentals/class_and_style_bindings'
end
