class Activity < ApplicationRecord
    has_many :schedules
    has_many :users, through: :schedules
    validates :name, :description, :childs_age, :duration, presence: true
    validates :childs_age :duration, numericality: true
end
