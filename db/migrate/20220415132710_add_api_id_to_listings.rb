class AddApiIdToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :api_id, :integer
  end
end
