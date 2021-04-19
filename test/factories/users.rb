FactoryBot.define do
  factory :user do
    first_name
    last_name
    password
    email
    avatar
    type { "" }

    factory :developer do
      type { "Developer" }
    end

    factory :admins do
      type { "Admin" }
    end

    factory :managers do
      type { "Manager" }
    end
  end


end
