## sortBy

Write a function that can be used to sort an array of data objects by a provided key. Then, wire the util function into the table so that, when a user clicks on a given column header, the data on the table is sorted alphabetically on that column.

To wire the sortBy into our table, add a small button element to each column's table header that will sort the table when clicked. The sort should be in descending alphabetical order (A-Z), and all values on the data objects will be strings.

### Input:

```
const data = [
  {
    "member": "Person 4",
    "influencerType": "Type D",
    "indicationCategory": "Melanoma",
    "affiliation": "University of Michigan",
    "affiliationPosition": "Oncologist",
    "primaryState": "WI",
    "priority": "Low"
  },
  {
    "member": "Person 5",
    "influencerType": "Type D",
    "indicationCategory": "Renal Cell",
    "affiliation": "University of Minnesota",
    "affiliationPosition": "Radiation Oncologist",
    "primaryState": "PA",
    "priority": "High"
  },
  {
    "member": "Person 6",
    "influencerType": "Type D",
    "indicationCategory": "Renal Cell",
    "affiliation": "Cornell",
    "affiliationPosition": "Oncologist / Hematologist",
    "primaryState": "WI",
    "priority": "High"
  },
]
```

### Output (when sorting by affiliation):

```
const data = [
  {
    "member": "Person 6",
    "influencerType": "Type D",
    "indicationCategory": "Renal Cell",
    "affiliation": "Cornell",
    "affiliationPosition": "Oncologist / Hematologist",
    "primaryState": "WI",
    "priority": "High"
  },
  {
    "member": "Person 4",
    "influencerType": "Type D",
    "indicationCategory": "Melanoma",
    "affiliation": "University of Michigan",
    "affiliationPosition": "Oncologist",
    "primaryState": "WI",
    "priority": "Low"
  },
  {
    "member": "Person 5",
    "influencerType": "Type D",
    "indicationCategory": "Renal Cell",
    "affiliation": "University of Minnesota",
    "affiliationPosition": "Radiation Oncologist",
    "primaryState": "PA",
    "priority": "High"
  },
]
```
