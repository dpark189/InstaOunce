class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :liked_item_id
      t.string :liked_item_type
      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :liked_item_id
  end
end
