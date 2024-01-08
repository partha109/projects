import json

def read_json_file(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

def extract_street_names(data):
    list_intersections = [feature['properties']['INTERSECTION'] for
feature in data['features']]
    lst_street_names = []
    for intersection in list_intersections:
        streets = intersection.split('@')[0].strip().split('/')
        for street in streets:
            street_name = street.strip().capitalize()
            if street_name not in lst_street_names:
                lst_street_names.append(street_name)
    return lst_street_names

def prepare_street_name(name):
    return name.capitalize()

def find_violations_by_street(street_name, data):
    violations_by_month = {month: 0 for month in ["January",
"February", "March", "April", "May", "June", "July", "August",
"September", "October", "November", "December"]}
    total_violations = 0

    street_name = street_name.lower().strip()

    for feature in data['features']:
        intersection = feature['properties']['INTERSECTION'].lower()
        streets_in_intersection = [s.strip() for part in
intersection.split('@') for s in part.split('/')]

        if street_name in streets_in_intersection:
            print(f"Found match: {intersection}")
            for month in violations_by_month.keys():
                month_violations = feature['properties'].get(month.upper())
                if month_violations and month_violations != "TBD":
                    try:
                        count = int(month_violations)
                        violations_by_month[month] += count
                        total_violations += count
                    except ValueError:
                        print(f"Error in data for {month}: {month_violations}")

    print(violations_by_month)
    return violations_by_month, total_violations


def main():
    file_path = 'Red_Light_Camera_Violations_2023.json'
    data = read_json_file(file_path)
    list_of_streets = extract_street_names(data)

    while True:
        street_name = input("Name of the street (x to exit)? ")
        if street_name.lower() == 'x':
            break

        street_name = prepare_street_name(street_name)
        if street_name not in list_of_streets:
            print("Street not found")
        else:
            violations_by_month, total_violations = find_violations_by_street(street_name, data)
            print(f"\nAll Red light violations on {street_name} street/road:\n")
            for month, count in violations_by_month.items():
                print(f"{month}: {count}")
            print(f"\nTotal violations: {total_violations}\n")

if __name__ == "__main__":
    main()
