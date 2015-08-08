module PiekusHelper
	def full_name(pieku)
		pieku.user.first_name + " " + pieku.user.last_name
	end
end
