require 'sinatra'

get '/' do
  erb :index
end

post '/' do
  puts params.inspect
  redirect '/'
end
