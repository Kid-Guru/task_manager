FactoryBot.define do
  factory :user do
    first_name
    last_name
    password
    email { "MyString" }
    avatar { "MyString" }
    type { "" }
  end

  factory :developer do
    first_name
    last_name
    password
    email { "MyString" }
    avatar { "MyString" }
    type { "Developer" }
  end

  factory :admins do
    first_name
    last_name
    password
    email { "MyString" }
    avatar { "MyString" }
    type { "Admin" }
  end

  factory :managers do
    first_name
    last_name
    password
    email { "MyString" }
    avatar { "MyString" }
    type { "Manager" }
  end
end
