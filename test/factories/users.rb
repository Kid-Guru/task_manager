FactoryBot.define do
  factory :user do
    first_name
    last_name
    password
    email
    avatar
    type { "" }
  end

  factory :developer do
    first_name
    last_name
    password
    email
    avatar
    type { "Developer" }
  end

  factory :admins do
    first_name
    last_name
    password
    email
    avatar
    type { "Admin" }
  end

  factory :managers do
    first_name
    last_name
    password
    email
    avatar
    type { "Manager" }
  end
end
