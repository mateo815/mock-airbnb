class RemoveCheckInFromReservations < ActiveRecord::Migration[6.1]
  def change
    remove_column :reservations, :check_in, :string
  end
end
