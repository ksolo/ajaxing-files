require 'sinatra'
require 'pry'

get '/' do
  erb :index
end

post '/' do
  binding.pry
  redirect '/'
end
