class User < ActiveRecord::Base
	
	has_many :piekus, dependent: :destroy

	has_secure_password

	def full_name
		first_name + " " + last_name
	end
end
