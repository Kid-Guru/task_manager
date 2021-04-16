require "test_helper"

class ManagerTest < ActiveSupport::TestCase
  test "create" do
    developer = create :developer
    assert developer.persisted?
  end
end
