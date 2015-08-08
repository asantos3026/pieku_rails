class CreatePiekus < ActiveRecord::Migration
  def change
    create_table :piekus do |t|
      t.string :title
      t.string :line_1
      t.string :line_2
      t.string :line_3
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
