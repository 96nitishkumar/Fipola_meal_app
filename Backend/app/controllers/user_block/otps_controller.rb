module UserBlock
  class OtpsController < ApplicationController
    skip_before_action :authentication
    before_action :find_or_initialize_otp, only: [:create]
    before_action :find_otp, only: [:verify_otp]

    def create
      return render_rate_limited_response if @otp_record.id && @otp_record.updated_at > 1.minute.ago
      if @otp_record.save
        render_successful_otp_sent_response 
      else
        render json: {errors: @otp_record.errors.full_messages}, status: 422
      end
    end

    def verify_otp
      return render_expired_otp_response if @otp_record.valid_upto < Time.now
      if @otp_record.otp_number == params[:otp_number]
        @otp_record.update_column("is_verified",true)
        render_successful_otp_verification_response(@otp_record.id) 
      else
        render json: { message: "Invalid Otp number" }, status: 422
      end
    end

    private

    def find_or_initialize_otp
      @otp_record = UserBlock::Otp.find_or_initialize_by(mobile_number: params[:mobile_number])
    end

    def find_otp
      @otp_record = UserBlock::Otp.find_by(mobile_number: params[:mobile_number])
      return render json: {errors: "Mobile number is not register, Please Register mobile number"}, status:404 if @otp_record.nil?
    end

    def render_rate_limited_response
      render json: { message: "Please try again after one minute" }, status: 429
    end

    def render_successful_otp_sent_response
      render json: { message: "Otp number successfully sent to your mobile number" }, status: 200
    end

    def render_expired_otp_response
      render json: { message: "Otp has been expired" }, status: 422
    end

    def render_successful_otp_verification_response id
      token = JwtToken.encode_token(otp_id: id)
      render json: { token: token, message: "Otp verified successfully..." }, status: 200
    end
  end
end
