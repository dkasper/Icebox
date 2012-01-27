class Node
  attr_accessor :value, :next
end

class Fifo
  def initialize
    @head = nil
    @tail = nil
  end

  def enqueue(v)
    n = Node.new
    n.value = v
    if @tail.nil? || @head.nil?
      @head = n
      @tail = n
    else
      @tail.next = n
      @tail = n
    end
  end

  def dequeue
    return nil unless @head
    oldhead = @head
    @head = oldhead.next
    oldhead.value
  end
end

describe Fifo, 'queue' do
  it "should enqueue-dequeue" do
    f = Fifo.new
    f.enqueue(1)
    f.dequeue.should == 1
  end

  it "should enqueue-dequeue multiple" do
    f = Fifo.new
    f.enqueue(1)
    f.enqueue(2)
    f.enqueue(3)
    f.dequeue.should == 1
    f.dequeue.should == 2
    f.dequeue.should == 3
    f.enqueue(4)
    f.dequeue.should == 4
  end

  it "should be nil on empty dequeue" do
    f = Fifo.new
    f.dequeue.nil?.should == true
  end
end
