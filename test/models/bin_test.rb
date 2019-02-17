require 'test_helper'

class BinTest < ActiveSupport::TestCase
  test "the truth" do
    assert bins(:empty).valid?
    assert bins(:one).valid?
    assert bins(:two).valid?
  end
end
