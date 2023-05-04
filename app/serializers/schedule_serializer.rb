class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :time_of_day, :user_id, :activity_id, :activity
  has_one :user
  has_one :activity
end

