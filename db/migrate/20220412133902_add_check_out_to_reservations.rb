class AddCheckOutToReservations < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :check_out, :string
  end
end
