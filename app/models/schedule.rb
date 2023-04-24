class Schedule < ApplicationRecord
  belongs_to :user
  belongs_to :activity
  validates :time_of_day, presence: true
end
