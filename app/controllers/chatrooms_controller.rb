class ChatroomsController < ApplicationController
  before_action :set_chatroom, only: [:show]

  def show
    @message = Message.new
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:id])
  end
end
