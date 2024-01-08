import sqlite3
from html import escape

def create_html_table(rows):
    table = "<table>\n<tr><th>Album ID</th><th>Title</th></tr>\n"
    for row in rows:
        table += f"<tr><td>{row[0]}</td><td>{escape(row[1])}</td></tr>\n"
    table += "</table>"
    return table


conn = sqlite3.connect("chinook.db")
cursor = conn.cursor()

# print(conn.total_changes)

artists_dict = dict(cursor.execute("SELECT ArtistId, Name FROM artists"))

while True:
    artist_name = input("Enter the name of an artist (type 'exit' to quit): ")
    
    if artist_name.lower() == 'exit':
        break
    
    artist_id = None
    for key, value in artists_dict.items():
        if value.lower() == artist_name.lower():
            artist_id = key
            break

    if artist_id is not None:
        query = f"SELECT AlbumId, Title FROM albums WHERE ArtistId = {artist_id}"
        albums = cursor.execute(query).fetchall()

        html_table = create_html_table(albums)

        file_name = f"{artist_id}.html"
        with open(file_name, "w") as file:
            file.write(html_table)

        print(f"HTML table saved in {file_name}")
    else:
        print("Artist not found.")

conn.close()
