class ChangeColumnValidUptoFromUserBlockOtps < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_block_otps, :valid_upto
    add_column :user_block_otps, :valid_upto, :datetime
  end
end
