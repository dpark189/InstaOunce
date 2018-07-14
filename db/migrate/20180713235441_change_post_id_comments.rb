class ChangePostIdComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :post_id, :commented_item_id
    add_column :comments, :commented_item_type, :string
  end
end
