class ApplicationController < ActionController::API
  include JwtToken
  before_action :authentication

  def authentication
    header = request.headers['token']
    if header
      otp_id = JwtToken.decoded_token(header)[0]["otp_id"]
      unless otp_id
        render json: { errors: "Invalid Token" }, status: 401
        return
      end
      @otp_record = UserBlock::Otp.find(otp_id)
    else
      render json: { errors: "Token not Found" }, status: 404
    end
  end
  
  rescue_from StandardError, with: :handle_exception

  def handle_exception(exception)
    # logger.error("An error occurred: #{exception.message}")
    render json: { error: exception.message }, status: :internal_server_error
  end
end
