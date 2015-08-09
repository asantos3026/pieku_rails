class HomeController < ApplicationController
	before_filter :authorize, except: [:index, :show]
	
	def index
		@piekus = Pieku.all
	    render :index
	end
end