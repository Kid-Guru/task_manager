FactoryBot.define do
  factory :user do
    first_name { generate :string }
    last_name { generate :string }
    password { generate :string }
    email { generate :email }
    avatar { generate :string }
    type { '' }

    factory :developer do
      type { 'Developer' }
    end

    factory :admin do
      type { 'Admin' }
    end

    factory :manager do
      type { 'Manager' }
    end
  end
end
