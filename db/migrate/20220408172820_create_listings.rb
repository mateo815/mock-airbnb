class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :location
      t.text :description
      t.integer :price
      t.boolean :available

      t.timestamps
    end
  end
end
