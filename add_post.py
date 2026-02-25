import json
import sys

def add_post_to_file(file_path, post_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        posts = json.load(f)
    
    # Insert new post at the beginning
    posts.insert(0, post_data)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)

try:
    with open('post_en.json', 'r', encoding='utf-8') as f:
        post_en = json.load(f)
    with open('post_uk.json', 'r', encoding='utf-8') as f:
        post_uk = json.load(f)
    with open('post_pl.json', 'r', encoding='utf-8') as f:
        post_pl = json.load(f)

    add_post_to_file('src/data/blogPosts.json', post_en)
    add_post_to_file('src/data/blogPosts_uk.json', post_uk)
    add_post_to_file('src/data/blogPosts_pl.json', post_pl)
    print("Successfully added posts.")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
