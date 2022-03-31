class UsersController < ApplicationController


    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
            session[:user_id] = user.id
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user
      end

    private

    def user_params
        params.permit(:name, :username, :address, :password)
    end

end
