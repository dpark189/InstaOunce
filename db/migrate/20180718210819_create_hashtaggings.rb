class CreateHashtaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :hashtaggings do |t|
      t.integer :post_id
      t.integer :hashtag_id
      t.timestamps
    end
    add_index :hashtaggings, :post_id
    add_index :hashtaggings, :hashtag_id
  end
end
