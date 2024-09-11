module UserBlock
  class UsersController < ApplicationController
  
    before_action :set_user, only: [:create]

    def create
      if @user
        update_user
      else
        create_user
      end
    end

    def show
      render json: {user: @otp_record.user }, status: 200
    end
    
    private
    
    def update_user
      if @user.update(user_params)
        render json: { user: @user, message: "User Updated successfully..." }, status: 200
      else
        render json: { errors: @user.errors.full_messages }, status: 422
      end
    end
    
    def create_user
      user = @otp_record.build_user(user_params)
      if user.save
        render json: { user: user, message: "User Register successfully..." }, status: 200
      else
        render json: { errors: user.errors.full_messages }, status: 422
      end
    end

    def set_user
      @user = @otp_record.user
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :profile)
    end

  end
end



