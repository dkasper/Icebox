Chars = ['p','o','p']
Adj = [[1,2], [0,2], [1,2]]
Words = []

def is_word(w)
	w == 'pop' || w == 'pp'
end

def get_words(i, prefix)
	new_prefix = prefix + [i]
	potential_word = new_prefix.map {|x| Chars[x] }.join('')
	Words << potential_word if is_word(potential_word)
	Adj[i].reject{|j| new_prefix.include?(j)}.each{|nxt| get_words(nxt, new_prefix)}
end

(0..2).each do |i|
	get_words(i, [])
end
puts Words
