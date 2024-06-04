class CreateLineFoods < ActiveRecord::Migration[7.1]
  def change
    create_table :line_foods do |t|

      t.timestamps
    end
  end
end
