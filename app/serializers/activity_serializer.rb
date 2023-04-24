class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :childs_age, :duration
end
