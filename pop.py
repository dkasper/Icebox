chars = ['p','o','p']
adj = [[1,2],[0,2],[1,2]]
words = []

def is_word(word):
    print "testing %s" % word
    return word == "pop" or word == "pp"

def get_words(i, prefix):
    new_prefix = prefix + [i]
    potential_word = ''.join(map(lambda x: chars[x], new_prefix))
    if is_word(potential_word):
        words.append(potential_word)
    for nxt in [j for j in adj[i] if j not in new_prefix]:
        get_words(nxt, new_prefix)

if __name__ == '__main__':
    for i in range(len(adj)):
        get_words(i, [])
    print words
