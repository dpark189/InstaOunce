# == Schema Information
#
# Table name: likes
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer
#  liked_item_id   :integer
#  liked_item_type :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# test
# Like.new(user_id: 1, liked_item_id: 1, liked_item_type: 'post')

class Like < ApplicationRecord
  validates :user_id, :liked_item_id, :liked_item_type, presence: true
  validates :liked_item_type, uniqueness: {:scope => [:liked_item_id, :user_id]}

  belongs_to :user, counter_cache: true
  belongs_to :liked_item, polymorphic: true, counter_cache: true
end
