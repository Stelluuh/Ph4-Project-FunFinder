class User < ApplicationRecord
    has_many :schedules
    has_many :activities, through: :schedules
    has_secure_password
    validates :username, uniqueness: true
end
