class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id
      t.string :caption
      t.timestamps
    end
  end
end
