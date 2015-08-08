class User < ActiveRecord::Base
	
	has_many :piekus, dependent: :destroy

	has_secure_password
end
