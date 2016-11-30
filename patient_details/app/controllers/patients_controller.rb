class PatientsController < ApplicationController
	def create
		@patient = Patient.new(params_patients)
		@patient.save
		render json:{message:"successfully created",data:@patient,status_code:201}
	end

	def index
		@patients = Patient.all
		render json:{data:@patients}
	end

	private
	def params_patients
		params.require(:patient).permit(:firstname,:lastname,:dob,:gender,:age,:phone,:description)
	end
end
