Rails.application.routes.draw do
  root to: 'fundamentals#index'
  get 'fundamentals/flavor_of_directives'
  get 'fundamentals/list_rendering'
  get 'fundamentals/interactivity'
  get 'fundamentals/filters'
  get 'fundamentals/components'
  get 'fundamentals/custom_events'
  get 'fundamentals/class_and_style_bindings'
end
