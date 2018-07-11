class UpdateUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :phone_number, :integer
    add_column :users, :email, :string
    add_column :users, :full_name, :string, null: false
    add_column :users, :website, :string
    add_column :users, :bio, :string
    add_column :users, :gender, :string
    add_column :users, :profile_picture, :string
    remove_index :users, :username
    add_index :users, :username, unique: true
  end
end
