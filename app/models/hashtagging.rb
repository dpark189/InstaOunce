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
  belongs_to :post, counter_cache: true
  belongs_to :hashtag, counter_cache: true
end
