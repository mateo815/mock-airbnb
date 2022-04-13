class AddCheckInToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :check_in, :string
  end
end
