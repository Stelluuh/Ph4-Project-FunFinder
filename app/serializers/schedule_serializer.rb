class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :time_of_day, :user_id, :activity_id
  has_one :user
  has_many :activities
end
