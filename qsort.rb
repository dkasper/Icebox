def quicksort(l)
  return l if l.length <= 1
  pivot = l.pop
  less,greater = l.partition { |v| v < pivot}
  quicksort(less) + [pivot] + quicksort(greater)
end

if __FILE__ == $0
  a = gets.strip.split
else
  a = []
  while a.length < 50
    a << rand(1000000)
  end
end
puts quicksort(a).to_s
