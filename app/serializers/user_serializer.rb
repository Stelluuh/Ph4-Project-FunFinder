class UserSerializer < ActiveModel::Serializer
  attributes :name, :username

  has_many :schedules
  has_many :activities, through: :schedules
end
