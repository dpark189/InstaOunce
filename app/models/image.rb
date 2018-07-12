# == Schema Information
#
# Table name: images
#
#  id         :bigint(8)        not null, primary key
#  post_id    :integer
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer
#

class Image < ApplicationRecord
  validates :image_url, presence: true

  belongs_to :post
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
