/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tce5mcf03xtocgl")

  collection.listRule = "user.rooms ?= @request.data.user.rooms"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tce5mcf03xtocgl")

  collection.listRule = "@request.data.room ?= room"

  return dao.saveCollection(collection)
})
