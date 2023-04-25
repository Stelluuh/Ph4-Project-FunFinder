class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest

  has_many :schedules
  has_many :activities, through: :schedules
end
