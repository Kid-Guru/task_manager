require "test_helper"

class AdminTest < ActiveSupport::TestCase
  test "create" do
    developer = create :developer
    assert developer.persisted?
  end
end
