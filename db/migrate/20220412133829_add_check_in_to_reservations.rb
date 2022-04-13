class AddCheckInToReservations < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :check_in, :string
  end
end
