user_arr = []

json.follows do
  @follows.each do |follow|
    user_arr << follow.follower
    user_arr << follow.followee
    json.set! follow.id do
      json.partial! 'api/follows/follow', passed: follow
    end
  end
end

json.users do
  @follows.each do |follow|
    json.set! follow.follower_id do
      json.partial! 'api/users/user', user: follow.follower
    end
    json.set! follow.followee_id do
      json.partial! 'api/users/user', user: follow.followee
    end
  end
end
