import json

file_path = "Red_Light_Camera_Violations_2023.json"

with open(file_path, "r") as file:
    data = json.load(file)


listIntersections = [feature["properties"]["INTERSECTION"] for feature in data["features"]]


lstStreetNames = [intersection.split('@')[0].strip() for intersection in listIntersections]


lstToSanitize = [name for name in lstStreetNames if '/' in name]


lstStreetNames = sorted(list(set(lstStreetNames).symmetric_difference(set(lstToSanitize))))


streets_to_add = [name for name in lstToSanitize if '/' in name]
lst1 = sorted(list(set(lstStreetNames + streets_to_add)))


listOfStreets = sorted(list(set(lst1)))


print("lstIntersections:")
print(listIntersections)
print("\nlstStreetNames:")
print(lstStreetNames)
print("\nlstToSanitize:")
print(lstToSanitize)
print("\nlst1:")
print(lst1)
print("\nListOfStreets:")
print(listOfStreets)

