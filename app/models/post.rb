# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer
#  caption    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :author_id, presence: true
  # validate :ensure_photos

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many_attached :photos

  has_many :likes, as: :liked_item

  has_many :comments, as: :commented_item


    # def ensure_photos
    #   unless self.photos.attached?
    #     errors[:photos] << "must be attached"
    #   end
    # end
end
