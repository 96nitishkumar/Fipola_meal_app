class RemoveColumnMobileNumberFromUserBlockUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_block_users, :mobile_number
  end
end
