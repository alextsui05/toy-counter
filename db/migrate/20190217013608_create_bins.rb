class CreateBins < ActiveRecord::Migration[5.2]
  def change
    create_table :bins do |t|
      t.bigint :value, null: false, default: 0

      t.timestamps
    end
  end
end
