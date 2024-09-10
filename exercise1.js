// inserting patients
db.patient.insertMany([
  {
    "firstName": "AAAA",
    "lastName": "BBBB",
    "age": 27,
    "history": [
      {
        "disease": "cold"
      },
      {
        "disease": "sarna"
      }
    ]
  },
  {
    "firstName": "CCCCC",
    "lastName": "DDDD",
    "age": 23,
    "history": [
      {
        "disease": "sarna"
      }
    ]
  },
  {
    "firstName": "Max",
    "lastName": "udemy",
    "age": 20,
    "history": [
      {
        "disease": "sarna"
      }
    ]
  }
])

//update patient data
db.patient.updateOne({
  "firstName": { $eq:"AAAA" }
},
{
  $set: {
    age: 28
  }
})
db.patient.find({
  age: {
    $gt: 30
  }
})
db.patient.find({ age: { $gt: 27 } })
db.patient.deleteMany({ "history.disease": { $in: ["cold"] } })

