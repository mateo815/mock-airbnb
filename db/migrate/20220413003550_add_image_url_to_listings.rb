class AddImageUrlToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :image_url, :string
  end
end
