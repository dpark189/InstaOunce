# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer
#  followee_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, :followee_id, presence: true
  validates :follower_id, uniqueness: {:scope => [:followee_id]}

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :User

  has_many :feed_posts,
    through: :followee,
    source: :posts
end
