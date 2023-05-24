class User < ApplicationRecord
    has_many :schedules
    has_many :activities, through: :schedules

    has_secure_password 

    validates :name, :username, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true
end
