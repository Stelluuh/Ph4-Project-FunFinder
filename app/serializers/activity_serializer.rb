class ActivitySerializer < ActiveModel::Serializer
  attributes  :name, :description, :childs_age, :duration, :id

    has_many :schedules
    has_many :users, through: :schedules

    # def summary
    #     "#{object.name} is an activity that lasts #{object.duration} minutes. #{object.description[0..25]}..."
    # end
end
