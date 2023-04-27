class Schedule < ApplicationRecord
  belongs_to :user
  belongs_to :activity
  
  validates :time_of_day, presence: true
  validates_uniqueness_of :time_of_day, scope: [:user_id, :activity_id] 
end
