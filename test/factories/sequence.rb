FactoryBot.define do
  sequence :string, aliases: [:first_name, :last_name, :password] do |n|
    "string#{n}"
  end
  sequence :email do |n|
    "person#{n}@example.com"
  end
  sequence :avatar do |n|
    "urlrandom#{n}"
  end
  sequence :name do |n|
    "task#{n}"
  end
  sequence :description do |n|
    "description task#{n}"
  end
  sequence :state do
    'new_task'
  end
  sequence :expired_at do
    (Date.today + 7).to_s
  end
end
