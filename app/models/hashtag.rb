# == Schema Information
#
# Table name: hashtags
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Hashtag < ApplicationRecord
  validates :name, presence: true

  has_many :hashtaggings

  has_many :posts,
    through: :hashtaggings
end
