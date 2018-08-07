@users.each do |user|
  json.extract! user, :id, :username, :phone_number, :email, :full_name, :website, :bio, :gender

  json.profile_picture do
    if user.profile_picture.attached? == true
      json.profile_pictureUrl url_for(user.profile_picture)
    else
      {}
    end
  end
end
