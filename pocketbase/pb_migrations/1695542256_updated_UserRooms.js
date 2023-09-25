/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tce5mcf03xtocgl")

  collection.name = "userRooms"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tce5mcf03xtocgl")

  collection.name = "UserRooms"

  return dao.saveCollection(collection)
})
