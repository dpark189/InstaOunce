# == Schema Information
#
# Table name: hashtaggings
#
#  id         :bigint(8)        not null, primary key
#  post_id    :integer
#  hashtag_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Hashtagging < ApplicationRecord
  belongs_to :post
  belongs_to :hashtag
end
