class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :time_of_day, :user_id, :activity
  belongs_to :user
  belongs_to :activity
end

