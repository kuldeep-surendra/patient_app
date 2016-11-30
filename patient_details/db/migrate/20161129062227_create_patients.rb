class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :firstname
      t.string :lastname
      t.integer :age
      t.date :dob
      t.string :gender
      t.string :phone
      t.string :description

      t.timestamps null: false
    end
  end
end
