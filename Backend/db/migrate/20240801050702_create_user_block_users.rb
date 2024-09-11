class CreateUserBlockUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :user_block_users do |t|
      t.string :first_name
      t.string :last_name
      t.string :mobile_number
      t.string :email
      t.integer :otp_id

      t.timestamps
    end
  end
end
