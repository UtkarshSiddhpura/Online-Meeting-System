/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tce5mcf03xtocgl")

  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tce5mcf03xtocgl")

  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
})
