import micropip

await micropip.install("snowballstemmer")  # Install snowballstemmer
from snowballstemmer import stemmer

print(stemmer("english").stemWords(["running", "easily", "quickly"]))  # ['run', 'easili', 'quick']
