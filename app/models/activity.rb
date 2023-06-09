class Activity < ApplicationRecord
    has_many :schedules, dependent: :destroy
    has_many :users, through: :schedules
    
    validates :name, :description, :childs_age, :duration, presence: true
    validates :childs_age, :duration, numericality: true
    validates :childs_age, numericality: { greater_than: 0 }
end