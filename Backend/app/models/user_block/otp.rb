class UserBlock::Otp < ApplicationRecord
  require 'twilio-ruby'
  self.table_name = :user_block_otps
  has_one :user, class_name:"UserBlock::User"
  delegate :first_name, to: :user


  validates :mobile_number, presence: true, uniqueness: true, format: { with: /\A[6-9][0-9]{11}\z/, message: "should start with 6, 7, 8, or 9 and be a 10-digit number" }
  before_save :generate_opt
  # after_save :send_otp_to_mobile_number
  
  private


  def generate_opt
    self.otp_number = rand(1000..9999)
    self.valid_upto = (Time.now + 10.minutes)
    self.is_verified = false
  end

  def send_otp_to_mobile_number
    @client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
      
    @client.messages.create(
      from: '+15017122661',
      to: self.mobile_number,
      body: "Your OTP is: #{self.otp_number}"
    )
    
  end

end
