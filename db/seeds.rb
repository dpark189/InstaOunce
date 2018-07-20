require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 10.times do
#   User.create(username: Faker::Name.name, password: 'password')
# end

# Post.create(author_id: 1, caption: "first post")

arr = [
  "#Cupcake",
 "#Parfait",
 "#Key Lime Pie",
 "#Sundae",
 "#Cake Pop",
 "#Frozen Yogurt",
 "#Ice Cream Cake",
 "#Trifle",
 "#Frozen Yogurt",
 "#Cake Pop",
 "#Cassandra",
 "#Orpheus",
 "#Medea",
 "#Icarus",
 "#Ismene",
 "#Hercules",
 "#Thrace",
 "#Semele",
 "#Diomedes",
 "#Abderus",
 "#Antilochus",
 "#Niobe",
 "#Eunostus",
 "#Antilochus",
 "#Icarus",
 "#Eunostus",
 "#Antigone",
 "#Diomedes",
 "#Chrysippus",
 "#Antigone"
]

# https://s3.amazonaws.com/insta-ounce-dev/data-seed/download+(1).jpeg
Faker::BackToTheFuture.character
25.times do
  user = User.create(
    username: Faker::Internet.username,
    password: "password",
    email: Faker::Internet.email,
    full_name: Faker::BackToTheFuture.character
  )
  num = rand(1..80)
  file = EzDownload.open("https://s3.amazonaws.com/insta-ounce-dev/data-seed/download+(#{num}).jpeg")
  user.profile_picture.attach(io: file, filename: "download (#{num}).jpeg")
end

User.all.each do |user|
  5.times do
    followee_id = rand(25)
    while followee_id == user.id do
      followee_id = rand(25)
    end
    post_id = rand
    Follow.create(follower_id: user.id, followee_id: followee_id)
  end
end

40.times do
  post = Post.create(author_id:(rand(20)), caption: Faker::ChuckNorris.fact)
  num = rand(1..80)
  file = EzDownload.open("https://s3.amazonaws.com/insta-ounce-dev/data-seed/download+(#{num}).jpeg")
  post.photos.attach(io: file, filename: "download (#{num}).jpeg")
end

User.all.each do |user|
  5.times do
    followee_id = rand(25)
    while followee_id == user.id do
      followee_id = rand(25)
    end
    post_id = rand(40)
    Like.create(liked_item_id: post_id, liked_item_type: "Post", user_id: user.id)
    Follow.create(follower_id: user.id, followee_id: followee_id)
  end
end

arr.each do |tag|
  hashtag = Hashtag.create(name: tag)
  post = Post.all[rand(Post.all.length)]
  caption = post.caption
  caption += " #{tag}"
  Hashtagging.create(hashtag_id: hashtag.id, post_id: post.id)
  post.update(caption: caption)
end

80.times do
  Comment.create(author_id: rand(25), commented_item_id: rand(40), commented_item_type: "Post", body: Faker::BackToTheFuture.quote )
end
