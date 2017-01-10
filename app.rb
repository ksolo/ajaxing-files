require 'sinatra'
require 'pry'
require 'json'
require 'base64'
require 'data_uri'

get '/' do
  erb :index
end

post '/' do
  data = JSON.parse(request.body.read)
  file_data = data["pdf"].split(" ")

  puts file_data[0]
  uri = URI::Data.new(*file_data)

  File.write('tmp/file.pdf', url.data)

  status 204
end
