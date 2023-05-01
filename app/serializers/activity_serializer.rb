class ActivitySerializer < ActiveModel::Serializer
  # attributes  :name, :description, :childs_age, :duration, :summary
  attributes  :name, :description, :childs_age, :duration, :summary, :id

    has_many :schedules
    has_many :users, through: :schedules

    def summary
        "#{object.name} is an activity that lasts #{object.duration} minutes. #{object.description[0..50]}..."
    end
end
