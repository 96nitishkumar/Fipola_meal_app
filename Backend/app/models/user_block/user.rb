class UserBlock::User < ApplicationRecord
  self.table_name = :user_block_users
  belongs_to :otp, class_name:"UserBlock::Otp"
  has_one_attached :profile
  # delegate :otp_number, to: :otp
end
