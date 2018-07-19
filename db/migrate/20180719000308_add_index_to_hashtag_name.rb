class AddIndexToHashtagName < ActiveRecord::Migration[5.2]
  def change
    add_index :hashtags, :name
  end
end
