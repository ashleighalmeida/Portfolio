class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
  @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message. I will get back to you shortly!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end

  private

 def contact_params
   params.require(:contact).permit(:name, :email, :comments)
 end

  end
