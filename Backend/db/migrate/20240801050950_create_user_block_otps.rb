class CreateUserBlockOtps < ActiveRecord::Migration[7.0]
  def change
    create_table :user_block_otps do |t|
      t.string :mobile_number
      t.string :otp_number
      t.time :valid_upto
      t.boolean :is_verified, default: false

      t.timestamps
    end
  end
end
