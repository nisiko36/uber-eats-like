class Restaurant < ApplicationRecord
    has_many :foods
    has_many :line_foods, through::foods

    validates :name, :fee, :time_required, presence: true
    validates :name, length: { maximun: 30}
    validates :fee, numericality: { greater_than: 0}
end
