require 'sinatra'
require 'pry'
require 'json'
require 'base64'

get '/' do
  erb :index
end

post '/' do
  data = JSON.parse(request.body.read)

  puts data["pdf"]
  puts Base64.decode64(data["pdf"])

  File.open('./tmp/file.pdf', 'w') do |f|
    f.write(Base64.decode64(data["pdf"]))
  end

  status 204
end
