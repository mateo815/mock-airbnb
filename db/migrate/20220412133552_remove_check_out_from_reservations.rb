class RemoveCheckOutFromReservations < ActiveRecord::Migration[6.1]
  def change
    remove_column :reservations, :check_out, :date
  end
end
