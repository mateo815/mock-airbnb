class RemoveCheckInFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :check_in, :string
  end
end
