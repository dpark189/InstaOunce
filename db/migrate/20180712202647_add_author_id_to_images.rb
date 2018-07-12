class AddAuthorIdToImages < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :author_id, :integer
  end
end
