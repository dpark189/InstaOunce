class AddIndexAuthorIdImagesTable < ActiveRecord::Migration[5.2]
  def change
    add_index :images, :author_id
  end
end
